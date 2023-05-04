// components
import ProductDetails from "@/components/products/ProductDetails";

// models
import Product from "@/models/product";
import { GetStaticPaths, GetStaticProps } from "next";

// mongodb
import { MongoClient } from "mongodb";

// uuid
import { v4 as uuidv4 } from "uuid";

type ProductIdProps = {
     product: Product;
};

const ProductId = ({ product }: ProductIdProps) => {
     return (
          <>
               <ProductDetails product={product} />
          </>
     );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
     //note: fetch array and get all ids by mapping, then generate params below
     // fetch data
     const clientConnection = await MongoClient.connect(process.env.MONGO_URI!);

     const db = clientConnection.db();

     const productsCollection = db.collection("products");

     const products = await productsCollection.find().toArray();

     clientConnection.close();

     const getParamIds = products.map((item) => {
          return {
               params: {
                    productId: item._id.toString(),
               },
          };
     });

     console.log(getParamIds);

     return {
          fallback: false,
          paths: getParamIds,
     };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
     const productId = params!.productId!.toString();

     const clientConnection = await MongoClient.connect(process.env.MONGO_URI!);

     const db = clientConnection.db();

     const productsCollection = db.collection("products");

     const products = await productsCollection.find().toArray();

     const result = products.filter(
          (item) => item._id.toString() === productId
     );

     console.log(result);

     clientConnection.close();

     return {
          props: {
               product: JSON.parse(JSON.stringify(result)),
          },
     };
};

export default ProductId;
