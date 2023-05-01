// models
import Product from "@/models/product";

// next
import Link from "next/link";
import { useRouter } from "next/router";

const ProductItem = (product: Product) => {
     const router = useRouter();

     console.log(router);

     return <Link href={`/buy/${router}`}>See {product.title}</Link>;
};
export default ProductItem;
