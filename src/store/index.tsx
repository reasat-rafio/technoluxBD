import { useContext, createContext, useReducer, useEffect } from "react";
import { cartReducer, initialCartState } from "./reducers/cartReducer";

import { domReducer, initialDomState } from "./reducers/domReducer";
import { initialUserState, userReducer } from "./reducers/userState";

// import {
//    initialSearchbarState,
//    searchReducer,
// } from "./reducers/searchbarReducer";
// import { initialUserState, userReducer } from "./reducers/userReducer";

const Store = createContext<any>(null);

interface StoreProps {
   children: React.ReactNode;
}

type Action = {
   type: string;
   payload: any;
};

type ProfileReducer = (state: any, action: Action) => any;

export const GlobalState: React.FC<StoreProps> = ({ children }) => {
   // USER STATE
   const [userState, userDispatch] = useReducer(
      userReducer,
      initialUserState,
      () => {
         if (typeof window !== "undefined") {
            const localData = localStorage.getItem("TxBDuserState");
            return localData ? JSON.parse(localData) : initialUserState;
         }
         return initialUserState;
      }
   );
   useEffect(() => {
      localStorage.setItem("TxBDuserState", JSON.stringify(userState));
   }, [userState]);

   //    const [searchState, searchDispatch] = useReducer(
   //       searchReducer,
   //       initialSearchbarState
   //    );

   // CART STATE
   const [cartState, cartDispatch] = useReducer(
      cartReducer,
      initialCartState,
      () => {
         if (typeof window !== "undefined") {
            const localData = localStorage.getItem("TxBDCartState");
            return localData ? JSON.parse(localData) : initialCartState;
         }
         return initialCartState;
      }
   );
   useEffect(() => {
      localStorage.setItem("TxBDCartState", JSON.stringify(cartState));
   }, [cartState]);

   // DOM STATE
   const [domState, domDispatch] = useReducer(domReducer, initialDomState);

   return (
      <Store.Provider
         value={{
            domState,
            userState,
            domDispatch,
            userDispatch,
            cartState,
            cartDispatch,
         }}
      >
         {children}
      </Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
