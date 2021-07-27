import React from "react";
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
   const [session, loading] = useSession();
   const router = useRouter();
   const items = useSelector(selectItems);

   return (
      <header>
         {/* Top Nav */}
         <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            {/* Left Side */}
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
               <Image
                  onClick={() => router.push("/")}
                  src="https://links.papareact.com/f90"
                  width={150}
                  height={40}
                  objectFit="contain"
                  className="cursor-pointer"
               />
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center bg-yellow-400 hover:bg-yellow-500 rounded-md h-10 flex-grow cursor-pointer">
               <input
                  className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                  type="text"
               />
               <SearchIcon className="h-12 p-4" />
            </div>

            {/* Right Side */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
               <div onClick={!session ? signIn : signOut} className="link">
                  {session ? `Hello, ${session.user.name}!` : "Hello, Sign In"}
                  <p className="font-extrabold md:text-sm">Account & Lists</p>
               </div>
               <div onClick={() => router.push("/orders")} className="link">
                  <p>Returns</p>
                  <p className="font-extrabold md:text-sm">& Orders</p>
               </div>
               <div onClick={() => router.push("/checkout")} className="link relative flex items-center">
                  <span className="absolute top-0 right-0 sm:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">
                     {items.length}
                  </span>
                  <ShoppingCartIcon className="h-10" />
                  <p className="hidden sm:inline font-extrabold md:text-sm mt-2">Basket</p>
               </div>
            </div>
         </div>

         {/* Bottom Nav */}
         <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
            <p className="link flex items-center">
               <MenuIcon className="h-6 mr-1" />
               All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            <p className="link hidden lg:inline-flex">Health & Personal Care</p>
         </div>
      </header>
   );
}

export default Header;
