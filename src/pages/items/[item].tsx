import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Product/Card/Card";
import { ProductImages } from "../../components/Product/ProductImages/ProductImages";
import { Tabs } from "../../components/Product/Tabs/Tabs";
import axios from "axios";

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
   slug: string;
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
      slug,
   },
}) => {
   return (
      <Layout>
         <main className=" w-full">
            <section className="container m-auto grid gap-3  lg:grid-cols-3 grid-cols-2 p-8 font-text">
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
                  slug={slug}
                  img={img[0].url}
               />
            </section>
            <Tabs
               name={name}
               Features={Features}
               Specifications={Specifications}
            />
         </main>
      </Layout>
   );
};

export default item;

export const getStaticPaths: GetStaticPaths = async () => {
   const { data } = await axios.get(`${process.env.URL}/products`);

   const paths = data.map(({ slug }) => ({
      params: { item: slug },
   }));

   return {
      paths,
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async (context) => {
   // setting the request variable

   const slug = context.params.item;

   const { data } = await axios.get(`${process.env.URL}/products?slug=${slug}`);

   const {
      id,
      img,
      categories,
      offer_time_till,
      available_offer,
      offer_price,
      regular_price,
      name,
      Specifications,
      review,
      Features,
      brand,
   } = data[0];

   return {
      props: {
         item: {
            id,
            img,
            categories,
            offer_time_till,
            available_offer,
            offer_price,
            regular_price,
            name,
            Specifications,
            review,
            Features,
            brand,
            slug: data[0].slug,
         },
      },
   };
};
