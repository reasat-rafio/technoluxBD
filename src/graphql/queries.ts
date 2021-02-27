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
