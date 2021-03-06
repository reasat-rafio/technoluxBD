import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { FilterProductSection } from "../../components/ShopLayout/FilterProductSection";
import { ShopLayout } from "../../components/ShopLayout/ShopLayout";
import { ShopProducts } from "../../components/ShopLayout/ShopProducts";
import { InPageToast } from "../../utils/_components/InPageToast";

const product = ({ products }) => {
   const router = useRouter();

   const { product } = router.query;
   const [allFilteredProdtucts, setAllFiltredProducts] = useState(() => {
      return products;
   });
   // sort items state
   const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
   const [selectedFilter, setSelectedFilter] = useState<string>(
      "Sort by popularity"
   );

   // Products grid
   const [gridCount, setGridCount] = useState(3);

   useEffect(() => {
      setAllFiltredProducts(products);
   }, [products]);

   return (
      <Layout>
         <ShopLayout>
            <div className="min-h-screen">
               {allFilteredProdtucts && allFilteredProdtucts.length > 0 ? (
                  <ShopProducts
                     products={allFilteredProdtucts}
                     gridCount={gridCount}
                     setGridCount={setGridCount}
                     showMoreFilter={showMoreFilter}
                     setShowMoreFilter={setShowMoreFilter}
                     selectedFilter={selectedFilter}
                     setSelectedFilter={setSelectedFilter}
                  />
               ) : (
                  <>
                     <FilterProductSection
                        gridCount={gridCount}
                        setGridCount={setGridCount}
                        showMoreFilter={showMoreFilter}
                        setShowMoreFilter={setShowMoreFilter}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                     />
                     <InPageToast text="No products were found matching your selection." />
                  </>
               )}
            </div>
         </ShopLayout>
      </Layout>
   );
};
export default product;

export const getStaticPaths: GetStaticPaths = async () => {
   const { data } = await axios.get(`${process.env.URL}/categories`);

   const paths = [...data].map(({ name }) => ({
      params: { product: name },
   }));

   return {
      paths,
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   const ctg = ctx.params.product;
   const flash_deals_all = await axios.get(`${process.env.URL}/products`);
   const gaming_accessories_all = await axios.get(
      `${process.env.URL}/gaming-accessories`
   );
   const new_arrivals_all = await axios.get(`${process.env.URL}/new-arrivals`);

   const allProducts = [
      ...flash_deals_all.data,
      ...gaming_accessories_all.data,
      ...new_arrivals_all.data,
   ];

   const products = allProducts.filter((pd) => {
      if (pd.categories[0].name === `${ctg}`) {
         return pd;
      }
   });

   return {
      props: {
         products,
      },
   };
};
