
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Cart = ({ CartProduct, setCartProduct, setOrders }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  /* ================= FETCH CART ON REFRESH ================= */
 useEffect(() => {
  if (!token) return;

  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/carts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.cart) {
        setCartProduct(data.cart.products);
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  fetchCart();
}, [token, setCartProduct]);


  /* ================= TOTAL PRICE ================= */
  const totalPrice = () =>
    CartProduct.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );

  /* ================= UPDATE QUANTITY ================= */
  const updateQuantity = async (index, newQuantity) => {
    if (newQuantity < 1) return;

    const cartItem = CartProduct[index];

    try {
      const res = await fetch("http://localhost:3000/carts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: cartItem.product._id,
          quantity: newQuantity,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setCartProduct(data.cart.products);
      }
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const increment = (i) =>
    updateQuantity(i, CartProduct[i].quantity + 1);

  const decrement = (i) =>
    updateQuantity(i, CartProduct[i].quantity - 1);

  /* ================= REMOVE ITEM ================= */
  const handleRemove = async (productId, index) => {
    try {
      const res = await fetch(
        `http://localhost:3000/carts/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        setCartProduct(CartProduct.filter((_, i) => i !== index));
      }
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  /* ================= CHECKOUT ================= */
const handleCheckout = async () => {
  if (!CartProduct.length) {
    alert("Your cart is empty");
    return;
  }

  const orderData = {
    paymentMethod: "COD",
  };

  try {
    const res = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    });

    const data = await res.json();

    if (res.ok) {
      setOrders((prev) => [...prev, data.order]); // safer
      setCartProduct([]);
      alert("Order placed successfully!");
      navigate("/order");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error("Checkout error:", err);
  }
};

     

  if (!CartProduct.length) {
    return (
      <div className="text-center py-20 text-xl">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items */}
        <div className="w-full md:w-2/3 bg-zinc-100 p-5 rounded-xl">
          {CartProduct.map((item, i) => (
            <div
              key={item.product._id}
              className="flex gap-4 items-center bg-white p-4 rounded-xl mb-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-md"
              />

              <div className="flex-1">
                <h2 className="font-semibold">
                  {item.product.name}
                </h2>
                <p className="text-slate-600">
                  {item.product.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => decrement(i)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increment(i)}>+</button>
              </div>

              <p className="font-bold">
                ₹{item.product.price * item.quantity}
              </p>

              <button
                onClick={() =>
                  handleRemove(item.product._id, i)
                }
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-zinc-100 p-5 rounded-xl h-fit">
          <h2 className="text-xl font-bold mb-4 text-center">
            Order Summary
          </h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>₹{totalPrice().toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Discount (20%):</span>
            <span>₹{(totalPrice() * 0.2).toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping (10%):</span>
            <span>₹{(totalPrice() * 0.1).toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span>
              ₹
              {(
                totalPrice() -
                totalPrice() * 0.2 +
                totalPrice() * 0.1
              ).toFixed(2)}
            </span>
          </div>

        <button
  disabled={!CartProduct.length}
  onClick={handleCheckout}
  className={`w-full py-2 rounded ${
    CartProduct.length
      ? "bg-slate-800 text-white"
      : "bg-gray-400 cursor-not-allowed"
  }`}
>
  Checkout
</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
