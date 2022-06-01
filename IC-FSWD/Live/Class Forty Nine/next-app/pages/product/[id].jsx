import Link from "next/link";

const ProductDetails = ({ data }) => {
  return (
    <div>
      <h2>Product Details</h2>

      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>

      <Link href="/product/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default ProductDetails;

export async function getStaticProps({ params }) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id).then((res) => res.json());

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/").then((res) => res.json());

  const paths = data.map((item) => ({
    params: {
      id: item.id + "",
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
