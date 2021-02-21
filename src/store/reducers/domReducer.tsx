import {
   HIDE_SEARCH_PAGE,
   HIDE_SIDE_BAR,
   SET_PAGE_WIDTH_ON_RESIZE,
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
   pageWidth: number;
}

export const initialDomState = {
   isLoggedIn: false,
   showSidebar: false,
   showOverlayAuthPage: false,
   showSearchPage: false,
   pageWidth: 0,
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
      case SET_PAGE_WIDTH_ON_RESIZE:
         return {
            ...state,
            pageWidth: action.payload,
         };

      default:
         return state;
   }
};
