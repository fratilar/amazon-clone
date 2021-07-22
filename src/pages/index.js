import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
   return (
      <div className="bg-gray-100">
         <Head>
            <title>Amazon Clone</title>
         </Head>
         <Header />
         <main className="max-w-screen-2xl mx-auto">
            <Banner />
            <ProductFeed products={products} />
         </main>
         <Footer />
      </div>
   );
}

export async function getServerSideProps(context) {
   const getProducts = await fetch("https://fakestoreapi.com/products");
   const products = await getProducts.json();

   return {
      props: {
         products,
      },
   };
}
