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
import ReactImageZoom from "react-image-zoom";
import { motion } from "framer-motion";

interface ProductImagesProps {
   img: any[];
}

// configring swiper
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs]);
export const ProductImages: React.FC<ProductImagesProps> = ({ img }) => {
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
                  <motion.div
                     initial={{ x: 200, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 0.2 }}
                  >
                     <ReactImageZoom
                        className="lg:m-0 md:m-auto"
                        img={url}
                        zoomPosition="original"
                     />
                  </motion.div>
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
                  <img className="cursor-pointer" src={url} alt="img" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};
