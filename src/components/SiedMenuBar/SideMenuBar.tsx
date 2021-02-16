import { Box, Cross, Phone } from "../../utils/svgs/Svg";
import Link from "next/link";
import { useCtx } from "../../store";
import { hideSideNavBar } from "../../store/actions/domActions";
import { motion, AnimatePresence } from "framer-motion";
interface SideMenuBarProps {}

export const SideMenuBar: React.FC<SideMenuBarProps> = ({}) => {
   const {
      domDispatch,
      domState: { showSidebar },
   } = useCtx();
   // Side Menu close onClick action
   const closeSideMenubarAction = () => {
      domDispatch(hideSideNavBar());
   };

   const containerVarients = {
      inital: {
         opacity: 0,
         x: 500,
      },
      animate: {
         opacity: 1,
         x: 0,
         transition: {
            type: "tween",
         },
      },
   };

   return (
      <>
         <div
            className={`fixed h-full w-full right-0 top-0 left-0 bottom-0  transition-all duration-300${
               showSidebar ? " z-20  block " : " z-0 hidden "
            }`}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
         ></div>
         <AnimatePresence exitBeforeEnter>
            {showSidebar && (
               <motion.div
                  variants={containerVarients}
                  initial="inital"
                  animate="animate"
                  exit={{ opacity: 0, x: 500 }}
                  className={`fixed h-full w-96 right-0 top-0 bg-white p-4   z-40`}
               >
                  <div onClick={closeSideMenubarAction}>
                     <Cross />
                  </div>
                  <ul>
                     <li>
                        <Link href="">
                           <a>Home</a>
                        </Link>
                     </li>
                     <li>
                        <Link href="">
                           <a>Deals</a>
                        </Link>
                     </li>
                     <li>
                        <Link href="">
                           <a>New Arrivals</a>
                        </Link>
                     </li>
                     <li>
                        <Link href="">
                           <a>Login / Register</a>
                        </Link>
                     </li>
                  </ul>
                  <section>
                     <div>
                        <div>
                           <Phone />
                        </div>

                        <div>
                           <h3>Assistance</h3>
                           <p>info.technoluxBD.com</p>
                           <p>016 8688 2085</p>
                        </div>
                     </div>
                     <div>
                        <div>
                           <Box />
                        </div>
                        <div>
                           <h3>Delivery</h3>
                           <p>Inside Dhaka: 1 day</p>
                           <p>Ourside Dhaka: 2-4 daysko09</p>
                        </div>
                     </div>
                  </section>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};
