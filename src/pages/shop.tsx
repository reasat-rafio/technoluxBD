import axios from "axios";
import { GetStaticProps } from "next";
import { N_Deals_Page } from "../components/DealsPage/N_Deals_Page";
import { Layout } from "../components/Layout/Layout";
import { ShopLayout } from "../components/ShopLayout/ShopLayout";

const Shop = ({ products }) => {
   return (
      <Layout>
         <ShopLayout>
            <N_Deals_Page products={products} />
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
