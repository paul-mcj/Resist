// components
import NewProductForm from "@/components/products/NewProductForm";

// models
import Product from "@/models/product";

// next
import { useRouter } from "next/router";
import Head from "next/head";

// models
import Request from "@/models/request";

const SellPage = () => {
     const router = useRouter();

     const handleAddProduct = async (data: Product) => {
          // To ensure that the URL provided by the user points to an image, you can check the file type of the image by inspecting the response headers when making a request to the URL. The content-type of the response should be an image type such as image/jpeg, image/png, or image/gif.

          const allowedTypes: string[] = [
               "image/png",
               "image/jpg",
               "image/jpeg",
               "image/PNG",
               "image/JPG",
               "image/JPEG",
          ];

          // const contentType = require("content-type");

          // const validateImage = (req: Request) => {
          //      const type = contentType.parse(req.headers["content-type"]).type;
          //      if (!allowedTypes.includes(type)) {
          //           // fixme: toastify that the image url is not valid!
          //           console.log("error: " + req);
          //      } else {
          //           console.log("success: " + req);
          //      }
          // };

          const response = await fetch("/api/new-product", {
               method: "POST",
               body: JSON.stringify(data),
               headers: {
                    "Content-Type": "application/json",
               },
          });
          // validateImage(response);
          // console.log(response);

          // fixme: go to the page for the newly added product, ex. /buy/53632r992js72g4h
          router.push("/buy");
     };

     return (
          <>
               <Head>
                    <link
                         rel="icon"
                         href="/favicon-sell.png"
                         type="image/png"
                    />
                    <title>Resist® | Sell</title>
                    <meta
                         name="description"
                         content="Sell your outdoor equipment"
                    />
               </Head>
               <h1>SellPage</h1>
               {/*  fixme: react toastify!!!!!!! */}
               <NewProductForm onAddProduct={handleAddProduct} />
          </>
     );
};
export default SellPage;
