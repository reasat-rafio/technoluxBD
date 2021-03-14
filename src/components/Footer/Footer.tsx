import Link from "next/link";
import { useState } from "react";
import {
   Facebook,
   Gmail,
   Location,
   PhoneSvg,
   WhatsApp,
} from "../../utils/svgs/Svg";
import { Contact_Info, Footer_Summary, MainLinks } from "./_Data";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
   const [year, setYear] = useState(new Date());

   return (
      <footer className="w-full bg-gray-800 text-gray-400 mb-11 lg:mb-0 text-sm  font-text">
         <div className="container mx-auto">
            {/* Footer Summary */}
            <div className="grid grid-cols-12 py-4 divide-gray-500  lg:divide-x divide-x-0 border-b border-gray-500 ">
               {Footer_Summary.map(
                  ({ icon, title, text, style }, i: number) => (
                     <section
                        key={i}
                        className={`col-span-6 lg:col-span-3  justify-center items-center md:gap-3 gap-0   mx-auto  px-5 font-nav grid grid-cols-12`}
                     >
                        <span className="md:col-span-4 col-span-12">
                           {icon}
                        </span>

                        <span className="md:col-span-8 col-span-12">
                           <h4 className="font-bold text-lg text-gray-200">
                              {title}
                           </h4>
                           <p>{text}</p>
                        </span>
                     </section>
                  )
               )}
            </div>

            {/* Fotter navs */}
            <div className="py-4 grid grid-cols-12 border-b border-gray-500">
               {MainLinks.map(({ header, links }, i: number) => (
                  <section
                     key={i}
                     className="col-span-6 lg:col-span-3  font-nav  mx-auto"
                  >
                     <h3 className="font-bold text-lg text-gray-200 mt-2 mb-4">
                        {header}
                     </h3>
                     <ul>
                        {links.map((l, i) => (
                           <li key={i} className="my-1 hover:text-darkBlue">
                              <Link href={l.to}>
                                 <a>{l.text}</a>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </section>
               ))}
            </div>

            <div className="py-4 grid grid-cols-12  px-5 gap-1">
               {/* CONTACT US */}
               <section className="col-span-6 lg:col-span-6 mx-auto font-nav">
                  <h3 className="font-bold text-lg text-gray-200 mt-2 mb-4 ">
                     CONTACT US
                  </h3>
                  <ul>
                     {Contact_Info.map(({ icon, text }, i: number) => (
                        <li className="flex my-1 gap-1  items-center" key={i}>
                           {icon}
                           <p>{text}</p>
                        </li>
                     ))}
                  </ul>
               </section>

               {/* Copy Right */}
               <section className="col-span-6 lg:col-span-3  flex justify-center items-center mx-auto font-nav ">
                  <p>
                     © {year.getFullYear()} technoluxbd.com | All Rights
                     Reserved.
                  </p>
               </section>

               {/* Socials */}
               <section className="col-span-2 lg:col-span-3 flex gap-2 justify-center items-center flex-row mx-auto">
                  <Link href="https://www.facebook.com/technoluxbd">
                     <a>
                        <Facebook />
                     </a>
                  </Link>
                  <Link href="">
                     <a>
                        <WhatsApp />
                     </a>
                  </Link>
               </section>
            </div>
         </div>
      </footer>
   );
};
