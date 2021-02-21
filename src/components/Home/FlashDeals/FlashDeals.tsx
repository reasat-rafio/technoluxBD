import { Lignting_bolt } from "../../../utils/svgs/Svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { useCtx } from "../../../store";
import { useEffect, useState } from "react";
interface FlashDealsProps {
   products: any[];
}

export const FlashDeals: React.FC<FlashDealsProps> = ({ products }) => {
   // configring swiper
   SwiperCore.use([Autoplay, EffectFade]);
   // swiper slidesPerView
   const [cardsPerView, setCardsPerView] = useState<number>(5);
   // global state
   const {
      domState: { pageWidth },
   } = useCtx();
   console.log(pageWidth);

   useEffect(() => {
      if (pageWidth > 910) {
         setCardsPerView(6);
      } else if (pageWidth < 900 && pageWidth > 700) {
         setCardsPerView(4);
      } else if (pageWidth < 700 && pageWidth > 0) {
         setCardsPerView(2);
      }
   }, [pageWidth]);

   return (
      <main>
         <section className="flex border-b font-nav text-xl font-semibold">
            <div className="py-3 border-b-2 border-darkBlue flex gap-1">
               <span>
                  <Lignting_bolt position={25} />
               </span>
               <h1>FLASH DEALS</h1>
            </div>
         </section>
         {/* card section */}
         <section>
            <Swiper
               slidesPerView={cardsPerView}
               id="main"
               autoplay={{ disableOnInteraction: false }}
               spaceBetween={10}
            >
               {products.map((product) =>
                  product.products.map(
                     ({ name, img, offer_price, regular_price }, i) => (
                        <SwiperSlide key={i}>
                           <div className="border cursor-pointer">
                              <img src={img[0].url} alt="" />
                              <div>
                                 <h1>{name}</h1>
                                 <div>
                                    {offer_price ? (
                                       <>
                                          <span className="line-through text-gray-500 text-sm">
                                             ${regular_price}
                                          </span>
                                          <span className="text-darkBlue">
                                             ${offer_price}
                                          </span>
                                       </>
                                    ) : (
                                       "adsasd"
                                    )}
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     )
                  )
               )}
            </Swiper>
            <div className="flex bg-gray-100 my-4 py-2 justify-center items-center hover:bg-gray-300 transition-all duration-150 cursor-pointer rounded-sm font-nav font-medium text-sm">
               VIEW ALL
            </div>
         </section>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
         dicta, aspernatur quidem perferendis asperiores quas consequatur
         consectetur provident dolores fugiat quo temporibus labore sit ipsam.
         Harum, quis sapiente architecto eligendi nam tempore dignissimos
         corrupti quam sit earum voluptatum recusandae totam nemo obcaecati
         explicabo laudantium fuga rerum, saepe voluptatibus nobis doloremque
         fugiat exercitationem adipisci. Voluptatum ab harum, mollitia dolorem
         cupiditate nesciunt, quisquam officiis commodi asperiores natus dolor?
         Quasi, fugit atque quam reiciendis tempore voluptas labore velit ab
         officia magni similique facilis molestias veritatis voluptate
         consequuntur ducimus dolorem, libero nobis sit. Animi eum aliquam
         quisquam? Molestiae veritatis impedit id! Beatae, nam suscipit.
      </main>
   );
};
