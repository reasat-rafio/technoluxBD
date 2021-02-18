import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface GLobalLayoutProps {}
toast.configure();
export const GLobalLayout: React.FC<GLobalLayoutProps> = ({ children }) => {
   return <div>{children}</div>;
};
