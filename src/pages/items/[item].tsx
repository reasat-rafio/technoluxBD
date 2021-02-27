import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
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
      name,
      offer_price,
      regular_price,
      review,
      id,
   },
}) => {
   const [productQuantity, setProductQuantity] = useState<number>(1);

   return (
      <Layout>
         <main className=" w-full">
            {/* Card */}
            <section className="container m-auto grid grid-cols-3 p-8 font-text">
               {/* Image preview */}
               <div className="col-span-1">
                  <img src={img[0].url} alt="" />
               </div>
               {/* product discription */}
               <div className="shadow-lg col-span-2 p-8">
                  <div>
                     <p className="font-bold text-xl py-4">{name}</p>
                     <div className="py-3 border-b">
                        <p>
                           Brand: <span className="text-darkBlue">{brand}</span>
                        </p>
                        <div className="text-xl flex gap-4">
                           {available_offer ? (
                              <>
                                 <span className="line-through text-gray-500">
                                    ৳{regular_price}
                                 </span>
                                 <span className="text-darkBlue text-xl font-semibold">
                                    ৳{offer_price}
                                 </span>
                              </>
                           ) : (
                              <span className="text-darkBlue text-xl font-semibold">
                                 ৳{regular_price}
                              </span>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="py-4 flex gap-2 text-xs border-b">
                     <div className="flex">
                        <button
                           className="py-3 px-2 border rounded-l-md transition-all duration-150 hover:bg-lightBlue outline-none"
                           onClick={() => {
                              setProductQuantity((prevQuanity) =>
                                 prevQuanity > 1 ? prevQuanity - 1 : 1
                              );
                           }}
                        >
                           -
                        </button>
                        <span className="py-3 px-2 border-t border-b">
                           {productQuantity}
                        </span>
                        <button
                           className="py-3 px-2 border rounded-r-md hover:bg-lightBlue transition-all duration-150 outline-none"
                           onClick={() =>
                              setProductQuantity(
                                 (prevQuanitiy) => prevQuanitiy + 1
                              )
                           }
                        >
                           +
                        </button>
                     </div>
                     <button className=" productBtn bg-gray-500 hover:bg-gray-600  ">
                        ADD TO CART
                     </button>
                     <button className=" productBtn bg-lightBlue hover:bg-darkBlue ">
                        BUY NOW
                     </button>
                  </div>
                  <div className="py-4">
                     <p>
                        Product Id:{" "}
                        <span className="text-xs text-gray-500">
                           {id.toUpperCase()}
                        </span>
                     </p>
                     <div>
                        Categories:
                        {categories.map(({ name }, i) => (
                           <span className="text-xs text-gray-500" key={i}>
                              {" "}
                              {name}{" "}
                           </span>
                        ))}
                     </div>
                     <p>Color: </p>
                  </div>
               </div>
            </section>
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
