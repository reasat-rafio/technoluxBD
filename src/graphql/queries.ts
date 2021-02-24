import { gql } from "@apollo/client";

export const GET_ALL_NAME = gql`
   query {
      products {
         name
      }
   }
`;
