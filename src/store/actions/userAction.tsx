import { USER_LOG_IN, USER_LOG_OUT } from "../types";

export const loginUserAction = (payload) => {
   return {
      type: USER_LOG_IN,
      payload: payload,
   };
};

export const logOutAaction = () => {
   console.log("action fired");

   return {
      type: USER_LOG_OUT,
   };
};
