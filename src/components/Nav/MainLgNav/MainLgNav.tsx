import { useEffect, useRef, useState } from "react";
import { useClientSize } from "../../../utils/hooks/useClientSIze";
import { Cart, Menu, Search } from "../../../utils/svgs/Svg";
import Image from "next/image";
import { useCtx } from "../../../store";
import { showCart, showSideNavBar } from "../../../store/actions/domActions";

interface MainLgNavProps {}

export const MainLgNav: React.FC<MainLgNavProps> = ({}) => {
   // navbar ref to cal the height width of the page and components
   const navRef = useRef<HTMLDivElement>(null);
   const { Pageheight, compHeight } = useClientSize(navRef);
   // searchbar border focus state
   const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);
   // store
   const {
      domDispatch,
      cartState: { inCartProducts },
      cartState,
   } = useCtx();
   // MenuBtn Click Action
   const sideBarOpenAction = () => {
      domDispatch(showSideNavBar());
   };

   const [menuStokes, setMenuStrokes] = useState<string>(
      "M4 6h16M4 12h16M4 18h16"
   );

   // Total Items in the cart
   const [totoalItemInCart, setTotalItemsInTheCart] = useState<number>(0);

   useEffect(() => {
      if (inCartProducts && inCartProducts.length > 0) {
         const _total = inCartProducts.reduce(
            (result: number, { quantity }) => result + quantity,
            0
         );
         setTotalItemsInTheCart(_total);
      }
   }, [cartState]);
   return (
      <nav
         ref={navRef}
         className={` ${
            compHeight + 10 < Pageheight && " md:fixed md:top-0  md:shadow-lg"
         } w-full  bg-white z-10 md:shadow-sm`}
      >
         <section
            className={` ${
               compHeight + 10 < Pageheight ? "py-1" : "py-4"
            } container m-auto flex justify-between items-center font-nav  transition-all duration-300`}
         >
            <div className="flex ">
               <span
                  onMouseOver={() => setMenuStrokes("M4 6h16M4 12h16M4 18h7")}
                  onMouseOut={() => setMenuStrokes("M4 6h16M4 12h16M4 18h16")}
                  className="my-auto hidden md:block hover:text-gray-500"
                  onClick={sideBarOpenAction}
               >
                  <Menu strokes={menuStokes} />
               </span>
               <div className="cursor-pointer mx-5">
                  <Image
                     src="/img/logo.png"
                     layout="intrinsic"
                     height={60}
                     width={180}
                  />
               </div>
            </div>

            <div className="flex-1 hidden md:block">
               <div
                  className={`flex border  transition-all duration-300  ${
                     searchBarFocus ? "border-darkBlue" : "border-gray-400"
                  }  p-2 rounded-md `}
               >
                  <input
                     className="my-auto border-none disabled:bg-blue-100 outline-none flex-1 text-sm"
                     type="text"
                     placeholder="What are you looking for?"
                     onFocus={() => setSearchBarFocus(true)}
                     onBlur={() => setSearchBarFocus(false)}
                  />
                  <button className="outline-none overflow-auto">
                     <Search height={30} searchBarFocus={searchBarFocus} />
                  </button>
               </div>
            </div>
            <div className="flex mx-5">
               <div className="p-2  md:border-r border-gray-400">
                  <div
                     className="relative cursor-pointer"
                     onClick={() => domDispatch(showCart())}
                  >
                     <Cart />
                     <span
                        style={{ padding: "1px 3px" }}
                        className="absolute top-0 right-0 text-xs text-white  transform -translate-y-2 bg-darkBlue rounded-full translate-x-1"
                     >
                        {totoalItemInCart}
                     </span>
                  </div>
               </div>
               <div className="my-auto p-2  ">
                  <div
                     className="hidden md:block cursor-pointer"
                     onClick={() => domDispatch(showCart())}
                  >
                     <span>0</span>/ <span>৳0.00</span>
                  </div>
                  <span
                     onMouseOver={() =>
                        setMenuStrokes("M4 6h16M4 12h16M4 18h7")
                     }
                     onMouseOut={() =>
                        setMenuStrokes("M4 6h16M4 12h16M4 18h16")
                     }
                     className="my-auto block md:hidden"
                     onClick={sideBarOpenAction}
                  >
                     <Menu strokes={menuStokes} />
                  </span>
               </div>
            </div>
         </section>
      </nav>
   );
};
