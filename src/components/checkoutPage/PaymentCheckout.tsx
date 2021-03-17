import { useCtx } from "../../store";
import {
   minuTheQuantityOfTheExistingItem,
   plusTheQuantityOfTheExistingItem,
   removeFromCart,
} from "../../store/actions/CartAction";
import { MdCross } from "../../utils/svgs/Svg";
import TextTruncate from "react-text-truncate";
import { Notify } from "../../utils/Toast";
import { CartTotal } from "../CartPage/CartTotal/CartTotal";
import { CartProductList } from "../CartPage/CartproductList/CartProductList";
interface PaymentCheckoutProps {}

export const PaymentCheckout: React.FC<PaymentCheckoutProps> = ({}) => {
   const {
      cartDispatch,
      cartState: { inCartProducts },
      cartState,
   } = useCtx();
   return (
      <section className="w-full">
         <div className="container mx-auto">
            {/* product table */}
            <div className="grid md:gap-5 gap-0  grid-cols-12 my-9">
               <>
                  <CartProductList />
                  <CartTotal />
               </>
            </div>
         </div>
      </section>
   );
};
