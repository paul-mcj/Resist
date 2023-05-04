// models
import Product from "@/models/product";

// next
import Link from "next/link";

const ProductItem = (product: Product) => {
     return <Link href={`/buy/${product.id}`}>See {product.title}</Link>;
};

export default ProductItem;
