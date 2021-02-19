import { useCtx } from "../../store";

import { MainLgNav } from "../Nav/MainLgNav/MainLgNav";
import { SmBottomNav } from "../Nav/SmBottomNav/SmBottomNav";
import { TopNav } from "../Nav/TopNav/TopNav";
import { SmSearchPage } from "../Search/SmSearchPage";
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
         <SmSearchPage />
         <SideMenuBar />
         <TopNav />
         <MainLgNav />
         <SmBottomNav />

         {children}
      </>
   );
};
