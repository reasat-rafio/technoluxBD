import { useContext, createContext, useReducer, useEffect } from "react";
import { domReducer, initialDomState } from "./reducers/domReducer";

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
   //    const [userState, userDispatch] = useReducer(
   //       userReducer,
   //       initialUserState,
   //       () => {
   //          if (typeof window !== "undefined") {
   //             const localData = localStorage.getItem("TxBDuserState");
   //             return localData ? JSON.parse(localData) : initialUserState;
   //          }
   //          return initialUserState;
   //       }
   //    );
   //    useEffect(() => {
   //       localStorage.setItem("TxBDuserState", JSON.stringify(userState));
   //    }, [userState]);

   //    const [searchState, searchDispatch] = useReducer(
   //       searchReducer,
   //       initialSearchbarState
   //    );

   const [domState, domDispatch] = useReducer(domReducer, initialDomState);

   return (
      <Store.Provider value={{ domState, domDispatch }}>
         {children}
      </Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
