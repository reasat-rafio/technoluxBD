import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

interface N_Deals_PageProps {
   products: any[];
}

export const N_Deals_Page: React.FC<N_Deals_PageProps> = ({ products }) => {
   const router = useRouter();

   return (
      <div className="w-full">
         <div className="container mx-auto">
            <section className="grid grid-cols-12 my-5 gap-2">
               {products &&
                  products.map(
                     (
                        { name, img, offer_price, regular_price, id, slug },
                        i
                     ) => (
                        <div
                           className="col-span-6 lg:col-span-4 xl:col-span-3 border cursor-pointer  flex flex-col"
                           key={id}
                        >
                           <div
                              className="flex-1 overflow-hidden"
                              onClick={() => router.push(`/items/${slug}`)}
                           >
                              <motion.img
                                 whileHover={{ scale: 1.1 }}
                                 src={img[0].url}
                                 alt={name}
                              />
                           </div>

                           <div className="">
                              <p className="text-sm font-medium text-center font-nav   ">
                                 {name}
                              </p>
                              {offer_price && (
                                 <div className="my-2 flex gap-2 items-center justify-center">
                                    <span className="line-through  text-sm text-gray-400 font-text">
                                       ৳{regular_price}
                                    </span>
                                    <span className="text-darkBlue font-semibold font-text">
                                       ৳{offer_price}
                                    </span>
                                 </div>
                              )}
                           </div>
                        </div>
                     )
                  )}
            </section>
         </div>
      </div>
   );
};
