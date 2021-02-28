import { RightArrowPointer } from "../../../../utils/svgs/Svg";
import { motion } from "framer-motion";
import { TabPageChangeVariants } from "../../../../utils/animation";
interface DescriptionProps {
   Features: [string];
   Specifications: [string];
   name: string;
}

export const Description: React.FC<DescriptionProps> = ({
   Features,
   Specifications,
   name,
}) => {
   return (
      <motion.div
         variants={TabPageChangeVariants}
         initial="inital"
         animate="animate"
         exit="exit"
         className=""
      >
         <h2 className="text-gray-600 my-4 font-bold">{name}</h2>
         {/* Features */}
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
         {/* Specifications */}
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
      </motion.div>
   );
};
