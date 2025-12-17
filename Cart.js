import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between">
          <p>{item.name} x {item.qty}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
