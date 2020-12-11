import { spring } from 'svelte/motion';

function getPrefersReducedMotion() {
  const QUERY = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}

export default function boop(
  node,
  { x = 0, y = 0, rotation = 0, scale = 1, timing = 100, boopElement }
) {
  if (getPrefersReducedMotion()) return;
  let timeoutId;

  node.addEventListener('mouseenter', handleBoop);
  // only for demo purposes on mobile
  node.addEventListener('click', handleBoop);

  let springyRotation = spring(
    { x: 0, y: 0, rotation: 0, scale: 1 },
    {
      stiffness: 0.1,
      damping: 0.15
    }
  );

  function handleBoop() {
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
      node.removeEventListener('mouseenter', handleBoop);
      node.removeEventListener('click', handleBoop);
      unsubscribe();
    }
  };
}
