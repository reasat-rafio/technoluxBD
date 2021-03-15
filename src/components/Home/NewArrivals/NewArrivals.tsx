import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { useCtx } from "../../../store";
import { useRouter } from "next/router";
import TextTruncate from "react-text-truncate";
import { motion } from "framer-motion";

interface NewArrivalsProps {
   new_arrivals: any;
   to: string;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
   new_arrivals,
   to,
}) => {
   // configring swiper
   SwiperCore.use([Autoplay, EffectFade]);
   const [pgWidth, setPgWidth] = useState<string>("");
   // global state
   const {
      domState: { pageWidth },
   } = useCtx();

   // products
   const [products, setProducts] = useState(new_arrivals.slice(0, 12));

   // show all products
   const [showAll, setShowALl] = useState(false);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (pageWidth > 1180) {
         setPgWidth("lg");
      } else if (pageWidth < 1180 && pageWidth > 720) {
         setPgWidth("md");
      } else if (pageWidth < 720 && pageWidth > 550) {
         setPgWidth("sm");
      } else if (pageWidth < 550 && pageWidth > 0) {
         setPgWidth("xs");
      } else if (pageWidth == 0) {
         return;
      }
   }, [pageWidth]);

   // Load more products
   const showMoreProducts = () => {
      setLoading(true);
      setTimeout(() => {
         setShowALl(true);
         setProducts(new_arrivals);
         setLoading(false);
      }, 1000);
   };
   // load less products
   const showLessProducts = () => {
      setLoading(true);
      setTimeout(() => {
         setShowALl(false);
         setProducts(new_arrivals.slice(0, 12));
         setLoading(false);
      }, 1000);
   };

   // router
   const router = useRouter();

   return (
      <div className=" px-3 md:px-0">
         <div className="flex border-b font-nav text-xl font-semibold ">
            <h2 className="py-3 border-b-4 border-darkBlue flex gap-1">
               NEW ARRIVALS
            </h2>
         </div>

         {/* card section */}
         <section className="my-4 grid grid-cols-12 gap-2 ">
            {products
               .sort((a, b) =>
                  a.highlight_item === b.highlight_item
                     ? 0
                     : a.highlight_item
                     ? -1
                     : 1
               )
               .map(
                  ({ name, img, offer_price, regular_price, id, slug }, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className={`border cursor-pointer  text-center hover:shadow-2xl  transition-all duration-150 col-span-6 md:col-span-3 lg:col-span-2 hover:border-gray-800  ${
                           pgWidth == "sm" && "h-smCard"
                        } ${pgWidth == "xs" && "h-lgCard"}           
                        `}
                        onClick={() => router.push(`/items/${slug}`)}
                     >
                        <Swiper
                           slidesPerView={1}
                           autoplay={{ disableOnInteraction: false }}
                           style={{ maxWidth: "200px" }}
                        >
                           {img.map((a, i) => (
                              <SwiperSlide key={i}>
                                 <img src={a.url} alt={name} />
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
                  )
               )}
         </section>

         {showAll && !loading && (
            <button
               className="mx-auto flex my-2 rounded-sm  p-3 border-darkBlue text-darkBlue border hover:bg-black hover:text-white font-semibold hover:border-black transition-all duration-300 mb-16"
               onClick={showLessProducts}
            >
               LOAD LESS PRODUCTS
            </button>
         )}

         {!showAll && !loading && (
            <button
               className="mx-auto flex my-2 rounded-sm  p-3 border-darkBlue text-darkBlue border hover:bg-black hover:text-white font-semibold hover:border-black transition-all duration-300 mb-16"
               onClick={showMoreProducts}
            >
               LOAD MORE PRODUCTS
            </button>
         )}

         {!showAll && loading && (
            <button
               className="mx-auto flex my-2 rounded-sm  p-3 border-darkBlue text-darkBlue border   font-semibold transition-all duration-300 mb-16 cursor-not-allowed"
               disabled={true}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
               >
                  <path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"></path>
               </svg>
               Processing
            </button>
         )}

         {showAll && loading && (
            <button
               className="mx-auto flex my-2 rounded-sm  p-3 border-darkBlue text-darkBlue border   font-semibold transition-all duration-300 mb-16 cursor-not-allowed"
               disabled={true}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
               >
                  <path d="M12,22c5.421,0,10-4.579,10-10h-2c0,4.337-3.663,8-8,8s-8-3.663-8-8c0-4.336,3.663-8,8-8V2C6.579,2,2,6.58,2,12 C2,17.421,6.579,22,12,22z"></path>
               </svg>
               Processing
            </button>
         )}
      </div>
   );
};
