import { GlobalState } from "../store";
import "../styles/tailwind.scss";

function MyApp({ Component, pageProps }) {
   return (
      <GlobalState>
         <Component {...pageProps} />
      </GlobalState>
   );
}

export default MyApp;
