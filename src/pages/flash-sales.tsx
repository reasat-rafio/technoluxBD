import { GetStaticProps } from "next";
import { Layout } from "../components/Layout/Layout";
import axios from "axios";
import { N_Deals_Page } from "../components/DealsPage/N_Deals_Page";

const Flash_Deals = ({ flash_deals }) => {
   return (
      <Layout>
         <N_Deals_Page products={flash_deals} />
      </Layout>
   );
};

export default Flash_Deals;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(`${process.env.URL}/products`);

   return {
      props: {
         flash_deals: data,
      },
   };
};
