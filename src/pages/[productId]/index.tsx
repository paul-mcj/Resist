// next
import { useRouter } from "next/router";

const ProductDetails = () => {
     const router = useRouter();

     console.log(router);

     return <div>product details page</div>;
};
export default ProductDetails;
