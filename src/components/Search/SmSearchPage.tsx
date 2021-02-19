import { useCtx } from "../../store";
import { hideSearchPage } from "../../store/actions/domActions";
import { Cross } from "../../utils/svgs/Svg";
import { motion, AnimatePresence } from "framer-motion";
import { searchPageVarients } from "../../utils/animation";

interface SmSearchPageProps {}

export const SmSearchPage: React.FC<SmSearchPageProps> = ({}) => {
   const {
      domState: { showSearchPage },
      domDispatch,
   } = useCtx();

   return (
      <>
         <AnimatePresence exitBeforeEnter>
            {showSearchPage && (
               <motion.section
                  initial="inital"
                  animate="animate"
                  exit="exit"
                  variants={searchPageVarients}
                  className={"fixed h-screen w-screen bg-white z-50 block"}
               >
                  <div className="container mx-auto">
                     <div className="flex justify-end">
                        <span
                           className="p-3"
                           onClick={() => domDispatch(hideSearchPage())}
                        >
                           <Cross />
                        </span>
                     </div>

                     <div className=" flex items-center justify-center flex-col">
                        <input
                           type="text"
                           className="border rounded-sm py-3 px-2 outline-none  w-11/12 container "
                        />
                        <p className="text-sm text-gray-500 font-text">
                           Type here any product name
                        </p>
                     </div>
                  </div>
               </motion.section>
            )}
         </AnimatePresence>
      </>
   );
};
