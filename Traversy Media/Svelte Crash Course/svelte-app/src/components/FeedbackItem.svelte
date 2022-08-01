<script>
  import { createEventDispatcher } from "svelte/types/runtime";
  import Card from "./Card.svelte";

  export let feedback = {};

  const dispatch = createEventDispatcher();
  const handleDelete = (id) => {
    dispatch("delete_feedback", id);
  };
</script>

<Card>
  ID: {feedback.id}
  Rating: {feedback.rating}
  Description: {feedback.text}

  <button on:click={() => handleDelete(feedback.id)}>Delete</button>
</Card>
