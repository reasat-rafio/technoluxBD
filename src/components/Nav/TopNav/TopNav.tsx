import Link from "next/link";
import { FB, Phone } from "../../../utils/svgs/Svg";

interface TopNavProps {}

export const TopNav: React.FC<TopNavProps> = ({}) => {
   return (
      <nav className=" w-full transition-all duration-300  bg-black text-white xl:block lg:block   text-xs hidden  ">
         <section className="container  m-auto flex justify-between items-center font-nav ">
            {/* LEFT SIDE NAV */}
            <ul className="flex ">
               <li className="topNavLi border-l border-gray-300">
                  <Link href="#">
                     <a className="  border-red-700">FAQS</a>
                  </Link>
               </li>
               <li className="topNavLi  border-l border-gray-300">
                  <Link href="#">
                     <a>
                        <FB />
                     </a>
                  </Link>
               </li>
               <li className="topNavLi  border-l border-gray-300">
                  <Link href="#">
                     <a className="flex">
                        <Phone />
                     </a>
                  </Link>
               </li>
               <li className="topNavLi">
                  <Link href="#">
                     <p>01686882085</p>
                  </Link>
               </li>
            </ul>
            {/* RIGHT SIDE NAV */}
            <ul className="flex">
               <li className="topNavLi">
                  <p>WELCOME TO TECHNOLUX BD</p>
               </li>
               <li className="topNavLi  border-l border-gray-300">
                  <button>LOGIN / REGISTER</button>
               </li>
            </ul>
         </section>
      </nav>
   );
};
