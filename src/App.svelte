<script>
  import HelpButton from './HelpButton.svelte';
  import Boop from './Boop.svelte';
  import Expand from './Expand.svelte';
</script>

<style>
  :global(button:focus) {
    outline: 3px solid black;
  }
</style>

<h1>Boop hover animations</h1>

<h2>A <code>boop</code> action</h2>
<Boop boopParams={{ rotation: 20 }}>
  <HelpButton />
</Boop>
<Boop boopParams={{ scale: 1.2 }}>
  <HelpButton />
</Boop>
<Boop boopParams={{ y: 5 }}>
  <HelpButton />
</Boop>

<h2>Triggering boop on hover of whole component</h2>
<Expand />
