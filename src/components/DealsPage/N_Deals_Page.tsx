import Image from "next/image";
import React from "react";

interface N_Deals_PageProps {
   products: any[];
}

export const N_Deals_Page: React.FC<N_Deals_PageProps> = ({ products }) => {
   return (
      <div className="w-full">
         <div className="container mx-auto">
            <section className="grid grid-cols-12">
               {products &&
                  products.map(
                     ({ name, img, offer_price, regular_price, id, slug }) => (
                        <div className="col-span-6 lg:col-span-4 xl:col-span-3">
                           {/* <Image
                              src={img[0].url}
                              layout="intrinsic"
                              height={300}
                              width={300}
                           /> */}
                           <img src={img[0].url} alt={name} />
                        </div>
                     )
                  )}
            </section>
         </div>
      </div>
   );
};
