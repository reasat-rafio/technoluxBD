import { RightArrowPointer } from "../../../../utils/svgs/Svg";
import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../utils/animation";
import ReactPlayer from "react-player";
import { MarkdownPreview } from "react-marked-markdown";

interface DescriptionProps {
   Features: any;
   features: any;
   Specifications: any;
   specifications: any;
   name: string;
   details: string;
   description_img: any;
   dts: any;
   yt_url: string;
}

export const Description: React.FC<DescriptionProps> = ({
   features,
   Features,
   specifications,
   Specifications,
   name,
   details,
   description_img,
   dts,
   yt_url,
}) => {
   return (
      <motion.div
         variants={TabPageChangeVariants}
         initial="inital"
         animate="animate"
         exit="exit"
         className=""
      >
         <h2 className="text-gray-600 my-3 font-bold">{name}</h2>
         {details && <p className="my-3 text-gray-800">{details}</p>}
         {/* Features */}
         {Features && Features.length > 0 && (
            <div>
               <h2 className="text-gray-800 font-bold">Features:</h2>
               {Features.map((feature, i) => (
                  <p className="my-3 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3 text-gray-800"> {feature}</span>
                  </p>
               ))}
            </div>
         )}
         {features && features.length > 0 && (
            <div>
               <h2 className="text-gray-800 font-bold">Features:</h2>
               {features.map((f, i) => (
                  <p className="my-3 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3 text-gray-800"> {f}</span>
                  </p>
               ))}
            </div>
         )}
         {/* Specifications */}
         {Specifications && Specifications.length > 0 && (
            <div>
               <h2 className="text-gray-800 font-bold">Specification:</h2>
               {Specifications.map((specification, i) => (
                  <p className="my-3 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3 text-gray-800">
                        {" "}
                        {specification}
                     </span>
                  </p>
               ))}
            </div>
         )}
         {specifications && specifications.length > 0 && (
            <div>
               <h2 className="text-gray-800 font-bold">Specification:</h2>
               {specifications.map((s, i) => (
                  <p className="my-3 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3 text-gray-800"> {s}</span>
                  </p>
               ))}
            </div>
         )}

         {description_img && description_img.length > 0 && (
            <div>
               <img src={description_img[0].url} alt="" />
            </div>
         )}

         {dts && (
            <p className="text-gray-800">{<MarkdownPreview value={dts} />}</p>
         )}

         {yt_url && <ReactPlayer url={yt_url} />}
      </motion.div>
   );
};
