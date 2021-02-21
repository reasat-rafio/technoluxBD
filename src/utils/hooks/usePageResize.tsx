import { useState, useEffect } from "react";

export const usePageResize = (myRef: any) => {
   const [width, setWidth] = useState<number>(0);
   const [height, setHeight] = useState<number>(0);

   useEffect(() => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
      const handleResize = () => {
         setWidth(myRef.current.offsetWidth);
         setHeight(myRef.current.offsetHeight);
      };
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [myRef]);
   return { width, height };
};
