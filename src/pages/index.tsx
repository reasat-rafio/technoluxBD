import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { useCtx } from "../store";
// import { getSession, signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import { GetStaticProps } from "next";
import { HomePage } from "../components/Home/HomePage";
import axios from "axios";

export default function Home({ flashDeals, coverImg }) {
   const { userState } = useCtx();

   // const [session, loading] = useSession();
   // console.log(session);

   return (
      <Layout>
         <div className="">
            <Head>
               <title>Technolux BD</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full ">
               <HomePage coverImg={coverImg} flashDeals={flashDeals} />
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
   const { img } = imgRes.data[0];

   return {
      props: {
         coverImg: img,
         flashDeals: flash_deals.data,
      },
   };
};
