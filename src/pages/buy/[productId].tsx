// components
import ProductDetails from "@/components/products/ProductDetails";

// models
import Product from "@/models/product";
import { GetStaticPropsContext } from "next";

// uuid
import { v4 as uuidv4 } from "uuid";

// prop types
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

export const getStaticPaths = async () => {
     return {};
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
     const productId = context.params.productId;

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
