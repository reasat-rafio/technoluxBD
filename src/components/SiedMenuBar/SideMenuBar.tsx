import {
   Box,
   Cross,
   Fire,
   Lignting_bolt,
   LogOut,
   Minus,
   Phone,
   Plus,
   User,
} from "../../utils/svgs/Svg";
import Link from "next/link";
import { useCtx } from "../../store";
import { hideSideNavBar } from "../../store/actions/domActions";
import { motion, AnimatePresence } from "framer-motion";
import { sideBarVarients, sideBarMoreVarients } from "../../utils/animation";
import { useRef, useState } from "react";
import { useOutsideAlerter } from "../../utils/hooks/useOutSideClickAlerter";
import { HIDE_SIDE_BAR } from "../../store/types";
import { logOutAaction } from "../../store/actions/userAction";
import { Notify } from "../../utils/Toast";
import { useCookies } from "react-cookie";

interface SideMenuBarProps {}

export const SideMenuBar: React.FC<SideMenuBarProps> = ({}) => {
   const {
      domDispatch,
      userDispatch,
      domState: { showSidebar },
      userState: { isLoggedIn },
   } = useCtx();
   // Side Menu close onClick action
   const closeSideMenubarAction = () => {
      domDispatch(hideSideNavBar());
   };
   // sidebar ref
   const sidebarRef = useRef<HTMLDivElement>(null);
   useOutsideAlerter(sidebarRef, HIDE_SIDE_BAR, domDispatch);
   // Show more deals and categories state
   const [showMoreDeals, setShowMoreDeals] = useState<boolean>(false);
   const [showMoreCategories, setShowMoreCategories] = useState<boolean>(false);
   //cookies
   const [cookies, removeCookie] = useCookies(["userjwt"]);
   console.log(cookies);

   // Logout action
   const logOut = () => {
      userDispatch(logOutAaction());
      removeCookie("userjwt", "", { path: "/" });
      Notify("info", "Loggedout Successfully");
   };
   return (
      <>
         <div
            className={`fixed h-full w-full right-0 top-0 left-0 bottom-0  transition-all duration-300${
               showSidebar ? " z-30  block " : " z-0 hidden "
            }`}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
         ></div>
         <AnimatePresence exitBeforeEnter>
            {showSidebar && (
               <motion.div
                  ref={sidebarRef}
                  variants={sideBarVarients}
                  initial="inital"
                  animate="animate"
                  exit="exit"
                  className={`fixed h-full w-96 right-0 top-0 bg-white p-8 z-40 overflow-auto`}
               >
                  <div onClick={closeSideMenubarAction} className="mt-3 mb-4">
                     <Cross />
                  </div>
                  <ul className="py-8 border-b transition-all duration-300 ">
                     <li className="flex justify-between">
                        <Link href="">
                           <a className="sideBarMainNav">Home</a>
                        </Link>
                     </li>
                     <li className="">
                        <div
                           className="flex justify-between"
                           onClick={() =>
                              setShowMoreDeals(
                                 (prevMoreDeals) => !prevMoreDeals
                              )
                           }
                        >
                           <Link href="">
                              <a className="sideBarMainNav">Deals</a>
                           </Link>
                           <span className="my-auto">
                              {showMoreDeals ? <Minus /> : <Plus />}
                           </span>
                        </div>

                        {/* SHOW MORE DEALS */}
                        <AnimatePresence exitBeforeEnter>
                           {showMoreDeals && (
                              <motion.ul
                                 initial="inital"
                                 animate="animate"
                                 variants={sideBarMoreVarients}
                                 exit="exit"
                              >
                                 <li>
                                    <a className="sideBarMainNavMore" href="#">
                                       <span className="my-auto">
                                          <Lignting_bolt />
                                       </span>
                                       Flash Deals
                                    </a>
                                 </li>
                                 <li>
                                    <a className="sideBarMainNavMore" href="#">
                                       <span className="my-auto">
                                          <Fire />
                                       </span>
                                       Special Deals
                                    </a>
                                 </li>
                              </motion.ul>
                           )}
                        </AnimatePresence>
                     </li>
                     <li>
                        <div
                           className="flex justify-between"
                           onClick={() =>
                              setShowMoreCategories(
                                 (prevMoreCategories) => !prevMoreCategories
                              )
                           }
                        >
                           <Link href="">
                              <a className="sideBarMainNav">Categories</a>
                           </Link>
                           <span className="my-auto">
                              {showMoreCategories ? <Minus /> : <Plus />}
                           </span>
                        </div>
                        {/* SHOW MORE Categories */}
                        <AnimatePresence exitBeforeEnter>
                           {showMoreCategories && (
                              <motion.ul
                                 initial="inital"
                                 animate="animate"
                                 variants={sideBarMoreVarients}
                                 exit="exit"
                              >
                                 <li>
                                    <a className="sideBarMainNavMore" href="#">
                                       Earphones & Headphones
                                    </a>
                                 </li>
                                 <li>
                                    <a className="sideBarMainNavMore" href="#">
                                       Gaming Accessories
                                    </a>
                                 </li>
                                 <li>
                                    <a className="sideBarMainNavMore" href="#">
                                       Power Banks
                                    </a>
                                 </li>
                                 <li>
                                    <a className="sideBarMainNavMore" href="#">
                                       Smart Watches
                                    </a>
                                 </li>
                                 <li>
                                    <a className="sideBarMainNavMore" href="#">
                                       Cherger & Cable
                                    </a>
                                 </li>
                              </motion.ul>
                           )}
                        </AnimatePresence>
                     </li>
                     <li className="flex justify-between">
                        <Link href="">
                           <a className="sideBarMainNav">New Arrivals</a>
                        </Link>
                     </li>
                  </ul>
                  <section className="my-6 border-b">
                     {/* Assistance */}
                     <div className="flex ">
                        <div>
                           <Phone height={33} width={33} />
                        </div>

                        <div className="px-4 font-nav">
                           <h3 className="text-lg ">Assistance</h3>
                           <a
                              href="mailto:info.technolux.bd@gmail.com"
                              className="sideBarUtilsChildren"
                           >
                              info.technolux.bd@gmail.com
                           </a>
                           <p className="sideBarUtilsChildren">016 8688 2085</p>
                        </div>
                     </div>
                     {/* Delivery */}
                     <div className="flex my-4">
                        <div>
                           <Box />
                        </div>
                        <div className="px-4 font-nav">
                           <h3 className="text-lg ">Delivery</h3>
                           <p className="sideBarUtilsChildren">
                              Inside Dhaka: 1 working days
                           </p>
                           <p className="sideBarUtilsChildren">
                              Ourside Dhaka: 2-4 working days
                           </p>
                        </div>
                     </div>
                  </section>

                  <section className="cursor-pointer">
                     {isLoggedIn ? (
                        <div
                           className="sideBarMainNav flex justify-between"
                           onClick={logOut}
                        >
                           <button>Logout</button>
                           <span className="my-auto">
                              <LogOut />
                           </span>
                        </div>
                     ) : (
                        <div className="sideBarMainNav flex justify-between">
                           <Link href="/customer/account/auth">
                              <a>Login / Register</a>
                           </Link>
                           <span className="my-auto">
                              <User />
                           </span>
                        </div>
                     )}
                  </section>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};
