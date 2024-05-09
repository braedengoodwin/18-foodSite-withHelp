import { createContext, useReducer } from "react";
import React from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //... update the state to add a meal item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items]
    
    if(existingCartItemIndex > -1){
        const existingItem = state.items[existingCartItemIndex]
        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity +1
        }
        updatedItems[existingCartItemIndex] = updatedItem
    } else{
        // adding item if it wasn't already in arry
        updatedItems.push({...action.item, quanity: 1})
    }

    return {...state, items: updatedItems}
  }

  if (action.type === "REMOVE_ITEM") {
    /// ... remove an item from the state
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;