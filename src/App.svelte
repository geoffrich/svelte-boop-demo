<script>
  import HelpButton from './HelpButton.svelte';
  import Boop from './Boop.svelte';
  import BoopAction from './BoopAction.svelte';
  import Expand from './Expand.svelte';
</script>

<style>
  :global(button:focus) {
    outline: 3px solid black;
  }
</style>

<h1>Boop hover animations</h1>

<h2>A {'<Boop>'} Component</h2>
<Boop rotation={20} timing={200}>
  <HelpButton />
</Boop>

<h2>A <code>boop</code> action</h2>
<BoopAction boopParams={{ rotation: 20, timing: 200 }}>
  <HelpButton />
</BoopAction>
<BoopAction boopParams={{ scale: 1.2, timing: 200 }}>
  <HelpButton />
</BoopAction>
<BoopAction boopParams={{ y: 5, timing: 200 }}>
  <HelpButton />
</BoopAction>

<h2>Triggering boop on hover of whole component</h2>
<Expand />
