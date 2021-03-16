import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useCtx } from "../../store";
import { hideCategorySidebar } from "../../store/actions/domActions";
import { HIDE_CATEGORIES_SIDEBAR } from "../../store/types";
import { sideBarCategoriesVarients } from "../../utils/animation";
import { useOutsideAlerter } from "../../utils/hooks/useOutSideClickAlerter";
import { Cross } from "../../utils/svgs/Svg";
import { ProductCategories } from "../ShopLayout/ProductCategories";

interface CategoriesSidebarProps {}

export const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({}) => {
   const {
      domDispatch,
      domState: { showCategorySidebar },
   } = useCtx();

   // sidebar ref
   const sidebarRef = useRef<HTMLDivElement>(null);
   useOutsideAlerter(sidebarRef, HIDE_CATEGORIES_SIDEBAR, domDispatch);

   // Side Menu close onClick action
   const closeSideMenubarAction = () => {
      domDispatch(hideCategorySidebar());
   };

   return (
      <>
         <div
            className={`fixed h-full w-full right-0 top-0 left-0 bottom-0  transition-all duration-300${
               showCategorySidebar ? " z-30  block " : " z-0 hidden "
            }`}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
         ></div>
         <AnimatePresence exitBeforeEnter>
            {showCategorySidebar && (
               <motion.div
                  ref={sidebarRef}
                  variants={sideBarCategoriesVarients}
                  initial="inital"
                  animate="animate"
                  exit="exit"
                  className={`fixed h-full md:w-96 w-3/4 left-0 top-0 bg-white p-8 z-40 overflow-auto`}
               >
                  {/* --------- Starting Header --------- */}
                  <div
                     onClick={closeSideMenubarAction}
                     className="my-2 flex justify-end"
                  >
                     <Cross />
                  </div>
                  {/* --------- Ending Header --------- */}

                  {/* --------- Starting Categories  --------- */}
                  <ProductCategories />
                  {/* --------- Ending Categories  --------- */}
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};
