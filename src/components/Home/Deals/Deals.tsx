import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { useCtx } from "../../../store";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import TextTruncate from "react-text-truncate";
import { motion } from "framer-motion";

interface DealsProps {
   deals: any;
   to: string;
   name: string;
}

export const Deals: React.FC<DealsProps> = ({ deals, to, name }) => {
   // configring swiper
   SwiperCore.use([Autoplay, EffectFade]);
   // global state
   const {
      domState: { pageWidth },
   } = useCtx();
   const [loading, setLoading] = useState(false);
   const [pgWidth, setPgWidth] = useState<string>("");
   // swiper slidesPerView
   const [cardsPerView, setCardsPerView] = useState<number>(6);

   // router
   const router = useRouter();

   useEffect(() => {
      if (pageWidth > 1180) {
         setPgWidth("lg");
         setCardsPerView(6);
         setLoading(false);
      } else if (pageWidth < 1180 && pageWidth > 720) {
         setCardsPerView(4);
         setPgWidth("md");
         setLoading(false);
      } else if (pageWidth < 720 && pageWidth > 550) {
         setCardsPerView(2);
         setPgWidth("sm");
         setLoading(false);
      } else if (pageWidth < 550 && pageWidth > 0) {
         setCardsPerView(2);
         setPgWidth("xs");
         setLoading(false);
      } else if (pageWidth == 0) {
         setLoading(true);
         setCardsPerView(6);
      }
   }, [pageWidth]);

   return (
      <div className=" px-3 md:px-0">
         <section className="flex border-b font-nav text-xl font-semibold ">
            <div className="py-3 border-b-4 border-darkBlue flex gap-1">
               <h1>{name}</h1>
            </div>
         </section>
         {/* card section */}
         {!loading && cardsPerView != 0 && (
            <section className=" md:px-0" style={{ cursor: "grab" }}>
               <Swiper
                  className="my-1"
                  slidesPerView={cardsPerView}
                  id="main"
                  autoplay={{ disableOnInteraction: false }}
                  spaceBetween={10}
               >
                  {deals
                     .sort((a, b) =>
                        a.highlight_item === b.highlight_item
                           ? 0
                           : a.highlight_item
                           ? -1
                           : 1
                     )
                     .map(
                        ({
                           name,
                           img,
                           offer_price,
                           regular_price,
                           id,
                           slug,
                        }) => (
                           <SwiperSlide key={id}>
                              <motion.div
                                 whileHover={{ y: -10 }}
                                 className={`border cursor-pointer lg:h-lgCard md:h-80  text-center hover:shadow-2xl  transition-all duration-150 hover:border-gray-800 my-3 ${
                                    pgWidth == "sm" && "h-smCard"
                                 } ${pgWidth == "xs" && "h-lgCard"}`}
                                 onClick={() => router.push(`/items/${slug}`)}
                              >
                                 <Swiper
                                    slidesPerView={1}
                                    autoplay={{ disableOnInteraction: false }}
                                    style={{ maxWidth: "200px" }}
                                 >
                                    {img.map((a, i) => (
                                       <SwiperSlide key={i}>
                                          <img
                                             className="w-11/12 lg:w-full"
                                             style={{ cursor: "grab" }}
                                             src={a.url}
                                             alt={name}
                                          />
                                       </SwiperSlide>
                                    ))}
                                 </Swiper>

                                 <div className="p-3">
                                    <TextTruncate
                                       line={3}
                                       element="span"
                                       truncateText="…"
                                       className="text-sm font-medium text-center font-nav   "
                                       text={name}
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
                              </motion.div>
                           </SwiperSlide>
                        )
                     )}
               </Swiper>
               <div
                  className="flex bg-gray-100  py-2 justify-center items-center hover:bg-gray-300 transition-all duration-150 cursor-pointer rounded-sm font-nav font-medium text-sm"
                  onClick={() => router.push(to)}
               >
                  VIEW ALL
               </div>

               {/* <div className="grid  md:grid-cols-3 grid-cols-1 md:gap-4"></div>
            <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Computer-Accessories-v2.png" />
            <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Mobile-Accessories-v2.png" /> */}
            </section>
         )}
      </div>
   );
};
