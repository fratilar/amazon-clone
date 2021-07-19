import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct(item) {
   const { id, title, category, description, image, price, rating, hasPrime } = item;

   const dispatch = useDispatch();

   const removeItemFromBasket = () => {
      dispatch(removeFromBasket({ id }));
   };

   return (
      <div className="grid grid-cols-5">
         <Image src={image} width={200} height={200} objectFit="contain" />

         <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <StarIcon className="h-5 text-yellow-500" key={i} />
                  ))}
            </div>
            <p className="text-gray-700 text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price} currency="EUR" />
            {hasPrime && (
               <div className="flex items-center space-x-2">
                  <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                  <p className="text-xs text-gray-500">FREE Next-day delivery</p>
               </div>
            )}
         </div>

         <div className="flex flex-col justify-self-end space-y-2 my-auto">
            <button className="button">Add to Basket</button>
            <button className="button" onClick={removeItemFromBasket}>
               Remove from Basket
            </button>
         </div>
      </div>
   );
}

export default CheckoutProduct;
