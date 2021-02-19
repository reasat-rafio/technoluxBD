import {
   HIDE_SIDE_BAR,
   SHOW_SEARCH_PAGE,
   SHOW_SIDE_BAR,
   HIDE_SEARCH_PAGE,
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
