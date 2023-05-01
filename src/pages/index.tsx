// import Head from "next/head";
// import styles from "@/styles/Home.module.css";

// models
import Product from "@/models/product";

// components
import ProductDetails from "@/components/products/ProductDetails";

// uuid
import { v4 as uuidv4 } from "uuid";

const DUMMY_ITEMS = [
     {
          title: "Item 1",
          description: "This is item 1",
          seller: "Seller 1",
          image: "https://example.com/item1.jpg",
          price: 10.99,
          timestamp: Date.now(),
          id: uuidv4(),
     },
     {
          title: "Item 2",
          description: "This is item 2",
          seller: "Seller 2",
          image: "https://example.com/item2.jpg",
          price: 15.99,
          timestamp: Date.now(),
          id: uuidv4(),
     },
     {
          title: "Item 3",
          description: "This is item 3",
          seller: "Seller 3",
          image: "https://example.com/item3.jpg",
          price: 12.99,
          timestamp: Date.now(),
          id: uuidv4(),
     },
     {
          title: "Item 4",
          description: "This is item 4",
          seller: "Seller 4",
          image: "https://example.com/item4.jpg",
          price: 9.99,
          timestamp: Date.now(),
          id: uuidv4(),
     },
     {
          title: "Item 5",
          description: "This is item 5",
          seller: "Seller 5",
          image: "https://example.com/item5.jpg",
          price: 19.99,
          timestamp: Date.now(),
          id: uuidv4(),
     },
     {
          title: "Item 6",
          description: "This is item 6",
          seller: "Seller 6",
          image: "https://example.com/item6.jpg",
          price: 7.99,
          timestamp: Date.now(),
          id: uuidv4(),
     },
     {
          title: "Item 7",
          description: "This is item 7",
          seller: "Seller 7",
          image: "https://example.com/item7.jpg",
          price: 11.99,
          timestamp: Date.now(),
          id: uuidv4(),
     },
];

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
     return {
          props: {
               products: DUMMY_ITEMS,
          },
          revalidate: 60,
     };
};

export default Home;
