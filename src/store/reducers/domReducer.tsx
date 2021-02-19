import {
   HIDE_SEARCH_PAGE,
   HIDE_SIDE_BAR,
   SHOW_SEARCH_PAGE,
   SHOW_SIDE_BAR,
} from "../types";

type Action = {
   type: string;
   payload?: any;
};

interface stateInterFace {
   isLoggedIn: boolean;
   showSidebar: boolean;
   showOverlayAuthPage: boolean;
   showSearchPage: boolean;
}

export const initialDomState = {
   isLoggedIn: false,
   showSidebar: false,
   showOverlayAuthPage: false,
   showSearchPage: false,
};

export const domReducer = (state: stateInterFace, action: Action) => {
   switch (action.type) {
      case SHOW_SIDE_BAR:
         return {
            ...state,
            showSidebar: true,
         };
      case HIDE_SIDE_BAR:
         return {
            ...state,
            showSidebar: false,
         };

      case SHOW_SEARCH_PAGE:
         return {
            ...state,
            showSearchPage: true,
         };
      case HIDE_SEARCH_PAGE:
         return {
            ...state,
            showSearchPage: false,
         };

      default:
         return state;
   }
};
