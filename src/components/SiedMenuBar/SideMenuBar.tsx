import { Box, Cross, Phone } from "../../utils/svgs/Svg";
import Link from "next/link";

interface SideMenuBarProps {}

export const SideMenuBar: React.FC<SideMenuBarProps> = ({}) => {
   return (
      <div
         className="fixed h-full w-full right-0 top-0 left-0 bottom-0 z-30 "
         style={{ background: "rgba(0, 0, 0, 0.7)" }}
      >
         <div className="fixed h-full w-96 right-0 top-0 bg-white p-4">
            <div>
               <Cross />
            </div>
            <ul>
               <li>
                  <Link href="">
                     <a>Home</a>
                  </Link>
               </li>
               <li>
                  <Link href="">
                     <a>Deals</a>
                  </Link>
               </li>
               <li>
                  <Link href="">
                     <a>New Arrivals</a>
                  </Link>
               </li>
               <li>
                  <Link href="">
                     <a>Login / Register</a>
                  </Link>
               </li>
            </ul>
            <section>
               <div>
                  <div>
                     <Phone />
                  </div>

                  <div>
                     <h3>Assistance</h3>
                     <p>info.technoluxBD.com</p>
                     <p>016 8688 2085</p>
                  </div>
               </div>
               <div>
                  <div>
                     <Box />
                  </div>
                  <div>
                     <h3>Delivery</h3>
                     <p>Inside Dhaka: 1 day</p>
                     <p>Ourside Dhaka: 2-4 daysko09</p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};
