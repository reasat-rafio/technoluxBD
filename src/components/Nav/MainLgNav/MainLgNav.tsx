import { useRef, useState } from "react";
import { useClientSize } from "../../../utils/hooks/useClientSIze";
import { Cart, Menu, Search } from "../../../utils/svgs/Svg";
import Image from "next/image";
import { useCtx } from "../../../store";
import { showSideNavBar } from "../../../store/actions/domActions";

interface MainLgNavProps {}

export const MainLgNav: React.FC<MainLgNavProps> = ({}) => {
   // navbar ref to cal the height width of the page and components
   const navRef = useRef<HTMLDivElement>(null);
   const { Pageheight, compHeight } = useClientSize(navRef);
   // searchbar border focus state
   const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);
   // store
   const { domDispatch } = useCtx();
   // MenuBtn Click Action
   const sideBarOpenAction = () => {
      domDispatch(showSideNavBar());
   };
   return (
      <nav
         ref={navRef}
         className={` ${
            compHeight + 10 < Pageheight && " fixed top-0  shadow-lg"
         } w-full  bg-white z-30`}
      >
         <section
            className={` ${
               compHeight + 10 < Pageheight ? "py-2" : "py-6"
            } container m-auto flex justify-between items-center font-nav  transition-all duration-300`}
         >
            <div className="flex ">
               <span className="my-auto" onClick={sideBarOpenAction}>
                  <Menu />
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

            <div className="flex-1 ">
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
                     <Search searchBarFocus={searchBarFocus} />
                  </button>
               </div>
            </div>
            <div className="flex mx-5">
               <div className="p-2 border-r border-gray-400">
                  <div className="relative cursor-pointer">
                     <Cart />
                     <span
                        style={{ padding: "1px 3px" }}
                        className="absolute top-0 right-0 text-xs text-white  transform -translate-y-2 bg-darkBlue rounded-full translate-x-1"
                     >
                        0
                     </span>
                  </div>
               </div>
               <div className="my-auto p-2  ">
                  <div>
                     <span>0</span>/ <span>৳0.00</span>
                  </div>
               </div>
            </div>
         </section>
      </nav>
   );
};
