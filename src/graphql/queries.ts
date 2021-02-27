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
         img {
            url
         }
      }
   }
`;

export const GET_ALL_PRODUCTS_ID = gql`
   query {
      products {
         id
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
   console.log(product_id);

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
