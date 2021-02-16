import { Layout } from "../components/Layout/Layout";
import { GlobalState } from "../store";
import "../styles/tailwind.scss";

function MyApp({ Component, pageProps }) {
   return (
      <GlobalState>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </GlobalState>
   );
}

export default MyApp;
