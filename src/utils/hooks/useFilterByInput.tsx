export const useFilterByInput = (products: any[], inputValue) => {
   let filteredItme = products.filter((val) => {
      if (val.toLowerCase().includes(inputValue.toLowerCase())) {
         return val;
      }
   });

   return {
      filteredItme,
   };
};
