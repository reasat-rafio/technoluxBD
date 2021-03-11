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
   gaming_accessories: any;
}

const item: React.FC<itemProps> = ({
   flash_deals,
   new_arrivals,
   gaming_accessories,
}) => {
   // product state
   const [product, setProduct] = useState<any>(() => {
      if ( flash_deals && flash_deals[0] ) {
         return flash_deals;
      }
      if ( new_arrivals && new_arrivals[0]) {
         return new_arrivals;
      }
      if ( gaming_accessories &&  gaming_accessories[0]) {
         return gaming_accessories;
      }
   });

   useEffect(() => {
      if (flash_deals && flash_deals[0]) {
         setProduct(flash_deals);
      }
      if ( new_arrivals && new_arrivals[0]) {
         setProduct(new_arrivals);
      }
      if (( gaming_accessories &&  gaming_accessories[0]) {
         setProduct(gaming_accessories);
      }
   }, [flash_deals, new_arrivals, gaming_accessories]);
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
                     dts,
                     description_img,
                     yt_url,
                     in_stock,
                  }) => (
                     <React.Fragment key={id}>
                        <section className="container m-auto grid gap-0 lg:gap-3  grid-cols-6 p-8 font-text ">
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
                              in_stock={in_stock}
                           />
                        </section>
                        <Tabs
                           name={name}
                           Features={Features}
                           features={features}
                           Specifications={Specifications}
                           specifications={specifications}
                           details={details}
                           description_img={description_img}
                           dts={dts}
                           yt_url={yt_url}
                        />{" "}
                     </React.Fragment>
                  )
               )}
         </main>
      </Layout>
   );
};

export default item;

export const getStaticPaths: GetStaticPaths = async () => {
   const flash_deals = await axios.get(`${process.env.URL}/products`);
   const new_arrivals = await axios.get(`${process.env.URL}/new-arrivals`);
   const gaming_accessories = await axios.get(
      `${process.env.URL}/gaming-accessories`
   );
   const data = [
      ...flash_deals.data,
      ...new_arrivals.data,
      ...gaming_accessories.data,
   ];

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

   const gaming_accessories = await axios.get(
      `${process.env.URL}/gaming-accessories?slug=${slug}`
   );

   return {
      props: {
         flash_deals: flash_deals.data,
         new_arrivals: new_arrivals.data,
         gaming_accessories: gaming_accessories.data,
      },
   };
};
