import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_ITEM_QUANTITY, DELETE_ITEM } from "../reducers/actionTypes/cartActions";

const CartItem = ({ product }) => {
  const [customQuantity, setCustomQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    if (customQuantity < 1) {
      dispatch({
        type: DELETE_ITEM,
        payload: product,
      });

      return;
    }

    dispatch({
      type: UPDATE_ITEM_QUANTITY,
      payload: {
        ...product,
        quantity: customQuantity,
      },
    });
  }, [customQuantity]);

  return (
    <div>
      {product.name}
      <br />

      <div>Total Price $ {product.price * product.quantity}</div>

      <div>
        <button
          onClick={() => {
            // dispatch({
            //   type: ADD_ITEM,
            //   payload: product,
            // });

            setCustomQuantity((prevState) => prevState + 1);
          }}
        >
          +
        </button>

        <input
          required
          type="number"
          value={customQuantity}
          onChange={(e) => setCustomQuantity(parseInt(e.target.value))}
        />

        <button
          onClick={() => {
            // dispatch({
            //   type: REMOVE_ITEM,
            //   payload: product,
            // });

            setCustomQuantity((prevState) => prevState - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
