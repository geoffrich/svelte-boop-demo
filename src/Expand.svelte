<script>
  import boop from './boop.js';

  let expanded = false;
  let boopElement;

  function handleClick() {
    expanded = true;
  }
</script>

<style>
  button {
    margin: 0px;
    border: medium none;
    cursor: pointer;
    display: flex;
    font-size: 24px;
    padding: 4px 8px 4px 16px;
    border-radius: 8px;
    background: hsl(210deg, 15%, 20%);
    color: hsl(0deg, 0%, 100%);
  }

  button:not(:disabled):active {
    background: hsl(210deg, 15%, 20%);
    transform: scale(0.95);
  }

  .buttonText {
    margin-right: 8px;
  }
</style>

<button use:boop={{ x: 5, timing: 200, boopElement }} on:click={handleClick}>
  <span class="buttonText">Show more</span>
  <span bind:this={boopElement}>
    <i fill="currentColor" style="display:inline-block">
      <svg
        fill="none"
        style="display:inline-block;vertical-align:middle"
        height="32"
        width="32"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </i>
  </span>
</button>

{#if expanded}
  <p>Now you see me!</p>
{/if}
