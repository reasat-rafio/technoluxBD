import { HIDE_SIDE_BAR, SHOW_SIDE_BAR } from "../types";

type Action = {
   type: string;
   payload?: any;
};

interface stateInterFace {
   isLoggedIn: boolean;
   showSidebar: boolean;
}

export const initialDomState = {
   isLoggedIn: false,
   showSidebar: false,
   showOverlayAuthPage: false,
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

      default:
         return state;
   }
};
