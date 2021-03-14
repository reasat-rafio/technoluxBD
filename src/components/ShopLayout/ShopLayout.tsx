import React from "react";
import { ProductCategories } from "./ProductCategories";

interface ShopLayoutProps {
   children: React.ReactNode;
}

export const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
   return (
      <main className="w-full">
         <div className="grid grid-cols-12 container mx-auto ">
            <section
               className="col-span-3
             hidden lg:block "
            >
               <ProductCategories />
            </section>
            <section className="col-span-9 ">{children}</section>
         </div>
      </main>
   );
};
