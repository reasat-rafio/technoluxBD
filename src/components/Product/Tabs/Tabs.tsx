import React, { useState } from "react";

interface TabsProps {}

export const Tabs: React.FC<TabsProps> = ({}) => {
   const [tab, setTab] = useState<string>("description");

   return (
      <div className="w-full  border-t border-b">
         <ul className="container mx-auto flex justify-center items-center gap-12 font-nav font-semibold text-lg">
            <li
               onClick={() => setTab("description")}
               className={`py-5 cursor-pointer   ${
                  tab === "description"
                     ? "text-gray-800 border-t-4 border-darkBlue"
                     : "text-gray-500"
               }`}
            >
               DESCRIPTION
            </li>
            <li
               onClick={() => setTab("delivery_process")}
               className={`py-5 cursor-pointer   ${
                  tab === "delivery_process"
                     ? "text-gray-800 border-t-4 border-darkBlue"
                     : "text-gray-500"
               }`}
            >
               DELIVERY PROCESS
            </li>
            <li
               onClick={() => setTab("return_refund")}
               className={`py-5 cursor-pointer  ${
                  tab === "return_refund"
                     ? "text-gray-800 border-t-4 border-darkBlue"
                     : "text-gray-500"
               }`}
            >
               RETURN & REFUND
            </li>
            <li
               onClick={() => setTab("reviews")}
               className={`py-5 cursor-pointer   ${
                  tab === "reviews"
                     ? "text-gray-800 border-t-4 border-darkBlue"
                     : "text-gray-500"
               }`}
            >
               REVIEWS
            </li>
         </ul>
      </div>
   );
};
