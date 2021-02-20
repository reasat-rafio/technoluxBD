import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Autoplay,
   EffectFade,
} from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

interface ImageCoverProps {
   cover_img: any[];
}

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export const ImageCover: React.FC<ImageCoverProps> = ({ cover_img }) => {
   return (
      <>
         <Swiper
            id="main"
            effect="fade"
            navigation
            autoplay={{ disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
         >
            {cover_img.map(({ _id, formats: { small, thumbnail }, url }) => (
               <SwiperSlide key={_id}>
                  <img
                     src={url}
                     alt="img"
                     style={{
                        width: "100%",
                        maxHeight: 400,
                        borderRadius: "5px",
                     }}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};
