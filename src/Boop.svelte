<script>
	import { spring } from 'svelte/motion';
	
	let isBooped = false;
	export let rotation = 0;
	export let timing = 150;
	
	let springyRotation = spring(0, {
		stiffness: 0.1,
		damping: 0.15
	});
	
	$: springyRotation.set(isBooped ? rotation : 0);
	
	$: style = `
		display: inline-block;
		transform: rotate(${$springyRotation}deg)
	`;	

	$: if (isBooped) {		
		window.setTimeout(() => {isBooped = false}, timing);
	}
	
	function triggerBoop() {
		isBooped = true;
	}
</script>

<!-- trigger onclick so demo works on mobile -->
<span on:mouseenter={triggerBoop} on:click={triggerBoop} style={style}>
	<slot/>
</span>