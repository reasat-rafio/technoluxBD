import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Autoplay,
   EffectFade,
} from "swiper";
import "swiper/swiper-bundle.css";
import { Poster } from "../../../utils/_components/Poster";

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
            pagination={{ clickable: true }}
         >
            {cover_img.map(({ _id, formats: { small, thumbnail }, url }) => (
               <SwiperSlide key={_id}>
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

         <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Computer-Accessories-v2.png" />
      </>
   );
};
