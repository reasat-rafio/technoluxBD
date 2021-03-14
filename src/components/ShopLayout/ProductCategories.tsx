import { useState } from "react";
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
      name == "gaming-equipment" && !showMoreGamingEquipment
         ? SetShowMoreGamingEquipment(true)
         : SetShowMoreGamingEquipment(false);

      name == "mobile-accessories" && !showMoreMobileAccessories
         ? SetShowMoreMobileAccessories(true)
         : SetShowMoreMobileAccessories(false);
      name == "computer-office" && !showMoreComputerAndOffice
         ? SetShowMoreComputerAndOffice(true)
         : SetShowMoreComputerAndOffice(false);
      name == "home-appliances" && !showMoreHomeAppliances
         ? SetShowMoreHomeAppliances(true)
         : SetShowMoreHomeAppliances(false);
   };

   const sub_ctg = (sub_category) => {
      return (
         <ul className="ml-4">
            {sub_category.map((sub_c, i) => (
               <li key={i} className="hover:text-darkBlue cursor-pointer my-1">
                  <p>{sub_c.sub_category_name}</p>
               </li>
            ))}
         </ul>
      );
   };

   const outputGamingEquipment = (name: string, state: any, sub_category) => {
      return name === "gaming-equipment" && state && sub_ctg(sub_category);
   };

   const outPutMobileAccessories = (name: string, state: any, sub_category) => {
      return name === "mobile-accessories" && state && sub_ctg(sub_category);
   };
   const outPutComputerAndOffice = (name: string, state: any, sub_category) => {
      return name === "computer-office" && state && sub_ctg(sub_category);
   };
   const outPutHomeAppliances = (name: string, state: any, sub_category) => {
      return name === "home-appliances" && state && sub_ctg(sub_category);
   };

   return (
      <div className="my-5 px-5 font-text">
         <h3 className="font-nav text-lg font-medium my-4">
            PRODUCT CATEGORIES
         </h3>
         <ul className="text-gray-700 ">
            {Categories.map(({ category_name, sub_category, link }, i) => (
               <li key={i} className="my-2">
                  <div
                     className="flex justify-end items-center hover:text-darkBlue cursor-pointer"
                     onClick={() => showSubCategoryAction(link)}
                  >
                     <p className="flex-1"> {category_name}</p>
                     {sub_category && <MoreCtg />}
                  </div>

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
