import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface SearchbarResultProps {
   searchFilterItems: any[];
   inputValue: string;
}

// interface SearchItems {
//    name: string;
//    img: any[];
//    offer_price: string;
//    regular_price: string;
//    slug: string;
// }

export const SearchbarResult: React.FC<SearchbarResultProps> = ({
   searchFilterItems,
   inputValue,
}) => {
   const router = useRouter();

   return (
      <>
         {searchFilterItems && searchFilterItems.length > 0 ? (
            searchFilterItems.map(
               ({ name, img, offer_price, regular_price, slug }) => (
                  <motion.div
                     whileHover={{ scale: 1.1, originX: 0 }}
                     className="flex max-h-20 gap-2 px-2 border-b text-sm cursor-pointer  hover:bg-gray-50  "
                     onClick={() => router.push(`items/${slug}`)}
                  >
                     <img src={img[0].url} alt={name} />
                     <span className="bg-white my-auto">
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
      </>
   );
};
