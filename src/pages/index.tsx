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
import { GET_ALL_NAME } from "../graphql/queries";

export default function Home({
   data,
   //  cover_img, products
}) {
   console.log(data);

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
               <HomePage
               //  cover_img={cover_img} products={products}
               />
            </main>
         </div>
      </Layout>
   );
}

export const getStaticProps: GetStaticProps = async (context) => {
   const { publicRuntimeConfig } = getConfig();
   // const { data } = await axios.get(
   //    `https://technoluxbd.herokuapp.com/cover-images`
   // );
   // const res = await axios.get(`https://technoluxbd.herokuapp.com/tests`);
   // const e = await axios.get("https://technoluxbd.herokuapp.com/tests");
   const client = new ApolloClient({
      uri: "http://localhost:1337/graphql",
      cache: new InMemoryCache(),
   });

   try {
      const { data } = await client.query({ query: GET_ALL_NAME });

      return {
         props: {
            // cover_img: data[0].img,
            // products: res.data,
            data,
         },
      };
   } catch (error) {
      console.log(error);

      return {
         props: {
            // cover_img: data[0].img,
            // products: res.data,
            data: error.message,
         },
      };
   }
};
