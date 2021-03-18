import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ShopLayout } from "../../components/ShopLayout/ShopLayout";
import { ShopProducts } from "../../components/ShopLayout/ShopProducts";

const product = ({ products }) => {
   const router = useRouter();

   const { product } = router.query;
   const [allFilteredProdtucts, setAllFiltredProducts] = useState(() => {
      return products;
   });

   useEffect(() => {
      setAllFiltredProducts(products);
   }, [products]);

   return (
      <Layout>
         <ShopLayout>
            <div className="min-h-screen">
               <ShopProducts products={allFilteredProdtucts} />
            </div>
         </ShopLayout>
      </Layout>
   );
};
export default product;

export const getStaticPaths: GetStaticPaths = async () => {
   const { data } = await axios.get(`${process.env.URL}/categories`);

   const paths = [...data].map(({ name }) => ({
      params: { product: name },
   }));

   return {
      paths,
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   const ctg = ctx.params.product;
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

   const products = allProducts.filter((pd) => {
      if (pd.categories[0].name === `${ctg}`) {
         return pd;
      }
   });

   return {
      props: {
         products,
      },
   };
};
