// models
import Product from "@/models/product";

// prop types
type ProductDetailsProps = {
     product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
     // console.log(product);
     return <div>{product.description}</div>;
};
export default ProductDetails;
