import { GLobalLayout } from "../components/Layout/GLobalLayout";
import { GlobalState } from "../store";
import "../styles/tailwind.scss";
// import { CookiesProvider } from "react-cookie";
// auth
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
   return (
      <Provider session={pageProps.session}>
         <GlobalState>
            <GLobalLayout>
               <Component {...pageProps} />
            </GLobalLayout>
         </GlobalState>
      </Provider>
   );
}

export default MyApp;
