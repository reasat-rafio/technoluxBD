import {
   ADD_FIRST_ITEM,
   ADD_TO_THE_CART,
   PLUS_QUANTITY,
   ADD_ITEM,
   REMOVE_ITEM,
} from "../types";

export const addToTheCart = (item) => {
   return {
      type: ADD_TO_THE_CART,
      payload: item,
   };
};

export const addFirstItemToTheCart = (item) => {
   return {
      type: ADD_FIRST_ITEM,
      payload: item,
   };
};

export const plusTheQuantityOfTheExistingItem = (id) => {
   return {
      type: PLUS_QUANTITY,
      payload: id,
   };
};

export const addNonExistingItemInTheCart = (item) => {
   return {
      type: ADD_ITEM,
      payload: item,
   };
};

export const removeFromCart = (id) => {
   return {
      type: REMOVE_ITEM,
      payload: id,
   };
};
