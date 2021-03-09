import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Product/Card/Card";
import { ProductImages } from "../../components/Product/ProductImages/ProductImages";
import { Tabs } from "../../components/Product/Tabs/Tabs";
import axios from "axios";

interface itemProps {
   flash_deals: any;
   new_arrivals: any;
}

const item: React.FC<itemProps> = ({ flash_deals, new_arrivals }) => {
   // product state
   const [product, setProduct] = useState<any>(() => {
      if (flash_deals[0]) {
         return flash_deals;
      }
      if (new_arrivals[0]) {
         return new_arrivals;
      }
   });

   return (
      <Layout>
         <main className=" w-full">
            {product &&
               product.map(
                  ({
                     img,
                     available_offer,
                     brand,
                     categories,
                     name,
                     offer_price,
                     offer_time_till,
                     regular_price,
                     id,
                     Features,
                     features,
                     Specifications,
                     specifications,
                     details,
                  }) => (
                     <>
                        <section
                           className="container m-auto grid gap-0 lg:gap-3  grid-cols-6 p-8 font-text "
                           key={id}
                        >
                           {/* Image preview */}
                           <div className=" col-span-6 lg:col-span-2">
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
                              img={img[0].url}
                           />
                        </section>
                        <Tabs
                           name={name}
                           Features={Features}
                           features={features}
                           Specifications={Specifications}
                           specifications={specifications}
                           details={details}
                        />{" "}
                     </>
                  )
               )}
         </main>
      </Layout>
   );
};

export default item;

export const getStaticPaths: GetStaticPaths = async () => {
   const flash_deals = await axios.get(`${process.env.URL}/products`);
   const new_arrivals = await axios.get(
      `${process.env.URL}/new-arrivals?_limit=18`
   );
   const data = [...flash_deals.data, ...new_arrivals.data];

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

   const flash_deals = await axios.get(
      `${process.env.URL}/products?slug=${slug}`
   );
   const new_arrivals = await axios.get(
      `${process.env.URL}/new-arrivals?slug=${slug}`
   );

   // const {
   //    id,
   //    img,
   //    categories,
   //    offer_time_till,
   //    available_offer,
   //    offer_price,
   //    regular_price,
   //    name,
   //    Specifications,
   //    review,
   //    details,
   //    Features,
   //    specifications,
   //    features,
   //    brand,
   // } = data[0];

   return {
      props: {
         flash_deals: flash_deals.data,
         new_arrivals: new_arrivals.data,

         // : {
         // id,
         // img,
         // categories,
         // offer_time_till,
         // available_offer,
         // offer_price,
         // regular_price,
         // name,
         // Specifications,
         // specifications,
         // review,
         // Features,
         // features,
         // // details,
         // brand,
         //    slug: data[0].slug,
         // },
      },
   };
};
