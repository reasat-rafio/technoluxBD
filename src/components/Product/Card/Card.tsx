import React, { useEffect, useRef, useState } from "react";

interface CardProps {
   available_offer: boolean;
   brand: string;
   categories: any[];
   name: string;
   offer_price: string;
   offer_time_till: string;
   regular_price: string;
   id: string;
}

export const Card: React.FC<CardProps> = ({
   available_offer,
   brand,
   categories,
   name,
   offer_price,
   offer_time_till,
   regular_price,
   id,
}) => {
   const [productQuantity, setProductQuantity] = useState<number>(1);

   const [timerDays, setTimerDays] = useState<string | number>("00");
   const [timerHours, setTimerHours] = useState<string | number>("00");
   const [timerMins, setTimerMins] = useState<string | number>("00");
   const [timerSecs, setTimerSecs] = useState<string | number>("00");

   let interval = useRef<any>();

   const startTimer = () => {
      const countdownDate = new Date(offer_time_till).getTime();

      interval.current = setInterval(() => {
         const now = new Date().getTime();
         const distance = +countdownDate - now;

         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
         );
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

         if (distance < 0) {
            // something
            clearInterval(interval.current);
         } else {
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMins(minutes);
            setTimerSecs(seconds);
         }
      }, 1000);
   };

   useEffect(() => {
      startTimer();
      return () => {
         clearInterval(interval.current);
      };
   }, []);

   return (
      <div className="shadow-lg col-span-2 p-8">
         <div>
            <p className="font-bold text-xl py-4">{name}</p>
            <div className="py-3 border-b">
               <p>
                  Brand: <span className="text-darkBlue">{brand}</span>
               </p>
               <div className="text-xl flex gap-4">
                  {available_offer ? (
                     <>
                        <span className="line-through text-gray-500">
                           ৳{regular_price}
                        </span>
                        <span className="text-darkBlue text-xl font-semibold">
                           ৳{offer_price}
                        </span>
                     </>
                  ) : (
                     <span className="text-darkBlue text-xl font-semibold">
                        ৳{regular_price}
                     </span>
                  )}
               </div>
            </div>
         </div>
         {/* Timer section */}
         <div className="py-4 text-xs border-b">
            <div className=" my-2 flex gap-5 justify-start items-center p-1 border border-darkBlue rounded-full">
               <img src={"/img/flash-sale-badge.png"} alt="" />
               <section>
                  <span className="font-bold text-sm pr-1">{timerDays}</span>
                  <span className="text-gray-500">Day</span>
               </section>
               <section>
                  <span className="font-bold text-sm pr-1">{timerHours}</span>
                  <span className="text-gray-500">Hour</span>
               </section>
               <section>
                  <span className="font-bold text-sm pr-1">{timerMins}</span>
                  <span className="text-gray-500">Min</span>
               </section>
               <section>
                  <span className="font-bold text-sm pr-1">{timerSecs}</span>
                  <span className="text-gray-500">Sec</span>
               </section>
            </div>

            <div className=" flex gap-2">
               <div className="flex">
                  <button
                     className="py-3 px-2 border rounded-l-md transition-all duration-150 hover:bg-lightBlue outline-none"
                     onClick={() => {
                        setProductQuantity((prevQuanity) =>
                           prevQuanity > 1 ? prevQuanity - 1 : 1
                        );
                     }}
                  >
                     -
                  </button>
                  <span className="py-3 px-2 border-t border-b">
                     {productQuantity}
                  </span>
                  <button
                     className="py-3 px-2 border rounded-r-md hover:bg-lightBlue transition-all duration-150 outline-none"
                     onClick={() =>
                        setProductQuantity((prevQuanitiy) => prevQuanitiy + 1)
                     }
                  >
                     +
                  </button>
               </div>
               <button className=" productBtn bg-gray-500 hover:bg-gray-600  ">
                  ADD TO CART
               </button>
               <button className=" productBtn bg-lightBlue hover:bg-darkBlue ">
                  BUY NOW
               </button>
            </div>
         </div>
         <div className="py-4">
            <p>
               Product Id:{" "}
               <span className="text-xs text-gray-500">{id.toUpperCase()}</span>
            </p>
            <div>
               Categories:
               {categories.map(({ name }, i) => (
                  <span className="text-xs text-gray-500" key={i}>
                     {" "}
                     {name}{" "}
                  </span>
               ))}
            </div>
            <p>Color: </p>
         </div>
      </div>
   );
};
