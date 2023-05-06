// import Head from "next/head";
// import styles from "@/styles/Home.module.css";

// models
import Product from "@/models/product";

// components
import ProductDetails from "@/components/products/ProductDetails";

// mongodb
import { Document } from "mongodb";

// utils
import backend from "../../utils/mongodbConnect";

// props types
type HomeProps = {
     products: Product[];
};

const Home = ({ products }: HomeProps) => {
     return (
          <>
               <h1>Home Page:</h1>
               <ul>
                    <li>hero image</li>
                    <li>description of website</li>
                    <li>
                         <p>Featured products slideshow</p>
                         {/* most recent 10 items via timestamp only */}
                         {products.map((item) => (
                              <ProductDetails key={item.id} product={item} />
                         ))}
                    </li>
                    <li>footer</li>
               </ul>
          </>
     );
};

export const getStaticProps = async () => {
     const result = await backend("FIND_ALL");

     return {
          props: {
               products: result!.map((item: Document) => ({
                    title: item.title,
                    description: item.description,
                    image: item.image,
                    seller: item.seller,
                    price: item.price,
                    timestamp: item.timestamp,
                    id: item._id.toString(),
               })),
          },
          revalidate: 60,
     };
};

export default Home;
