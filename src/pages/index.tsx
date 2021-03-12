import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { useCtx } from "../store";
// import { getSession, signIn, signOut, useSession } from "next-auth/client";
import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import { HomePage } from "../components/Home/HomePage";
import axios from "axios";
import { getAllTheProducts } from "../store/actions/ProductsAction";

export default function Home({
   flashDeals,
   flash_deals_all,
   coverImg,
   new_arrivals,
   new_arrivals_all,
   gaming_accessories,
   gaming_accessories_all,
}) {
   const { userState, productsState, productsDispatch } = useCtx();

   // const [session, loading] = useSession();

   useEffect(() => {
      const allProducts = [
         ...flash_deals_all,
         ...new_arrivals_all,
         ...gaming_accessories_all,
      ];
      productsDispatch(getAllTheProducts(allProducts));
   }, []);

   return (
      <Layout>
         <div className="" id="top">
            <Head>
               <title>Technolux BD</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full ">
               <HomePage
                  coverImg={coverImg}
                  flashDeals={flashDeals}
                  new_arrivals={new_arrivals}
                  gaming_accessories={gaming_accessories}
               />
            </main>
         </div>
      </Layout>
   );
}

export const getStaticProps: GetStaticProps = async (context) => {
   // getting the cover imagese
   const imgRes = await axios.get(`${process.env.URL}/cover-images`);

   // getting the flash deals
   const flash_deals = await axios.get(`${process.env.URL}/products?_limit=10`);
   const flash_deals_all = await axios.get(`${process.env.URL}/products`);

   const gaming_accessories = await axios.get(
      `${process.env.URL}/gaming-accessories?_limit=10`
   );
   const gaming_accessories_all = await axios.get(
      `${process.env.URL}/gaming-accessories`
   );

   const new_arrivals = await axios.get(
      `${process.env.URL}/new-arrivals?_limit=18`
   );
   const new_arrivals_all = await axios.get(`${process.env.URL}/new-arrivals`);

   const { img } = imgRes.data[0];

   return {
      props: {
         coverImg: img,
         flashDeals: flash_deals.data,
         flash_deals_all: flash_deals_all.data,
         new_arrivals: new_arrivals.data,
         new_arrivals_all: new_arrivals_all.data,
         gaming_accessories: gaming_accessories.data,
         gaming_accessories_all: gaming_accessories_all.data,
      },
   };
};
