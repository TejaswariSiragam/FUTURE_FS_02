import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
];

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Products</h2>

      {products.map((product) => (
        <div key={product.id} className="border p-2 my-2">
          <p>{product.name}</p>
          <p>₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 mt-1"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}   // 👈 FUNCTION ENDS HERE

export default ProductList;   // 👈 EXPORT OUTSIDE FUNCTION
