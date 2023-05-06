// models
import Product from "@/models/product";

// prop types
type ProductDetailsProps = {
     product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
     // console.log(product);
     return <div>her {product.description}</div>;
};
export default ProductDetails;
