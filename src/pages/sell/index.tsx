// components
import NewProductForm from "@/components/products/NewProductForm";

// models
import Product from "@/models/product";

// next
import { useRouter } from "next/router";

const SellPage = () => {
     const router = useRouter();

     const handleAddProduct = async (data: Product) => {
          const response = await fetch("/api/new-product", {
               method: "POST",
               body: JSON.stringify(data),
               headers: {
                    "Content-Type": "application/json",
               },
          });
          console.log(response);

          // const result = await response.json();
          // console.log(result);
          router.push("/");
     };

     return (
          <>
               <h1>SellPage</h1>
               <NewProductForm onAddProduct={handleAddProduct} />
          </>
     );
};
export default SellPage;
