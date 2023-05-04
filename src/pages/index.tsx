// import Head from "next/head";
// import styles from "@/styles/Home.module.css";

// models
import Product from "@/models/product";

// components
import ProductDetails from "@/components/products/ProductDetails";

// uuid
import { v4 as uuidv4 } from "uuid";

// mongodb
import { MongoClient } from "mongodb";

// // dotenv
// import dotenv from "dotenv";
// dotenv.config();

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
     // fetch data
     const clientConnection = await MongoClient.connect(process.env.MONGO_URI!);

     const db = clientConnection.db();

     const productsCollection = db.collection("products");

     const products = await productsCollection.find().toArray();

     clientConnection.close();

     return {
          props: {
               products: products.map((item) => ({
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
