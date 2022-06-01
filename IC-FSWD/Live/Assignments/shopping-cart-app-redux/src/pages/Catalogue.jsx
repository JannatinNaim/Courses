import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../reducers/actionTypes/cartActions";
import { Link } from "react-router-dom";

const Catalogue = () => {
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const buyProduct = (product) => {
    dispatch({
      type: ADD_ITEM,
      payload: product,
    });
  };

  return (
    <div>
      {allProducts.map((product) => (
        <div key={product.id}>
          {product.name}
          <br />$ {product.price}
          <br />
          <button onClick={() => buyProduct(product)}>Buy</button>
        </div>
      ))}

      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};

export default Catalogue;
