import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useCtx } from "../../store";
import { hideSearchPage } from "../../store/actions/domActions";

interface SearchbarResultProps {
   searchFilterItems: any[];
   inputValue: string;
}

export const SearchbarResult: React.FC<SearchbarResultProps> = ({
   searchFilterItems,
   inputValue,
}) => {
   const router = useRouter();
   const {
      domState: { showSearchPage },
      domDispatch,
   } = useCtx();
   return (
      <div className="h-full">
         {searchFilterItems && searchFilterItems.length > 0 ? (
            searchFilterItems.map(
               ({ name, img, offer_price, regular_price, slug }, i) => (
                  <motion.div
                     key={i}
                     whileHover={{ scale: 1.1, originX: 0 }}
                     className="flex  gap-2 px-2 border-b text-sm cursor-pointer  hover:bg-gray-50    "
                     onClick={() => {
                        router.push({
                           pathname: `/items/${slug}`,
                        });
                        domDispatch(hideSearchPage());
                     }}
                  >
                     <img className="w-16" src={img[0].url} alt={name} />
                     <span className="bg-white my-auto ">
                        <p>{name}</p>
                        {offer_price ? (
                           <>
                              <span className="line-through text-gray-500">
                                 ৳{regular_price}
                              </span>
                              <span className="text-darkBlue text-base font-semibold ml-2">
                                 ৳{offer_price}
                              </span>
                           </>
                        ) : (
                           <span className="text-darkBlue text-base font-semibold">
                              ৳{regular_price}
                           </span>
                        )}
                     </span>
                  </motion.div>
               )
            )
         ) : (
            <p className="flex ">
               Sorry, nothing found for
               <span className="font-semibold ml-2">{inputValue}</span>
            </p>
         )}
      </div>
   );
};
