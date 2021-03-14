import Link from "next/link";
import { FB, Mail, Phone } from "../../../utils/svgs/Svg";
import { useRouter } from "next/router";
import { useCtx } from "../../../store";
import { signIn, signOut, useSession } from "next-auth/client";

interface TopNavProps {}

export const TopNav: React.FC<TopNavProps> = ({}) => {
   const router = useRouter();

   // global state
   const {
      userDispatch,
      userState: { isLoggedIn },
   } = useCtx();

   return (
      <nav className=" w-full transition-all duration-300  bg-gray-800 text-white xl:block lg:block   text-xs hidden  ">
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
                  <Link href="mailto:info.technolux.bd@gmail.com">
                     <a>
                        <Mail />
                     </a>
                  </Link>
               </li>
               <li className="topNavLi  border-l border-gray-300">
                  <Link href="#">
                     <a className="flex">
                        <Phone width={20} height={20} />
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
               {isLoggedIn ? (
                  <li
                     className="topNavLi  border-l border-gray-300"
                     onClick={signOut}
                  >
                     <button>LOGOUT</button>
                  </li>
               ) : (
                  <li
                     className="topNavLi  border-l border-gray-300"
                     onClick={() => router.push("/customer/account/auth")}
                  >
                     <button>LOGIN / REGISTER</button>
                  </li>
               )}
            </ul>
         </section>
      </nav>
   );
};
