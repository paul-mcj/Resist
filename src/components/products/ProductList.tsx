// components
import ProductItem from "./ProductItem";

// models
import Product from "@/models/product";

// prop types
type ProductListProps = {
     products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
     return (
          <ul>
               {products.map((item) => (
                    <li key={item.id}>
                         <ProductItem
                              id={item.id}
                              title={item.title}
                              description={item.description}
                              image={item.image}
                              seller={item.seller}
                              price={item.price}
                              timestamp={item.timestamp}
                         />
                    </li>
               ))}
          </ul>
     );
};
export default ProductList;
