// components
import ProductItem from "./ProductItem";

// models
import Product from "@/models/product";

type ProductListProps = {
     products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
     return (
          <ul>
               {products.map((item) => (
                    <li key={item.title}>
                         <ProductItem
                              title={item.title}
                              description={item.description}
                              image={item.image}
                              seller={item.seller}
                              price={item.price}
                         />
                    </li>
               ))}
          </ul>
     );
};
export default ProductList;
