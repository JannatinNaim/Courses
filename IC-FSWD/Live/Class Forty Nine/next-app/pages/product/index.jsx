import Link from "next/link";

const Product = ({ data }) => {
  return (
    <div>
      <h2>Products</h2>

      {data.map((item) => (
        <p key={item.id}>
          <p>{item.title}</p>

          <Link href={"/product/" + item.id}>
            <a>Details</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Product;

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/").then((res) => res.json());

  return {
    props: { data },
  };
}
