import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FourGrid, ThreeGrid, TwoGrid } from "../../utils/svgs/Svg";
interface ShopProductsProps {
   products: any;
}

export const ShopProducts: React.FC<ShopProductsProps> = ({ products }) => {
   const router = useRouter();

   const [allProducts, setAllProducts] = useState(products);
   const [pageNumber, setPageNumber] = useState<number>(0);
   const productPerPage = 12;
   const PagesVisited = pageNumber * productPerPage;

   // Products grid
   const [gridCount, setGridCount] = useState(3);

   const displayProrducts = allProducts
      .sort((a, b) =>
         a.highlight_item === b.highlight_item ? 0 : a.highlight_item ? -1 : 1
      )
      .slice(PagesVisited, PagesVisited + productPerPage)
      .map(({ name, img, offer_price, regular_price, id, slug }) => {
         return (
            <div
               className={`col-span-6 lg:col-span-4 xl:col-span-${gridCount} border cursor-pointer  flex flex-col`}
               key={id}
            >
               <div
                  className="flex-1 overflow-hidden"
                  onClick={() => router.push(`/items/${slug}`)}
               >
                  <motion.img
                     whileHover={{ scale: 1.1 }}
                     src={img[0].url}
                     alt={name}
                  />
               </div>

               <div className="">
                  <p className="text-sm font-medium text-center font-nav   ">
                     {name}
                  </p>
                  {offer_price && (
                     <div className="my-2 flex gap-2 items-center justify-center">
                        <span className="line-through  text-sm text-gray-400 font-text">
                           ৳{regular_price}
                        </span>
                        <span className="text-darkBlue font-semibold font-text">
                           ৳{offer_price}
                        </span>
                     </div>
                  )}
               </div>
            </div>
         );
      });

   const pageCount = Math.ceil(allProducts.length / productPerPage);

   const chnagePage = ({ selected }) => {
      setPageNumber(selected);
   };

   return (
      <div className="">
         {/* filter section */}
         <div className="flex gap-2 my-5">
            <span
               onClick={() => setGridCount(6)}
               className={`cursor-pointer hover:text-darkBlue  ${
                  gridCount == 6 && "text-darkBlue"
               }`}
            >
               <TwoGrid />
            </span>
            <span
               onClick={() => setGridCount(4)}
               className={`cursor-pointer hover:text-darkBlue ${
                  gridCount == 4 && "text-darkBlue"
               }`}
            >
               <ThreeGrid />
            </span>
            <span
               onClick={() => setGridCount(3)}
               className={`cursor-pointer hover:text-darkBlue ${
                  gridCount == 3 && "text-darkBlue"
               }`}
            >
               <FourGrid />
            </span>
         </div>
         <section className="grid grid-cols-12 my-5 gap-2">
            {displayProrducts}
         </section>
         <span className="mx-auto flex">
            <ReactPaginate
               previousLabel={"Prev"}
               nextLabel={"Next"}
               breakLabel={"..."}
               breakClassName={"break-me"}
               onPageChange={chnagePage}
               pageCount={pageCount}
               marginPagesDisplayed={2}
               pageRangeDisplayed={5}
               containerClassName={"pagination"}
               subContainerClassName={"pages pagination"}
               activeClassName={"active"}
            />
         </span>
      </div>
   );
};