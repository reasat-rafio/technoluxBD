import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { useCtx } from "../store";
// import { getSession, signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import getConfig from "next/config";
import { HomePage } from "../components/Home/HomePage";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_HOME_FLASH_DEALS, GET_THE_COVER_IMGS } from "../graphql/queries";

export default function Home({ flashDeals, coverImg }) {
   const { userState } = useCtx();
   console.log(flashDeals);

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
   const { publicRuntimeConfig } = getConfig();

   try {
      const client = new ApolloClient({
         uri: "http://localhost:1337/graphql",
         cache: new InMemoryCache(),
      });

      const flash_deals = await client.query({ query: GET_HOME_FLASH_DEALS });
      const cover_img = await client.query({ query: GET_THE_COVER_IMGS });

      return {
         props: {
            coverImg: cover_img.data.coverImages,
            flashDeals: flash_deals.data.products,
         },
      };
   } catch (error) {
      return {
         props: {
            coverImg: error.message,
            flashDeals: error.message,
         },
      };
   }
};
