// We are not using this file , Just for reference

import { gql } from "@apollo/client";

export const GET_HOME_FLASH_DEALS = gql`
   query {
      products(
         limit: 10
         sort: "createdAt:desc"
         where: { deals: { name: "flash_deals" } }
      ) {
         id
         offer_time_till
         offer_price
         regular_price
         name
         slug
         img {
            url
         }
      }
   }
`;

export const GET_ALL_PRODUCTS_SLUG = gql`
   query {
      products {
         slug
      }
   }
`;

export const GET_THE_COVER_IMGS = gql`
   query {
      coverImages {
         img {
            id
            url
         }
      }
   }
`;

export const GET_PRODUCT = (product_id) => {
   return gql`
      query {
         product(id: "603293d667b4dc21d485fc99") {
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
};

// // setting the apolloclient
// const client = new ApolloClient({
//    uri: "http://localhost:1337/graphql",
//    cache: new InMemoryCache(),
// });
// const client = new ApolloClient({
//    uri: "http://localhost:1337/graphql",
//    cache: new InMemoryCache(),
// });

// const flash_deals = await client.query({ query: GET_HOME_FLASH_DEALS });
// const cover_img = await client.query({ query: GET_THE_COVER_IMGS });

//   query
const GET_PRODUCTS = gql`
   query Products($product_slug: String!) {
      products(where: { slug: $product_slug }) {
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
         slug
      }
   }
`;

// setting the request variable

// //  request
// const { data } = await client.query({
//    query: GET_PRODUCTS,
//    variables,
// });
