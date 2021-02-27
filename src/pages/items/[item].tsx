import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Product/Card/Card";
import { ProductImages } from "../../components/Product/ProductImages/ProductImages";
import { Tabs } from "../../components/Product/Tabs/Tabs";

import { GET_ALL_PRODUCTS_ID } from "../../graphql/queries";

interface itemProps {
   item: product;
}
interface product {
   Features: [string];
   Specifications: [string];
   available_offer: boolean;
   brand: string;
   categories: any[];
   img: any[];
   name: string;
   offer_price: string;
   offer_time_till: string;
   regular_price: string;
   review: any[];
   id: string;
}

const item: React.FC<itemProps> = ({
   item: {
      Features,
      Specifications,
      available_offer,
      brand,
      categories,
      img,
      offer_time_till,
      name,
      offer_price,
      regular_price,
      review,
      id,
   },
}) => {
   return (
      <Layout>
         <main className=" w-full">
            {/* Card */}
            <section className="container m-auto grid  lg:grid-cols-3 grid-cols-2 p-8 font-text">
               {/* Image preview */}
               <div className="lg:col-span-1 col-span-2">
                  <ProductImages img={img} />
               </div>
               {/* product discription */}
               <Card
                  available_offer={available_offer}
                  brand={brand}
                  categories={categories}
                  name={name}
                  offer_price={offer_price}
                  offer_time_till={offer_time_till}
                  regular_price={regular_price}
                  id={id}
               />
            </section>
            <Tabs />
         </main>
      </Layout>
   );
};

export default item;

export const getStaticPaths: GetStaticPaths = async () => {
   const client = new ApolloClient({
      uri: "http://localhost:1337/graphql",
      cache: new InMemoryCache(),
   });
   const { data } = await client.query({ query: GET_ALL_PRODUCTS_ID });

   const paths = data.products.map(({ id }) => ({
      params: { item: id },
   }));

   return {
      paths,
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async (context) => {
   // setting the apolloclient
   const client = new ApolloClient({
      uri: "http://localhost:1337/graphql",
      cache: new InMemoryCache(),
   });

   //   query
   const GET_PRODUCTS = gql`
      query product($product_id: ID!) {
         product(id: $product_id) {
            id
            img {
               url
               formats
            }
            categories {
               name
            }
            offer_time_till
            available_offer
            offer_price
            regular_price
            name
            Specifications
            review
            Features
            brand
         }
      }
   `;

   // setting the request variable
   const variables = {
      product_id: context.params.item,
   };

   //  request
   const { data } = await client.query({
      query: GET_PRODUCTS,
      variables,
   });

   return {
      props: {
         item: data.product,
      },
   };
};
