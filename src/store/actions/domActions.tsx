import {
   HIDE_SIDE_BAR,
   SHOW_SEARCH_PAGE,
   SHOW_SIDE_BAR,
   HIDE_SEARCH_PAGE,
   SET_PAGE_WIDTH_ON_RESIZE,
   SHOW_CART_SIDEBAR,
   HIDE_CART_SIDEBAR,
} from "../types";

export const showSideNavBar = () => {
   return {
      type: SHOW_SIDE_BAR,
   };
};

export const hideSideNavBar = () => {
   return {
      type: HIDE_SIDE_BAR,
   };
};

export const showSearchPage = () => {
   return {
      type: SHOW_SEARCH_PAGE,
   };
};

export const hideSearchPage = () => {
   return {
      type: HIDE_SEARCH_PAGE,
   };
};

export const pageResizeWidth = (payload: number) => {
   return {
      type: SET_PAGE_WIDTH_ON_RESIZE,
      payload,
   };
};

export const showCart = () => {
   return {
      type: SHOW_CART_SIDEBAR,
   };
};

export const hideCart = () => {
   return {
      type: HIDE_CART_SIDEBAR,
   };
};
