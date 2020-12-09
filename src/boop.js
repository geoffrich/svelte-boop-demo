import { spring } from 'svelte/motion';

function getPrefersReducedMotion() {
  const QUERY = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}

export default function boop(node, params) {
  if (getPrefersReducedMotion()) return;
  let {
    triggers = [],
    x = 0,
    y = 0,
    rotation = 0,
    scale = 1,
    timing = 100,
    boopElement
  } = params;
  let timeoutId;

  triggers.forEach((trigger) => {
    node.addEventListener(trigger, handleTrigger);
  });

  let springyRotation = spring(
    { x: 0, y: 0, rotation: 0, scale: 1 },
    {
      stiffness: 0.1,
      damping: 0.15
    }
  );

  function handleTrigger() {
    clearTimeout(timeoutId);
    springyRotation.set({ x, y, rotation, scale });

    timeoutId = setTimeout(() => {
      springyRotation.set({ x: 0, y: 0, rotation: 0, scale: 1 });
    }, timing);
  }

  const unsubscribe = springyRotation.subscribe(({ x, y, rotation, scale }) => {
    const element = boopElement || node;
    element.style.display = 'inline-block';
    element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
  });

  return {
    update(params) {
      ({
        x = 0,
        y = 0,
        rotation = 0,
        scale = 1,
        timing = 100,
        boopElement
      } = params);
    },
    destroy() {
      clearTimeout(timeoutId);
      triggers.forEach((trigger) => {
        node.removeEventListener(trigger, handleTrigger);
      });
      unsubscribe();
    }
  };
}
