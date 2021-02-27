import React from "react";

interface ProductImagesProps {
   img: any[];
}

export const ProductImages: React.FC<ProductImagesProps> = ({ img }) => {
   return <img src={img[0].url} alt="" />;
};
