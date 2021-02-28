import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Autoplay,
   EffectFade,
   Navigation,
   Pagination,
   Thumbs,
} from "swiper";
import "swiper/swiper-bundle.css";
import { useState } from "react";

interface ProductImagesProps {
   img: any[];
}
// configring swiper
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs]);
export const ProductImages: React.FC<ProductImagesProps> = ({ img }) => {
   console.log(img);
   const [thumbsSwiper, setThumbsSwiper] = useState();
   return (
      <div>
         <Swiper
            id="main"
            thumbs={{ swiper: thumbsSwiper }}
            effect="fade"
            navigation
            autoplay={{ disableOnInteraction: false }}
            pagination={{ clickable: true }}
         >
            {img.map(({ url }, i) => (
               <SwiperSlide key={i}>
                  <img src={url} alt="img" />
               </SwiperSlide>
            ))}
         </Swiper>
         <Swiper
            id="thumbs"
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={3}
         >
            {img.map(({ formats: { thumbnail: { url } } }, i) => (
               <SwiperSlide key={i}>
                  <img src={url} alt="img" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};
