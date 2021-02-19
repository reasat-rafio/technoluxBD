import Link from "next/link";
import { useCtx } from "../../../store";
import { showSearchPage } from "../../../store/actions/domActions";

import {
   CartBag,
   Home,
   Messenger,
   Account,
   Search,
} from "../../../utils/svgs/Svg";

interface SmBottomNavProps {}

export const SmBottomNav: React.FC<SmBottomNavProps> = ({}) => {
   const { domDispatch } = useCtx();

   return (
      <main className="w-full fixed bottom-0 bg-white z-10  md:hidden">
         <ul className="py-2 px-6  container m-auto flex justify-between items-center text-sm">
            <Link href="/">
               <a className="btmNavLi">
                  <span>
                     <Home />
                  </span>
                  <p>Home</p>
               </a>
            </Link>
            <Link href="">
               <a className="btmNavLi">
                  <span>
                     <CartBag />
                  </span>
                  <p>Cart</p>
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

            <Link href="customer/account/auth">
               <a className="btmNavLi">
                  <span>
                     <Account />
                  </span>
                  <p>Account</p>
               </a>
            </Link>

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
