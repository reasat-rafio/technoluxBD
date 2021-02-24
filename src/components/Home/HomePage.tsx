import { FlashDeals } from "./FlashDeals/FlashDeals";
import { ImageCover } from "./HomeImageCoverSection/ImageCover";

interface IndexProps {
   // cover_img: any;
   // products: any[];
}

export const HomePage: React.FC<IndexProps> = (
   {
      //  cover_img, products
   }
) => {
   return (
      <div className="mx-auto container">
         {/* <ImageCover cover_img={cover_img} /> */}
         {/* <FlashDeals products={products} /> */}
      </div>
   );
};
