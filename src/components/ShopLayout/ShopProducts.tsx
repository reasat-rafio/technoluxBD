import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useCtx } from "../../store";
import { showCategorySidebar } from "../../store/actions/domActions";
import { FourGrid, SmMenu, ThreeGrid, TwoGrid } from "../../utils/svgs/Svg";
import { InPageToast } from "../../utils/_components/InPageToast";
import { ShopShortDropDown } from "./ShopShortDropDown";
interface ShopProductsProps {
   products: any;
}

export const ShopProducts: React.FC<ShopProductsProps> = ({ products }) => {
   const router = useRouter();

   const [allProducts, setAllProducts] = useState<any>([...products]);

   useEffect(() => {
      setAllProducts(products);
   }, [products]);

   const [pageNumber, setPageNumber] = useState<number>(0);
   const productPerPage = 12;
   const PagesVisited = pageNumber * productPerPage;

   // Products grid
   const [gridCount, setGridCount] = useState(3);

   // sort items state
   const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
   const [selectedFilter, setSelectedFilter] = useState<string>(
      "Sort by popularity"
   );

   // SHORTING THE PRODUCTS. PS:ALL THE SORTING AND FILTERING HAPPENING HERE
   const displayProrducts = () => {
      return (
         allProducts &&
         allProducts.length > 0 &&
         allProducts
            .sort((a, b) => {
               if (selectedFilter === "Sort by popularity") {
                  return a.highlight_item === b.highlight_item
                     ? 0
                     : a.highlight_item
                     ? -1
                     : 1;
               }
               if (selectedFilter === "Sort by latest") {
                  return a.createdAt > b.createdAt ? 1 : -1;
               }
               if (selectedFilter === "Sort by Price: low to high") {
                  if (a.offer_price && b.offer_price) {
                     return parseInt(a.offer_price.replace(/,/g, ""), 10) <
                        parseInt(b.offer_price.replace(/,/g, ""), 10)
                        ? -1
                        : 1;
                  } else {
                     return parseInt(a.regular_price) <
                        parseInt(b.regular_price)
                        ? -1
                        : 1;
                  }
               }
               if (selectedFilter === "Sort by Price: high to low") {
                  if (a.offer_price && b.offer_price) {
                     return parseInt(a.offer_price.replace(/,/g, ""), 10) >
                        parseInt(b.offer_price.replace(/,/g, ""), 10)
                        ? -1
                        : 1;
                  } else {
                     return parseInt(a.regular_price) >
                        parseInt(b.regular_price)
                        ? -1
                        : 1;
                  }
               }
            })
            .slice(PagesVisited, PagesVisited + productPerPage)
            .map(({ name, img, offer_price, regular_price, id, slug }) => {
               return (
                  <div
                     className={`col-span-6 lg:col-span-4 xl:col-span-${gridCount} border cursor-pointer flex flex-col `}
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
            })
      );
   };

   // PAGINATION
   const pageCount = Math.ceil(allProducts.length / productPerPage);
   const chnagePage = ({ selected }) => {
      setPageNumber(selected);
   };

   // GLOBAL STATE
   const { domDispatch } = useCtx();

   return (
      <div className="min-h-screen">
         {/* filter section */}
         <div className="flex gap-2 my-5 items-center xl:justify-end ">
            <span className="flex flex-1 lg:hidden text-gray-300">
               <button
                  className="flex"
                  onClick={() => domDispatch(showCategorySidebar())}
               >
                  <SmMenu />
                  <p className="font-bold text-gray-900 ">OPTION</p>
               </button>
            </span>

            <>
               <span className="hidden xl:flex gap-2">
                  <span
                     onClick={() => setGridCount(4)}
                     className={`cursor-pointer hover:text-darkBlue hidden xl:block  ${
                        gridCount == 4 && "text-darkBlue"
                     }`}
                  >
                     <ThreeGrid />
                  </span>
                  <span
                     onClick={() => setGridCount(3)}
                     className={`cursor-pointer hover:text-darkBlue  hidden xl:block ${
                        gridCount == 3 && "text-darkBlue "
                     }`}
                  >
                     <FourGrid />
                  </span>
               </span>

               <ShopShortDropDown
                  showMoreFilter={showMoreFilter}
                  selectedFilter={selectedFilter}
                  setShowMoreFilter={setShowMoreFilter}
                  setSelectedFilter={setSelectedFilter}
               />
            </>
         </div>
         {/* ----- PRODUCTS OUTPUT SECTION ----- */}
         {allProducts && allProducts.length > 0 ? (
            <>
               <section className="grid grid-cols-12 my-5 gap-2 ">
                  {displayProrducts()}
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
               </span>{" "}
            </>
         ) : (
            <InPageToast text="No products were found matching your selection." />
         )}
      </div>
   );
};
