import { GetStaticProps } from "next";
import { Layout } from "../components/Layout/Layout";
import axios from "axios";
import { N_Deals_Page } from "../components/DealsPage/N_Deals_Page";

const New_Arrival = ({ new_arrival }) => {
   return (
      <Layout>
         <N_Deals_Page products={new_arrival} />
      </Layout>
   );
};

export default New_Arrival;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(`${process.env.URL}/new-arrivals`);
   return {
      props: {
         new_arrival: data,
      },
   };
};
