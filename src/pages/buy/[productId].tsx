// components
import ProductDetails from "@/components/products/ProductDetails";

// models
import Product from "@/models/product";
import { GetStaticPaths, GetStaticProps } from "next";

// mongodb
import { Document } from "mongodb";

// utils
import backend from "../../../utils/mongodbConnect";

type ProductIdProps = {
     product: Product;
};

const ProductId = ({ product }: ProductIdProps) => {
     return <ProductDetails product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
     const result = await backend("GENERATE_PATHS");

     return {
          fallback: false,
          paths: result!.map((item: Document) => ({
               params: { productId: item._id.toString() },
          })),
     };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
     const productId = params!.productId!.toString();

     const result = await backend("FIND_ONE", productId);

     return {
          props: {
               product: JSON.parse(JSON.stringify(result)),
          },
     };
};

export default ProductId;
