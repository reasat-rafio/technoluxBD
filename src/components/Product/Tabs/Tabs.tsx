import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabVariants } from "../../../utils/animation";
import { Description } from "./Description/Description";
import { DeliveryProcess } from "./DeliveryProcess/DeliveryProcess";
import { ReturnRefunds } from "./ReturnRefund/ReturnRefunds";
import { Reviews } from "./Reviews/Reviews";

interface TabsProps {
   Features: [string];
   Specifications: [string];
   name: string;
}

export const Tabs: React.FC<TabsProps> = ({
   Features,
   Specifications,
   name,
}) => {
   const [tab, setTab] = useState<string>("description");

   return (
      <>
         <div className="w-full  border-t">
            <ul className="container mx-auto flex justify-center items-center gap-12 font-nav font-semibold text-lg  border-b">
               <li
                  onClick={() => setTab("description")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "description" ? "text-gray-800" : "text-gray-500"
                  }`}
               >
                  <span>DESCRIPTION</span>{" "}
                  <AnimatePresence exitBeforeEnter>
                     {tab === "description" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-darkBlue"
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
               <li
                  onClick={() => setTab("delivery_process")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "delivery_process"
                        ? "text-gray-800"
                        : "text-gray-500"
                  }`}
               >
                  <span>DELIVERY PROCESS</span>
                  <AnimatePresence exitBeforeEnter>
                     {tab === "delivery_process" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-darkBlue"
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
               <li
                  onClick={() => setTab("return_refund")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "return_refund" ? "text-gray-800" : "text-gray-500"
                  }`}
               >
                  <span>RETURN & REFUND</span>
                  <AnimatePresence exitBeforeEnter>
                     {tab === "return_refund" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-darkBlue"
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
               <li
                  onClick={() => setTab("reviews")}
                  className={`py-5 cursor-pointer relative  ${
                     tab === "reviews" ? "text-gray-800" : "text-gray-500"
                  }`}
               >
                  <span>REVIEWS</span>
                  <AnimatePresence exitBeforeEnter>
                     {tab === "reviews" && (
                        <motion.span
                           variants={TabVariants}
                           initial="inital"
                           animate="animate"
                           exit="exit"
                           className="absolute top-0 left-0 h-1 w-full bg-darkBlue"
                        ></motion.span>
                     )}
                  </AnimatePresence>
               </li>
            </ul>
         </div>
         <div className="container mx-auto border-b py-3 font-text text-gray-400">
            <AnimatePresence exitBeforeEnter>
               {tab === "description" && (
                  <Description
                     name={name}
                     Features={Features}
                     Specifications={Specifications}
                  />
               )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
               {tab === "delivery_process" && <DeliveryProcess />}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
               {tab === "return_refund" && <ReturnRefunds />}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
               {tab === "reviews" && <Reviews />}
            </AnimatePresence>
         </div>
      </>
   );
};
