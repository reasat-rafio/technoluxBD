import { useCtx } from "../../store";

import { MainLgNav } from "../Nav/MainLgNav/MainLgNav";
import { TopNav } from "../Nav/TopNav/TopNav";
import { SideMenuBar } from "../SiedMenuBar/SideMenuBar";

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   const {
      domState: { showSidebar },
   } = useCtx();
   return (
      <>
         <SideMenuBar />
         <TopNav />
         <MainLgNav />

         {children}
      </>
   );
};
