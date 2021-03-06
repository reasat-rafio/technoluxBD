import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Autoplay,
   EffectFade,
} from "swiper";
import "swiper/swiper-bundle.css";

interface ImageCoverProps {
   coverImg: any[];
}

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

export const ImageCover: React.FC<ImageCoverProps> = ({ coverImg }) => {
   return (
      <>
         <Swiper
            id="main"
            effect="fade"
            navigation
            autoplay={{ disableOnInteraction: false }}
            pagination={{ clickable: true }}
         >
            {coverImg.map(({ _id, url }, i) => (
               <SwiperSlide key={i}>
                  <img
                     src={url}
                     alt="img"
                     style={{
                        width: "100%",
                        maxHeight: 400,
                        borderRadius: "2px",
                     }}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};
