import { FlashDeals } from "./FlashDeals/FlashDeals";
import { ImageCover } from "./HomeImageCoverSection/ImageCover";

interface IndexProps {
   coverImg: any[];
   flashDeals: any[];
}

export const HomePage: React.FC<IndexProps> = ({ coverImg, flashDeals }) => {
   return (
      <div className="mx-auto container">
         <ImageCover coverImg={coverImg} />
         <FlashDeals flashDeals={flashDeals} />
      </div>
   );
};
