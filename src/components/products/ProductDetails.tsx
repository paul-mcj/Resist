// models
import Product from "@/models/product";

// prop types
type ProductDetailsProps = {
     product: Product;
};

import { useEffect } from "react";

const ProductDetails = ({ product }: ProductDetailsProps) => {
     useEffect(() => {
          console.log("useFeect");
          console.log(product);
     }, []);
     // console.log(product);
     return <div>her {product.description}</div>;
};
export default ProductDetails;
