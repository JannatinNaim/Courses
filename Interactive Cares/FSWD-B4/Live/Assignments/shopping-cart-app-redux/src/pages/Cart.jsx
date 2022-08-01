import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  let grandTotal = 0;

  cart.forEach((product) => {
    grandTotal += product.price * product.quantity;
  });

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <div>You're going to spend a grand total of: {grandTotal}</div>

      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default Cart;
