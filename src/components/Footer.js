import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Footer() {
   const router = useRouter();

   return (
      <footer className="bg-amazon_blue-light text-sm text-gray-300">
         <button className="p-3 bg-amazon_blue-lighter text-center w-full text-white hover:bg-amazon_blue-hover">
            Back to top
         </button>
         <div className="max-w-screen-2xl mx-auto hidden sm:grid grid-cols-2 md:grid-cols-4 lg:w-9/12">
            <div className="p-8 space-y-1">
               <h1 className="text-lg text-white font-semibold mb-3">Get to know us</h1>
               <p className="link font-semibold">Carrers</p>
               <p className="link font-semibold">Blog</p>
               <p className="link font-semibold">About Amazon</p>
               <p className="link font-semibold">Investor Relations</p>
               <p className="link font-semibold">Amazon Devices</p>
            </div>
            <div className="p-8 space-y-1">
               <h1 className="text-lg text-white font-semibold mb-3">Make money with us</h1>
               <p className="link font-semibold">Sell products on Amazon</p>
               <p className="link font-semibold">Sell apps on Amazon</p>
               <p className="link font-semibold">Sell on amazon Business</p>
               <p className="link font-semibold">Become an Affilliate</p>
               <p className="link font-semibold">Advertise your products</p>
               <p className="link font-semibold">Host an Amazon Hub</p>
               <p className="link font-semibold">Self-Publish with us</p>
            </div>
            <div className="p-8 space-y-1">
               <h1 className="text-lg text-white font-semibold mb-3">Amazon Payment Products</h1>
               <p className="link font-semibold">Amazon Business Card</p>
               <p className="link font-semibold">Shop with Points</p>
               <p className="link font-semibold">Reload Your Balance</p>
               <p className="link font-semibold">Amazon Currency Converter</p>
            </div>
            <div className="p-8 space-y-1">
               <h1 className="text-lg text-white font-semibold mb-3">Let Us Help You</h1>
               <p className="link font-semibold">Amazon and COVID-19</p>
               <p className="link font-semibold">Your Account</p>
               <p className="link font-semibold">Your Orders</p>
               <p className="link font-semibold">Shipping Rates & Policies</p>
               <p className="link font-semibold">Returns & Replacements</p>
               <p className="link font-semibold">Manage Your Content and Devices</p>
               <p className="link font-semibold">Amazon Assistant</p>
               <p className="link font-semibold">Help</p>
            </div>
         </div>
         <div className="grid grid-cols-2 sm:hidden">
            <div className="m-5 space-y-3">
               <p className="link font-semibold">Amazon.com</p>
               <p className="link font-semibold">Your List</p>
               <p className="link font-semibold">Find a Gift</p>
               <p className="link font-semibold">Browsing History</p>
               <p className="link font-semibold">Returns</p>
            </div>
            <div className="m-5 space-y-3">
               <p className="link font-semibold">Your Orders</p>
               <p className="link font-semibold">Gift Cards and Registry</p>
               <p className="link font-semibold">Customer Service</p>
               <p className="link font-semibold">Your Account</p>
               <p className="link font-semibold">Sell Products on Amazon</p>
            </div>
         </div>
         <div className="mt-4 p-8 text-center flex items-center justify-center border-t border-gray-700 space-x-5">
            <Image
               onClick={() => router.push("/")}
               src="https://links.papareact.com/f90"
               width={80}
               height={30}
               objectFit="contain"
               className="cursor-pointer"
            />
            <div className="font-semibold">
               <h1 className="sm:text-md">
                  <span>Copywrite &copy; {new Date().getFullYear()}</span> | Made with Next.js by Razvan Fratila
               </h1>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
