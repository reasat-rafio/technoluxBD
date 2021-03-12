import { useCtx } from "../../store";
import { Poster } from "../../utils/_components/Poster";
import { BackToTheTop } from "../BackToTheTop/BackToTheTop";
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
   const { domState } = useCtx();
   return (
      <div className="mx-auto container">
         <ImageCover coverImg={coverImg} />
         <Poster
            src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Mobile-Accessories-v2.png"
            to="/flash-sales"
         />
         <Deals deals={flashDeals} to="/flash-sales" />
         <Poster
            src="https://b2b-pickaboocdn.azureedge.net/media/wysiwyg/cmsp/Gaming-Consoles-v2.png"
            to="/gaming-consoles-accessories"
         />
         <Deals deals={gaming_accessories} to="/gaming-consoles-accessories" />
         <NewArrivals new_arrivals={new_arrivals} to="/new-arrivals" />
         <BackToTheTop />
      </div>
   );
};
