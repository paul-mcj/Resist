// models
import Product from "@/models/product";

// components
import ProductList from "@/components/products/ProductList";

// mongodb
import { MongoClient } from "mongodb";

// next
import { GetStaticProps } from "next";

type BuyPageProps = {
     products: Product[];
};

const BuyPage = ({ products }: BuyPageProps) => {
     return (
          <>
               <div>BuyPage</div>
               {/* fixme: the below props need to be fetched from mongodb, or passed from the original ssg made in the home index file get static props!! */}
               {/* <ProductList products={products} /> */}
          </>
     );
};

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//      const productId = params!.productId!.toString();

//      const clientConnection = await MongoClient.connect(process.env.MONGO_URI!);

//      const db = clientConnection.db();

//      const productsCollection = db.collection("products");

//      const products = await productsCollection.find().toArray();

//      const result = products.filter(
//           (item) => item._id.toString() === productId
//      );

//      console.log(result);

//      clientConnection.close();

//      return {
//           props: {
//                product: JSON.parse(JSON.stringify(result)),
//           },
//      };
// };

export default BuyPage;
