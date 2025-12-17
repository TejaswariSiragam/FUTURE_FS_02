import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-red-500">
          Mini E-Commerce
        </h1>
        <ProductList />
        <Cart />
        <Checkout />
      </div>
    </CartProvider>
  );
}

export default App;
