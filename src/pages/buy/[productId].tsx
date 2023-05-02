// components
import ProductDetails from "@/components/products/ProductDetails";

// models
import Product from "@/models/product";
import { GetStaticPaths, GetStaticProps } from "next";

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
     return {
          fallback: false,
          paths: [
               {
                    params: {
                         productId: "de0654d8-b48d-4b33-bc6c-9c585730cc85",
                    },
               },
          ],
     };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
     const productId = params!.productId;

     return {
          props: {
               product: {
                    title: "Item 99999",
                    description: "This is item 99999",
                    seller: "Seller 99999",
                    image: "https://example.com/item99999.jpg",
                    price: 99999.99,
                    timestamp: Date.now(),
                    id: productId,
               },
          },
     };
};

export default ProductId;
