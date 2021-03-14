import { CartProductList } from "../components/CartPage/CartproductList/CartProductList";
import { CartTotal } from "../components/CartPage/CartTotal/CartTotal";
import { Layout } from "../components/Layout/Layout";
import { useCtx } from "../store";
import { EmptyCart } from "../utils/svgs/Svg";

interface cartProps {}

const cart: React.FC<cartProps> = ({}) => {
   const {
      cartState: { inCartProducts },
   } = useCtx();
   return (
      <Layout>
         <div className="w-full  font-nav">
            {inCartProducts && inCartProducts.length > 0 ? (
               <div className="container mx-auto  grid md:gap-5 gap-0  grid-cols-5 my-9">
                  <CartProductList />
                  <CartTotal />
               </div>
            ) : (
               <div
                  style={{ height: "60vh" }}
                  className="container mx-auto flex gap-5 flex-col justify-center items-center  my-9 font-text text-center"
               >
                  <EmptyCart />
                  <h2 className="text-5xl font-semibold">
                     Your cart is currently empty.
                  </h2>

                  <p className="text-gray-500">
                     Before proceed to checkout you must add some products to
                     your shopping cart. You will find a lot of interesting
                     products on our "Shop" page.
                  </p>

                  <button className="bg-darkBlue p-3 text-nav text-white font-semibold text-sm rounded-md">
                     RETURN TO SHOP
                  </button>
               </div>
            )}
         </div>
      </Layout>
   );
};

export default cart;
