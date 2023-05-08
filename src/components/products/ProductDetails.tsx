// models
import Product from "@/models/product";

// next
import Head from "next/head";
import Image from "next/image";

// prop types
type ProductDetailsProps = {
     product: Product;
     isHomePage?: boolean;
};

const ProductDetails = ({ product, isHomePage }: ProductDetailsProps) => {
     console.log(product.title);
     return (
          <>
               {!isHomePage && (
                    <Head>
                         <link
                              rel="icon"
                              href="/favicon-buy.png"
                              type="image/png"
                         />
                         <title>Resist® | Buy | {product.title}</title>
                         <meta
                              name="description"
                              content={product.description}
                         />
                    </Head>
               )}
               <div>{product.description}</div>
               <Image
                    src={product.image}
                    alt={product.description}
                    width={500}
                    height={500}
               />
          </>
     );
};
export default ProductDetails;
