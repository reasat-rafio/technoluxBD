import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { useCtx } from "../../../store";
import { useRouter } from "next/router";
import LinesEllipsis from "react-lines-ellipsis";

interface NewArrivalsProps {
   new_arrivals: any[];
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({ new_arrivals }) => {
   // configring swiper
   SwiperCore.use([Autoplay, EffectFade]);
   const [pgWidth, setPgWidth] = useState<string>("");
   // global state
   const {
      domState: { pageWidth },
   } = useCtx();
   // router
   const router = useRouter();
   return (
      <>
         <div className="flex border-b font-nav text-xl font-semibold ">
            <h2 className="py-3 border-b-4 border-darkBlue flex gap-1">
               NEW ARRIVALS
            </h2>
         </div>

         {/* card section */}
         <section className="my-4 grid grid-cols-12 gap-2 ">
            {new_arrivals.map(
               ({ name, img, offer_price, regular_price, id, slug }, i) => (
                  <div
                     className={`border cursor-pointer   text-center hover:shadow-2xl  transition-all duration-300 col-span-6 md:col-span-3 lg:col-span-2  ${
                        pgWidth == "sm" && "h-smCard"
                     } ${pgWidth == "xs" && "h-lgCard"}           
                        `}
                     onClick={() => router.push(`/items/${slug}`)}
                  >
                     <Swiper
                        slidesPerView={1}
                        id="main"
                        autoplay={{ disableOnInteraction: false }}
                        style={{ maxWidth: "200px" }}
                     >
                        {img.map((a, i) => (
                           <SwiperSlide key={i}>
                              <img src={a.url} alt="" />
                           </SwiperSlide>
                        ))}
                     </Swiper>

                     <div className="p-3">
                        <LinesEllipsis
                           className="text-sm font-medium text-center font-nav   "
                           text={name}
                           maxLine="3"
                           ellipsis="..."
                           trimRight
                           basedOn="letters"
                        />
                        {offer_price && (
                           <div className="my-2 flex gap-2 items-center justify-center">
                              <span className="line-through  text-sm text-gray-400 font-text">
                                 ৳{regular_price}
                              </span>
                              <span className="text-darkBlue font-semibold font-text">
                                 ৳{offer_price}
                              </span>
                           </div>
                        )}
                     </div>
                  </div>
               )
            )}
         </section>
         <div className="flex bg-gray-100 my-4 py-2 justify-center items-center hover:bg-gray-300 transition-all duration-150 cursor-pointer rounded-sm font-nav font-medium text-sm">
            VIEW ALL
         </div>
      </>
   );
};
