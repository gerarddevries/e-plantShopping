import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartItems: [], // Initialize items as an empty array
  },

  reducers: {
    addItem: (P_state, P_action) => { // P_action.payload is entire product
      const L_productFromAction = P_action.payload;
      const L_existingItem = P_state.cartItems.find(itemToCheck => itemToCheck.name === L_productFromAction.name);
      
      if (L_existingItem) {
        L_existingItem.quantity++;
      } else {
        P_state.cartItems.push({ ...L_productFromAction, quantity: 1 });
      }
    },

    removeItem: (P_state, P_action) => {
        P_state.cartItems = P_state.cartItems.filter(itemToRemove => itemToRemove.name !== P_action.payload);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
