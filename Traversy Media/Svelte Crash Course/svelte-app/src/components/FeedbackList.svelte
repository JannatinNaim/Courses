<script>
  import FeedbackItem from "./FeedbackItem.svelte";

  export let feedbacks = [];
</script>

{#each feedbacks as feedback (feedback.id)}
  <FeedbackItem on:delete_feedback {feedback} />
{/each}
