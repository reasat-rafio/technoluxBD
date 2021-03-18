import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ShopLayout } from "../../components/ShopLayout/ShopLayout";
import { ShopProducts } from "../../components/ShopLayout/ShopProducts";

const Shop = ({ products }) => {
   // sort items state
   const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
   const [selectedFilter, setSelectedFilter] = useState<string>(
      "Sort by popularity"
   );

   // Products grid
   const [gridCount, setGridCount] = useState(3);

   return (
      <Layout>
         <ShopLayout>
            <ShopProducts
               products={products}
               gridCount={gridCount}
               setGridCount={setGridCount}
               showMoreFilter={showMoreFilter}
               setShowMoreFilter={setShowMoreFilter}
               selectedFilter={selectedFilter}
               setSelectedFilter={setSelectedFilter}
            />
         </ShopLayout>
      </Layout>
   );
};
export default Shop;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const flash_deals_all = await axios.get(`${process.env.URL}/products`);
   const gaming_accessories_all = await axios.get(
      `${process.env.URL}/gaming-accessories`
   );
   const new_arrivals_all = await axios.get(`${process.env.URL}/new-arrivals`);

   const allProducts = [
      ...flash_deals_all.data,
      ...gaming_accessories_all.data,
      ...new_arrivals_all.data,
   ];

   return {
      props: {
         products: allProducts,
      },
   };
};
