import React from "react";
import { useCtx } from "../../../store";
import {
   minuTheQuantityOfTheExistingItem,
   plusTheQuantityOfTheExistingItem,
   removeFromCart,
} from "../../../store/actions/CartAction";
import { MdCross } from "../../../utils/svgs/Svg";
import { Notify } from "../../../utils/Toast";

interface CartProductListProps {}

export const CartProductList: React.FC<CartProductListProps> = ({}) => {
   const {
      domDispatch,
      cartDispatch,
      domState: { showCartSidebar },
      cartState: { inCartProducts },
      cartState,
   } = useCtx();

   return (
      <div className="lg:col-span-3 col-span-5">
         <div className="flex flex-col">
            <div className="-my-2  sm:-mx-6 lg:-mx-8">
               <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                     <table className="divide-y divide-gray-200 table-fixed">
                        <thead className="bg-gray-50">
                           <tr>
                              <th
                                 scope="col"
                                 className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-7/12"
                              >
                                 PRODUCT
                              </th>
                              <th
                                 scope="col"
                                 className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  w-2/12"
                              >
                                 PRICE
                              </th>
                              <th
                                 scope="col"
                                 className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"
                              >
                                 QUANTITY
                              </th>
                              <th
                                 scope="col"
                                 className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  w-2/12"
                              >
                                 SUBTOTAL
                              </th>
                           </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                           {inCartProducts.map(
                              (
                                 { name, img, price, quantity, id, subtotal },
                                 i: number
                              ) => (
                                 <tr key={i}>
                                    <td className="px-2 py-4 ">
                                       <div className="flex items-center">
                                          <div className="ml-4">
                                             <div
                                                className="text-sm text-gray-500 "
                                                onClick={() =>
                                                   cartDispatch(
                                                      removeFromCart(id)
                                                   )
                                                }
                                             >
                                                <MdCross />
                                             </div>
                                          </div>
                                          <div className="flex-shrink-0 h-10 w-10">
                                             <img
                                                className="h-10 w-10 rounded-full"
                                                src={img}
                                                alt={name}
                                             />
                                          </div>
                                          <div className="ml-4">
                                             <div className="text-sm text-gray-500 ">
                                                {name}
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap">
                                       <div className="text-sm text-gray-900">
                                          ৳ {price}
                                       </div>
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap">
                                       <span className="px-2 inline-flex text-xs leading-5 font-semibold 0 text-green-800">
                                          <div className="flex justify-center items-center">
                                             <button
                                                className="py-3 px-2 border rounded-l-md transition-all duration-150 hover:bg-lightBlue outline-none"
                                                onClick={() => {
                                                   if (quantity > 1) {
                                                      cartDispatch(
                                                         minuTheQuantityOfTheExistingItem(
                                                            { id, quantity: 1 }
                                                         )
                                                      );
                                                   } else {
                                                      //    Remove the item from the cart if the quantity is less than 1
                                                      cartDispatch(
                                                         removeFromCart(id)
                                                      );
                                                      Notify(
                                                         "info",
                                                         `"${name}" is removed from the cart`
                                                      );
                                                   }
                                                }}
                                             >
                                                -
                                             </button>
                                             <span className="py-3 px-2 border-t border-b">
                                                {/* {productQuantity} */}{" "}
                                                {quantity}
                                             </span>
                                             <button
                                                className="py-3 px-2 border rounded-r-md hover:bg-lightBlue transition-all duration-150 outline-none"
                                                onClick={() =>
                                                   cartDispatch(
                                                      plusTheQuantityOfTheExistingItem(
                                                         { id, quantity: 1 }
                                                      )
                                                   )
                                                }
                                             >
                                                +
                                             </button>
                                          </div>
                                       </span>
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                                       ৳ {subtotal}
                                    </td>
                                 </tr>
                              )
                           )}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
