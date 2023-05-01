const DUMMY_ITEMS = [
     {
          title: "Item1",
          description: "This is item 1",
          seller: "Seller 1",
          image: "https://example.com/item1.jpg",
          price: 10.99,
     },
     {
          title: "Item2",
          description: "This is item 2",
          seller: "Seller 2",
          image: "https://example.com/item2.jpg",
          price: 15.99,
     },
     {
          title: "Item3",
          description: "This is item 3",
          seller: "Seller 3",
          image: "https://example.com/item3.jpg",
          price: 12.99,
     },
     {
          title: "Item4",
          description: "This is item 4",
          seller: "Seller 4",
          image: "https://example.com/item4.jpg",
          price: 9.99,
     },
     {
          title: "Item5",
          description: "This is item 5",
          seller: "Seller 5",
          image: "https://example.com/item5.jpg",
          price: 19.99,
     },
     {
          title: "Item6",
          description: "This is item 6",
          seller: "Seller 6",
          image: "https://example.com/item6.jpg",
          price: 7.99,
     },
     {
          title: "Item7",
          description: "This is item 7",
          seller: "Seller 7",
          image: "https://example.com/item7.jpg",
          price: 11.99,
     },
];

// components
import ProductList from "@/components/products/ProductList";

const BuyPage = () => {
     return (
          <>
               <div>BuyPage</div>
               <ProductList products={DUMMY_ITEMS} />
          </>
     );
};
export default BuyPage;
