import { Poster } from "../../utils/_components/Poster";
import { Deals } from "./Deals/Deals";
import { ImageCover } from "./HomeImageCoverSection/ImageCover";
import { NewArrivals } from "./NewArrivals/NewArrivals";

interface IndexProps {
   coverImg: any[];
   flashDeals: any[];
   new_arrivals: any[];
   gaming_accessories: any[];
}

export const HomePage: React.FC<IndexProps> = ({
   coverImg,
   flashDeals,
   new_arrivals,
   gaming_accessories,
}) => {
   return (
      <div className="mx-auto container">
         <ImageCover coverImg={coverImg} />
         <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Mobile-Accessories-v2.png" />
         <Deals name="FLASH DEAL" deals={flashDeals} />
         <Poster src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Gaming-Consoles-v2.png" />
         <Deals name="GAMING ACCESSORIES" deals={gaming_accessories} />
         <NewArrivals new_arrivals={new_arrivals} />
      </div>
   );
};
