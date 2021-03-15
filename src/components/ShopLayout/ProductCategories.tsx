import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChangeCategoryVariants } from "../../utils/animation";
import { MoreCtg } from "../../utils/svgs/Svg";
import { Categories } from "./_Data";

interface ProductCategoriesProps {}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({}) => {
   const [
      showMoreGamingEquipment,
      SetShowMoreGamingEquipment,
   ] = useState<boolean>(false);
   const [
      showMoreMobileAccessories,
      SetShowMoreMobileAccessories,
   ] = useState<boolean>(false);
   const [
      showMoreComputerAndOffice,
      SetShowMoreComputerAndOffice,
   ] = useState<boolean>(false);
   const [
      showMoreHomeAppliances,
      SetShowMoreHomeAppliances,
   ] = useState<boolean>(false);

   // Show more action
   const showSubCategoryAction = (name: string) => {
      name == "gaming-equipment" && SetShowMoreGamingEquipment((prev) => !prev);

      name == "mobile-accessories" &&
         SetShowMoreMobileAccessories((prev) => !prev);

      name == "computer-office" &&
         SetShowMoreComputerAndOffice((prev) => !prev);

      name == "home-appliances" && SetShowMoreHomeAppliances((prev) => !prev);
   };

   const sub_ctg = (sub_category, state) => {
      return (
         <>
            <AnimatePresence exitBeforeEnter>
               {state && (
                  <motion.ul
                     className="ml-4"
                     variants={ChangeCategoryVariants}
                     initial="inital"
                     animate="animate"
                     exit="exit"
                  >
                     {sub_category.map((sub_c, i) => (
                        <Link href={`/shop/${sub_c.sub_link}`}>
                           <li
                              key={i}
                              className="hover:text-darkBlue cursor-pointer my-2"
                           >
                              <p>{sub_c.sub_category_name}</p>
                           </li>
                        </Link>
                     ))}
                  </motion.ul>
               )}
            </AnimatePresence>
         </>
      );
   };

   const outputGamingEquipment = (name: string, state: any, sub_category) => {
      return name === "gaming-equipment" && sub_ctg(sub_category, state);
   };

   const outPutMobileAccessories = (name: string, state: any, sub_category) => {
      return name === "mobile-accessories" && sub_ctg(sub_category, state);
   };
   const outPutComputerAndOffice = (name: string, state: any, sub_category) => {
      return name === "computer-office" && sub_ctg(sub_category, state);
   };
   const outPutHomeAppliances = (name: string, state: any, sub_category) => {
      return (
         name === "home-appliances" && state && sub_ctg(sub_category, state)
      );
   };

   const UpOrDownArrowAction = (state) => {
      return state ? (
         <span className={`transform rotate-180 transition-all`}>
            <MoreCtg />
         </span>
      ) : (
         <span className={`transition-all `}>
            <MoreCtg />
         </span>
      );
   };

   return (
      <div className="my-5 px-5 font-text outline-none">
         <h3 className="font-nav text-lg font-medium my-4">
            PRODUCT CATEGORIES
         </h3>
         <ul className=" ">
            {Categories.map(({ category_name, sub_category, link }, i) => (
               <li key={i} className="my-4 text-gray-600">
                  <div
                     className="flex justify-end items-center hover:text-darkBlue cursor-pointer"
                     onClick={() => showSubCategoryAction(link)}
                  >
                     <p className="flex-1"> {category_name}</p>

                     {/* icon up/down */}
                     {sub_category &&
                        link === "gaming-equipment" &&
                        UpOrDownArrowAction(showMoreGamingEquipment)}

                     {sub_category &&
                        link === "mobile-accessories" &&
                        UpOrDownArrowAction(showMoreMobileAccessories)}

                     {sub_category &&
                        link === "computer-office" &&
                        UpOrDownArrowAction(showMoreComputerAndOffice)}

                     {sub_category &&
                        link === "home-appliances" &&
                        UpOrDownArrowAction(showMoreHomeAppliances)}
                  </div>

                  {/* sub ctg */}
                  {sub_category &&
                     outputGamingEquipment(
                        link,
                        showMoreGamingEquipment,
                        sub_category
                     )}
                  {sub_category &&
                     outPutMobileAccessories(
                        link,
                        showMoreMobileAccessories,
                        sub_category
                     )}
                  {sub_category &&
                     outPutComputerAndOffice(
                        link,
                        showMoreComputerAndOffice,
                        sub_category
                     )}
                  {sub_category &&
                     outPutHomeAppliances(
                        link,
                        showMoreHomeAppliances,
                        sub_category
                     )}
               </li>
            ))}
         </ul>
      </div>
   );
};
