import { useEffect, useRef, useState } from "react";
import { useClientSize } from "../../../utils/hooks/useClientSIze";
import { Cart, GoBack, Menu, Search } from "../../../utils/svgs/Svg";
import Image from "next/image";
import { useCtx } from "../../../store";
import { showCart, showSideNavBar } from "../../../store/actions/domActions";
import { useRouter } from "next/router";
import Link from "next/link";
import {
   useFilterByInput,
   useSearchFilter,
} from "../../../utils/hooks/useFilterByInput";
import { SearchbarResult } from "../../SearchbarResult/SearchbarResult";
import { motion } from "framer-motion";

interface MainLgNavProps {}

export const MainLgNav: React.FC<MainLgNavProps> = ({}) => {
   // router
   const router = useRouter();

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
      productsState,
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
      if (inCartProducts) {
         const _total = inCartProducts.reduce(
            (result: number, { quantity }) => result + quantity,
            0
         );
         setTotalItemsInTheCart(_total);
      }
   }, [cartState]);

   // Search result State
   const [showSearchResult, setShowSearchResult] = useState<boolean>(false);

   // Search Input value
   const [inputValue, setInputValue] = useState<string>("");
   // Search result ref
   const searchRef = useRef<HTMLDivElement>(null);
   // showing and closing the search result based on the input value action
   useEffect(() => {
      if (inputValue.length > 0) {
         setShowSearchResult(true);
      } else {
         setShowSearchResult(false);
      }
   }, [inputValue]);
   // chosing the search result when its clicked ourtside the components
   useEffect(() => {
      const handleClickOutside = (e) => {
         if (searchRef.current && !searchRef.current.contains(e.target)) {
            setShowSearchResult(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [searchRef]);

   // search filter state
   const [searchFilterItems, setSearchFilterItems] = useState([]);
   // On change searchfilter action
   const searchInputOnChangeAction = (e) => {
      setInputValue(e.target.value);
      const all_products = productsState.products.map(
         ({ name, img, offer_price, regular_price, slug }) => {
            return { name, img, offer_price, regular_price, slug };
         }
      );

      const { filteredItme } = useSearchFilter(all_products, e.target.value);
      setSearchFilterItems(filteredItme);
   };

   return (
      <nav
         ref={navRef}
         className={` ${
            compHeight + 10 < Pageheight && " md:fixed md:top-0  md:shadow-lg"
         }  bg-white w-screen z-10 md:shadow-sm border-b`}
      >
         <section
            className={` ${
               compHeight + 10 < Pageheight ? "py-1" : "lg:py-4 py-0"
            } container m-auto flex justify-between items-center font-nav  transition-all duration-300`}
         >
            <div className="flex ">
               <span
                  onMouseOver={() => setMenuStrokes("M4 6h16M4 12h16M4 18h7")}
                  onMouseOut={() => setMenuStrokes("M4 6h16M4 12h16M4 18h16")}
                  className="my-auto hidden lg:block hover:text-gray-500"
                  onClick={sideBarOpenAction}
               >
                  <Menu strokes={menuStokes} />
               </span>
               {router.pathname !== "/" && (
                  <span
                     className="my-auto block  lg:hidden hover:text-gray-500"
                     onClick={() => router.back()}
                  >
                     <GoBack />
                  </span>
               )}

               <motion.div drag className="cursor-pointer mx-5 lg:mx-0">
                  <Link href="/">
                     <a>
                        <Image
                           src="/img/logo.png"
                           layout="intrinsic"
                           height={70}
                           width={180}
                        />
                     </a>
                  </Link>
               </motion.div>
            </div>

            <div className="flex-1 hidden lg:block relative">
               <form
                  className={`flex   transition-all duration-300  ${
                     searchBarFocus ? "border-darkBlue" : "border-gray-400"
                  }  p-2  ${
                     showSearchResult
                        ? "border-t border-l border-r rounded-t-md"
                        : "border  rounded-md"
                  }`}
                  onSubmit={() => {
                     if (inputValue.length > 0) {
                        router.push(`/items/${searchFilterItems[0].slug}`);
                     }
                  }}
               >
                  <input
                     className="my-auto border-none disabled:bg-blue-100 outline-none flex-1 text-sm"
                     type="text"
                     placeholder="What are you looking for?"
                     onFocus={() => setSearchBarFocus(true)}
                     onBlur={() => setSearchBarFocus(false)}
                     onChange={(e) => searchInputOnChangeAction(e)}
                  />
                  <button className="outline-none overflow-auto">
                     <Search height={30} searchBarFocus={searchBarFocus} />
                  </button>
               </form>
               {/*---------- SEARCH RESULT ------------  */}
               {showSearchResult && (
                  <div
                     style={{ minHeight: "70px" }}
                     ref={searchRef}
                     className=" bg-white absolute z-30 p-3 max-h-96 disable-scrollbars overflow-x-hidden flex border-darkBlue border flex-col rounded-sm w-full  "
                  >
                     <SearchbarResult
                        searchFilterItems={searchFilterItems}
                        inputValue={inputValue}
                     />
                  </div>
               )}
            </div>
            <div className="flex mx-5">
               <div className="p-2 lg:border-r border-gray-400">
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
                     className="hidden lg:block cursor-pointer"
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
                     className="my-auto block lg:hidden"
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
