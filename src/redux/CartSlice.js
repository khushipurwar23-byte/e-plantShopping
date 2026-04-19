import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ REQUIRED
    addItem: (state, action) => {
      const item = action.payload;

      const existing = state.cartItems.find(
        (i) => i.id === item.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    // ✅ REQUIRED
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // ✅ REQUIRED
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.cartItems.find(
        (i) => i.id === id
      );

      if (item) {
        if (type === "increase") item.quantity += 1;
        if (type === "decrease" && item.quantity > 1)
          item.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;