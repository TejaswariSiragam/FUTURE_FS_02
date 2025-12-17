export default function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        required
        placeholder="Name"
        className="border p-2 block mb-2"
      />
      <input
        required
        placeholder="Address"
        className="border p-2 block mb-2"
      />
      <button className="bg-green-500 text-white px-4 py-2">
        Checkout
      </button>
    </form>
  );
}
