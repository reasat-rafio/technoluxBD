import axios from "axios";
import { GetStaticProps } from "next";
import { N_Deals_Page } from "../components/DealsPage/N_Deals_Page";
import { Layout } from "../components/Layout/Layout";

const Gaming_Conole_And_Accesorries = ({ gaming_acceesories }) => {
   return (
      <Layout>
         <N_Deals_Page products={gaming_acceesories} />
      </Layout>
   );
};

export default Gaming_Conole_And_Accesorries;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(`${process.env.URL}/gaming-accessories`);

   return {
      props: {
         gaming_acceesories: data,
      },
   };
};
