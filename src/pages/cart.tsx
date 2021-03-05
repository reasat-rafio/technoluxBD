import { CartProductList } from "../components/CartPage/CartproductList/CartProductList";
import { CartTotal } from "../components/CartPage/CartTotal/CartTotal";
import { Layout } from "../components/Layout/Layout";

interface cartProps {}

const cart: React.FC<cartProps> = ({}) => {
   return (
      <Layout>
         <div className="w-full font-nav">
            <div className="container mx-auto grid gap-5 grid-cols-5 my-9">
               <CartProductList />
               <CartTotal />
            </div>
         </div>
      </Layout>
   );
};

export default cart;
