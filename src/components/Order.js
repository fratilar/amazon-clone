import React from "react";
import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
   return (
      <div className="relative border rounded-md">
         <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
            <div>
               <p className="font-bold text-xs uppercase">Order placed</p>
               <p>{moment.unix(timestamp).format("DD-MM-YYYY")}</p>
            </div>

            <div>
               <p className="text-xs font-bold uppercase">Total</p>
               <p>
                  <Currency quantity={amount} currency="eur" /> - Next day delivery{" "}
                  <Currency quantity={amountShipping} currency="eur" />
               </p>
            </div>

            <p className="text-sm whitespace-nowrap sm:text-lg flex-1 text-blue-500 self-end text-right">
               {items.length} items
            </p>

            <p className="absolute top-2 right-2 text-xs w-40 lg:w-72 truncate">Order # {id}</p>
         </div>

         <div className="p-5 sm:p-10">
            <div className="flex space-x-6 overflow-x-auto">
               {images.map((image, i) => {
                  return <img className="h-20 object-contain sm:h-32" src={image} alt="" key={i} />;
               })}
            </div>
         </div>
      </div>
   );
}

export default Order;
