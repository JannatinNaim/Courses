import { useFetch } from "../hooks/useFetch";

const Post = () => {
  const { data: posts, isLoading } = useFetch("https://jsonplaceholder.typicode.com/posts/", []);

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {isLoading && <p>Loading...</p>}
        {posts.slice(0,9).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Post;
