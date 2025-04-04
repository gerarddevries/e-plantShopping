import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartItems: [],
  },

  reducers: {
    addItem: (P_state, P_action) => {   // P_action.payload is entire product
      console.log("CartSlice.addItem");

      const L_productFromAction = P_action.payload;
      const L_existingItem = P_state.cartItems.find(L_itemToCheck => L_itemToCheck.name === L_productFromAction.name);
      
      if (L_existingItem) {
        L_existingItem.quantity++;
      } else {
        // add "quantity" to L_productFromAction and add it to the array
        P_state.cartItems.push({ ...L_productFromAction, quantity: 1 }); 
      }

      console.log("Item added. Total different plants: ", P_state.cartItems.length);
    },

    removeItem: (P_state, P_action) => {   // P_action.payload is entire product
      P_state.cartItems = P_state.cartItems.filter(itemToRemove => itemToRemove.name !== P_action.payload.name);

      console.log("CartSlice.removeItem");
    },

    updateQuantity: (P_state, P_action) => {   // P_action.payload is entire product
      const L_productFromAction = P_action.payload;
      const L_itemToUpdate = P_state.cartItems.find(itemToUpdate => itemToUpdate.name === L_productFromAction.name);

      if (L_itemToUpdate) {
        L_itemToUpdate.quantity = L_productFromAction.quantity;
      }

      console.log("CartSlice.updateQuantity");
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
