import { RightArrowPointer } from "../../../../utils/svgs/Svg";
import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../utils/animation";
interface DescriptionProps {
   Features: any;
   features: any;
   Specifications: any;
   specifications: any;
   name: string;
   details: string;
}

export const Description: React.FC<DescriptionProps> = ({
   features,
   Features,
   specifications,
   Specifications,
   name,
   details,
}) => {
   console.log(details);

   return (
      <motion.div
         variants={TabPageChangeVariants}
         initial="inital"
         animate="animate"
         exit="exit"
         className=""
      >
         <h2 className="text-gray-600 my-4 font-bold">{name}</h2>
         {details && <p className="my-4">{details}</p>}
         {/* Features */}
         {Features && Features.length > 0 && (
            <div>
               <h2 className="text-gray-600 font-bold">Features:</h2>
               {Features.map((feature, i) => (
                  <p className="my-4 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3"> {feature}</span>
                  </p>
               ))}
            </div>
         )}
         {features && features.length > 0 && (
            <div>
               <h2 className="text-gray-600 font-bold">Features:</h2>
               {features.map((f, i) => (
                  <p className="my-4 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3"> {f}</span>
                  </p>
               ))}
            </div>
         )}
         {/* Specifications */}
         {Specifications && Specifications.length > 0 && (
            <div>
               <h2 className="text-gray-600 font-bold">Specification:</h2>
               {Specifications.map((specification, i) => (
                  <p className="my-4 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3"> {specification}</span>
                  </p>
               ))}
            </div>
         )}
         {specifications && specifications.length > 0 && (
            <div>
               <h2 className="text-gray-600 font-bold">Specification:</h2>
               {specifications.map((s, i) => (
                  <p className="my-4 flex items-center" key={i}>
                     <span>
                        <RightArrowPointer />
                     </span>
                     <span className="ml-3"> {s}</span>
                  </p>
               ))}
            </div>
         )}
      </motion.div>
   );
};
