import { Lignting_bolt } from "../../../utils/svgs/Svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { useCtx } from "../../../store";
import { useEffect, useRef, useState } from "react";
import { Poster } from "../../../utils/_components/Poster";

interface FlashDealsProps {
   flashDeals: any[];
}

export const FlashDeals: React.FC<FlashDealsProps> = ({ flashDeals }) => {
   // configring swiper
   SwiperCore.use([Autoplay, EffectFade]);
   // swiper slidesPerView
   const [cardsPerView, setCardsPerView] = useState<number>(0);
   // global state
   const [pgWidth, setPgWidth] = useState<string>("");
   // img
   const [hoverImageChange, setHoverImageChange] = useState(false);

   const {
      domState: { pageWidth },
   } = useCtx();

   useEffect(() => {
      if (pageWidth > 1180) {
         setPgWidth("lg");
         setCardsPerView(6);
      } else if (pageWidth < 1180 && pageWidth > 720) {
         setCardsPerView(4);
         setPgWidth("md");
      } else if (pageWidth < 720 && pageWidth > 550) {
         setCardsPerView(2);
         setPgWidth("sm");
      } else if (pageWidth < 550 && pageWidth > 0) {
         setCardsPerView(2);
         setPgWidth("xs");
      } else if (pageWidth == 0) {
         return;
      }
   }, [pageWidth]);

   return (
      <main>
         <section className="flex border-b font-nav text-xl font-semibold ">
            <div className="py-3 border-b-4 border-darkBlue flex gap-1">
               <span>
                  <Lignting_bolt position={25} />
               </span>
               <h1>FLASH DEALS</h1>
            </div>
         </section>
         {/* card section */}
         <section className="my-4 ">
            <Swiper
               slidesPerView={cardsPerView}
               id="main"
               autoplay={{ disableOnInteraction: false }}
               spaceBetween={10}
            >
               {flashDeals.map(
                  ({ name, img, offer_price, regular_price }, i) => {
                     const imgRef = useRef<HTMLImageElement>();

                     return (
                        <SwiperSlide key={name}>
                           <div
                              className={`border cursor-pointer lg:h-lgCard md:h-80  text-center hover:shadow-2xl  transition-all duration-300 ${
                                 pgWidth == "sm" && "h-smCard"
                              } ${pgWidth == "xs" && "h-lgCard"}`}
                           >
                              <Swiper
                                 slidesPerView={1}
                                 autoplay={{ disableOnInteraction: false }}
                              >
                                 {img.map((a, i) => (
                                    <SwiperSlide key={i}>
                                       <img
                                          className="transition-all duration-150"
                                          ref={imgRef}
                                          src={a.url}
                                          alt=""
                                       />
                                    </SwiperSlide>
                                 ))}
                              </Swiper>

                              <div className=""></div>

                              <div className="p-3">
                                 <h1 className="text-sm font-semibold text-center">
                                    {name}
                                 </h1>
                                 {offer_price && (
                                    <div className="my-2 flex gap-2 items-center justify-center">
                                       <span className="line-through  text-sm">
                                          ${regular_price}
                                       </span>
                                       <span className="text-darkBlue font-semibold">
                                          ${offer_price}
                                       </span>
                                    </div>
                                 )}
                              </div>
                           </div>
                        </SwiperSlide>
                     );
                  }
               )}
            </Swiper>
            <div className="flex bg-gray-100 my-4 py-2 justify-center items-center hover:bg-gray-300 transition-all duration-150 cursor-pointer rounded-sm font-nav font-medium text-sm">
               VIEW ALL
            </div>

            <div className="grid  md:grid-cols-3 grid-cols-1 md:gap-4">
               <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Computer-Accessories-v2.png" />
               <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Mobile-Accessories-v2.png" />
               <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Gaming-Consoles-v2.png" />
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
