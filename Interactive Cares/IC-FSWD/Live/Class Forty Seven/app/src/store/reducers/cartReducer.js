import { ADD_TO_CART, CLEAR_CART, MODIFY_QUANTITY, REMOVE_FROM_CART } from "../actionTypes/cartActions";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.find((item) => item.id === action.payload.id);

      if (product) {
        return state.map((item) => {
          if (item.id === product.id) {
            item.quantity = item.quantity + 1;
          }

          return item;
        });
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);

    case MODIFY_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }

        return item;
      });

    case CLEAR_CART:
      return []

    default:
      return state;
  }
};
