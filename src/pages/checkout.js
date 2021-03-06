import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import Footer from "../components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
   const items = useSelector(selectItems);
   const total = useSelector(selectTotal);
   const [session] = useSession();

   const createCheckoutSession = async () => {
      const stripe = await stripePromise;

      // Call the backend to create a checkout session
      const checkoutSession = await axios.post("/api/create-checkout-session", {
         items: items,
         email: session.user.email,
      });

      // Redirect user to Stripe Checkout
      const result = await stripe.redirectToCheckout({
         sessionId: checkoutSession.data.id,
      });

      if (result.error) {
         alert(result.error.message);
      }
   };

   return (
      <div className="bg-gray-100">
         <Header />

         <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* Left section */}
            <div className="flex-grow shadow-sm m-5">
               <Image src="https://links.papareact.com/ikj" width={1400} height={250} objectFit="cover" />

               <div className="flex flex-col p-5 bg-white space-y-5">
                  <h1 className="text-3xl pb-4 border-b">
                     {items.length === 0 ? "Your Basket is Empty" : "Shopping Basket"}
                  </h1>

                  {items.map((item, index) => {
                     return <CheckoutProduct key={index} {...item} />;
                  })}
               </div>
            </div>

            {/* Right section */}
            <div className="bg-white p-10 flex flex-col shadow-md m-3">
               {items.length > 0 && (
                  <>
                     <h2 className="whitespace-nowrap">
                        Subtotal ({items.length} items):
                        <span className="font-bold ml-2">
                           <Currency quantity={total} currency="EUR" />
                        </span>
                     </h2>

                     <button
                        role="link"
                        onClick={createCheckoutSession}
                        disabled={!session}
                        className={`button mt-2 px-2 ${
                           !session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                        }`}
                     >
                        {!session ? "SignIn to proceed" : "Proceed to checkout"}
                     </button>
                  </>
               )}
            </div>
         </main>

         <Footer />
      </div>
   );
}

export default Checkout;
