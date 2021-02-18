import { GLobalLayout } from "../components/Layout/GLobalLayout";
import { GlobalState } from "../store";
import "../styles/tailwind.scss";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
   return (
      <CookiesProvider>
         <GlobalState>
            <GLobalLayout>
               <Component {...pageProps} />
            </GLobalLayout>
         </GlobalState>
      </CookiesProvider>
   );
}

export default MyApp;
