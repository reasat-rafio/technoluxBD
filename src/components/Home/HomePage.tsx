import { ImageCover } from "./HomeImageCoverSection/ImageCover";

interface IndexProps {
   cover_img: any;
}

export const HomePage: React.FC<IndexProps> = ({ cover_img }) => {
   return (
      <div className="mx-auto container">
         <ImageCover cover_img={cover_img} />
      </div>
   );
};
