<!--
  <script>
  let users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];

  $: userLimitReached = users.length === 26;

  function addUser() {
    if (userLimitReached) return;

    const lastUser = users[users.length - 1];
    users = [
      ...users,
      {
        id: lastUser.id + 1,
        name: String.fromCharCode(lastUser.name.charCodeAt(0) + 1),
      },
    ];
  }
</script>

<main class="main">
  <h1 class="heading">Users</h1>
  {#if userLimitReached}
    <p class="error">Cannot add any more users.</p>
  {:else}
    <button on:click={addUser} class="button">Add More</button>
  {/if}

  <ul class="list">
    {#each users as user (user.id)}
      <li class="list-item">{user.id}: {user.name}</li>
    {/each}
  </ul>
</main>

<style>
  .main {
    max-width: 400px;
    margin: auto;
    padding: 0.8rem;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 22%);
    border-radius: 0.8rem;
  }

  .heading {
    text-align: center;
    text-transform: uppercase;
  }

  .button {
    display: block;
    background: none;
    margin: auto;
    padding: 0.8rem;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 33%);
    border-radius: 0.4rem;
  }

  .button:hover {
    cursor: pointer;
  }

  .error {
    color: red;
    text-align: center;
  }
</style>
-->
<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";

  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";

  let feedbacks = [
    { id: 1, rating: 5, text: "1" },
    { id: 2, rating: 3, text: "2" },
    { id: 3, rating: 2, text: "3" },
  ];

  $: feedback_count = feedbacks.length;
  $: feedback_rating_sum = feedbacks.reduce(
    (acc, curr) => acc + curr.rating,
    0
  );

  const deleteFeedback = (e) => {
    const id = e.detail;
    feedbacks = feedbacks.filter((feedback) => feedback.id !== id);
  };
</script>

<main class="main">
  <FeedbackForm />
  <FeedbackStats count={feedback_count} sum={feedback_rating_sum} />
  <FeedbackList {feedbacks} on:delete_feedback={deleteFeedback} />
</main>

<style>
  .main {
    max-width: 600px;
    margin: auto;
  }
</style>
