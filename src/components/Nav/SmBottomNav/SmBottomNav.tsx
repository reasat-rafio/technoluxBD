import Link from "next/link";
import { useEffect, useState } from "react";
import { useCtx } from "../../../store";
import { showCart, showSearchPage } from "../../../store/actions/domActions";

import {
   CartBag,
   Home,
   Messenger,
   Account,
   Search,
} from "../../../utils/svgs/Svg";

interface SmBottomNavProps {}

export const SmBottomNav: React.FC<SmBottomNavProps> = ({}) => {
   const {
      domDispatch,
      cartState: { inCartProducts },
      cartState,
      productsState,
   } = useCtx();

   // Total Items in the cart
   const [totoalItemInCart, setTotalItemsInTheCart] = useState<number>(0);

   useEffect(() => {
      if (inCartProducts) {
         const _total = inCartProducts.reduce(
            (result: number, { quantity }) => result + quantity,
            0
         );
         setTotalItemsInTheCart(_total);
      }
   }, [cartState]);

   return (
      <main className="w-full fixed bottom-0 bg-white z-10  lg:hidden border-t font-nav">
         <ul className="py-2 px-6  container m-auto flex justify-around  gap-4 text-sm">
            <Link href="/">
               <a className="btmNavLi">
                  <span>
                     <Home />
                  </span>
                  <p>Home</p>
               </a>
            </Link>

            <Link href="customer/account/auth">
               <a className="btmNavLi">
                  <span>
                     <Account />
                  </span>
                  <p>Account</p>
               </a>
            </Link>

            <li
               className="btmNavLi"
               onClick={() => domDispatch(showSearchPage())}
            >
               <span className="">
                  <Search searchBarFocus={false} height={20} />
               </span>
               <p>Search</p>
            </li>

            <div
               className="btmNavLi relative"
               onClick={() => domDispatch(showCart())}
            >
               <span>
                  <CartBag />
               </span>
               <>
                  <p>Cart</p>
                  <span
                     style={{ padding: "1px 3px" }}
                     className="absolute top-0 right-0 text-xs text-white  transform -translate-y-2 bg-darkBlue rounded-full translate-x-1"
                  >
                     {totoalItemInCart}
                  </span>
               </>
            </div>

            <Link href="https://www.facebook.com/technoluxbd/inbox">
               <a className="btmNavLi">
                  <span>
                     <Messenger />
                  </span>
                  <p>Messenger</p>
               </a>
            </Link>
         </ul>
      </main>
   );
};
