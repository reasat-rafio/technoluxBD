import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCtx } from "../../store";
import { pageResizeWidth } from "../../store/actions/domActions";
import { usePageResize } from "../../utils/hooks/usePageResize";
import { ShoppingCartSideBar } from "../ShoppingCartSideBar/ShoppingCartSideBar";
import { useSession } from "next-auth/client";
import { loginUserAction, logOutAaction } from "../../store/actions/userAction";

interface GLobalLayoutProps {}

toast.configure();
export const GLobalLayout: React.FC<GLobalLayoutProps> = ({ children }) => {
   const [session, loading] = useSession();
   const { userDispatch } = useCtx();
   // setting the user to the store
   useEffect(() => {
      if (session) {
         userDispatch(loginUserAction(session.user));
      } else {
         userDispatch(logOutAaction());
      }
   }, [session]);

   const pageRef = useRef<HTMLDivElement>(null);
   // store
   const {
      domDispatch,
      domState: { showCartSidebar },
   } = useCtx();
   const { width } = usePageResize(pageRef);
   // Setting the page width in the global state
   useEffect(() => {
      domDispatch(pageResizeWidth(width));
   }, [width]);

   return (
      <main ref={pageRef}>
         <ShoppingCartSideBar />
         {children}
      </main>
   );
};
