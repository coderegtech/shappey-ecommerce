import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: {
      reducer(state, action) {
        state.cart.push(action.payload);
      },
      prepare({
        user_uid,
        productImgUrl,
        productDescription,
        productPrice,
        productQuantity,
      }) {
        return {
          payload: {
            id: nanoid(),
            user_uid,
            productImgUrl,
            productDescription,
            productPrice,
            productQuantity,
            submittedDate: new Date().toISOString(),
          },
        };
      },
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const currentItem = state.cart.filter((c) => c.id !== id);
      state.cart = currentItem;
    },
  },
});

export const { addCartItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
