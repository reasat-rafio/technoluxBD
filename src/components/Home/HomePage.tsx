import { Deals } from "./Deals/Deals";
import { ImageCover } from "./HomeImageCoverSection/ImageCover";
import { NewArrivals } from "./NewArrivals/NewArrivals";

interface IndexProps {
   coverImg: any[];
   flashDeals: any[];
   new_arrivals: any[];
}

export const HomePage: React.FC<IndexProps> = ({
   coverImg,
   flashDeals,
   new_arrivals,
}) => {
   return (
      <div className="mx-auto container">
         <ImageCover coverImg={coverImg} />
         <Deals deals={flashDeals} />
         <NewArrivals new_arrivals={new_arrivals} />
      </div>
   );
};
