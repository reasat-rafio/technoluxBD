import { useEffect, useRef, useState } from "react";
import { useClientSize } from "../../../utils/hooks/useClientSIze";
import { Cart, Menu, Search } from "../../../utils/svgs/Svg";
import Image from "next/image";
import { useCtx } from "../../../store";
import { showCart, showSideNavBar } from "../../../store/actions/domActions";
import { useRouter } from "next/router";
import Link from "next/link";

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

            <div className="flex-1 hidden md:block relative">
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
                     onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button className="outline-none overflow-auto">
                     <Search height={30} searchBarFocus={searchBarFocus} />
                  </button>
               </div>
               {/*---------- SEARCH RESULT ------------  */}
               {showSearchResult && (
                  <div
                     ref={searchRef}
                     className=" bg-red-400 absolute z-30 p-3 "
                  >
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Perspiciatis itaque quam id dicta at, nostrum sequi
                     inventore, nihil necessitatibus alias officiis voluptatum
                     impedit neque ipsa explicabo, quasi quas facilis. Pariatur
                     veritatis architecto ullam delectus ut nam, amet, facilis
                     rem sequi beatae sint facere ad dignissimos, repudiandae
                     asperiores fugit nulla quas soluta! Quae minima quas rem
                     veniam distinctio repellendus, alias maxime repudiandae
                     voluptatum animi tempore qui nihil quia exercitationem
                     nostrum eum incidunt est ad voluptates esse veritatis odit.
                     Assumenda saepe molestiae aut iusto quisquam enim!
                     Perferendis quasi et odit explicabo minima quod provident
                     ea totam nam quas? Excepturi doloremque fugiat aspernatur.
                  </div>
               )}
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
