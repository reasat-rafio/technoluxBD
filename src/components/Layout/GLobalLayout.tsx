import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCtx } from "../../store";
import { pageResizeWidth } from "../../store/actions/domActions";
import { usePageResize } from "../../utils/hooks/usePageResize";

interface GLobalLayoutProps {}

toast.configure();
export const GLobalLayout: React.FC<GLobalLayoutProps> = ({ children }) => {
   const pageRef = useRef<HTMLDivElement>(null);
   // store
   const { domDispatch } = useCtx();
   const { width } = usePageResize(pageRef);
   // Setting the page width in the global state api
   useEffect(() => {
      domDispatch(pageResizeWidth(width));
   }, [width]);

   return <main ref={pageRef}>{children}</main>;
};
