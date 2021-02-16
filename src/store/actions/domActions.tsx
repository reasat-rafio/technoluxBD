import { HIDE_SIDE_BAR, SHOW_SIDE_BAR } from "../types";

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
