<script>
  import boop from './boop.js';
  export let boopParams;
</script>

<!-- trigger onclick so demo works on mobile -->
<span use:boop={{ triggers: ['click', 'mouseenter'], ...boopParams }}>
  <slot />
</span>
