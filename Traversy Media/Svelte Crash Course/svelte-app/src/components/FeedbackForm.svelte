<script>
  import Button from "./Button.svelte";

  let text = "";
  let message = "";
  const minLength = 10;
  let buttonDisabled = true;

  const handleInput = () => {
    if (text.trim().length > minLength) {
      buttonDisabled = false;
      message = "";
    } else {
      buttonDisabled = true;
      message = "message must be at least 10 characters.";
    }
  };
</script>

<form>
  <div>
    <input
      type="text"
      on:input={handleInput}
      bind:value={text}
      placeholder="doesnt matter"
    />
    <Button type="submit" disabled={buttonDisabled}>Add</Button>
  </div>

  {#if message}
    <p>{message}</p>
  {/if}
</form>
