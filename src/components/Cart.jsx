
// import { useEffect } from "react";
// import { useNavigate } from "react-router";

// const Cart = ({ CartProduct, setCartProduct, setOrders }) => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   /* ================= FETCH CART ON REFRESH ================= */
//  useEffect(() => {
//   if (!token) return;

//   const fetchCart = async () => {
//     try {
//       const res = await fetch("https://ecom-backend-shopsy.onrender.com/carts", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();

//       if (res.ok && data.cart) {
//         setCartProduct(data.cart.products);
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//     }
//   };

//   fetchCart();
// }, [token, setCartProduct]);


//   /* ================= TOTAL PRICE ================= */
//   const totalPrice = () =>
//     CartProduct.reduce(
//       (total, item) =>
//         total + item.product.price * item.quantity,
//       0
//     );

//   /* ================= UPDATE QUANTITY ================= */
//   const updateQuantity = async (index, newQuantity) => {
//     if (newQuantity < 1) return;

//     const cartItem = CartProduct[index];

//     try {
//       const res = await fetch("https://ecom-backend-shopsy.onrender.com/carts", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: cartItem.product._id,
//           quantity: newQuantity,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setCartProduct(data.cart.products);
//       }
//     } catch (err) {
//       console.error("Error updating quantity:", err);
//     }
//   };

//   const increment = (i) =>
//     updateQuantity(i, CartProduct[i].quantity + 1);

//   const decrement = (i) =>
//     updateQuantity(i, CartProduct[i].quantity - 1);

//   /* ================= REMOVE ITEM ================= */
//   const handleRemove = async (productId, index) => {
//     try {
//       const res = await fetch(
//         `https://ecom-backend-shopsy.onrender.com/carts/${productId}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (res.ok) {
//         setCartProduct(CartProduct.filter((_, i) => i !== index));
//       }
//     } catch (err) {
//       console.error("Error removing item:", err);
//     }
//   };

//   /* ================= CHECKOUT ================= */

//   if (!token) {
//   alert("Please login first");
//   navigate("/login");
//   return;
// }
// const handleCheckout = async () => {
//   if (!CartProduct.length) {
//     alert("Your cart is empty");
//     return;
//   }

//   const orderData = {
//     paymentMethod: "COD",
//   };

//   try {
//     const res = await fetch("https://ecom-backend-shopsy.onrender.com/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(orderData),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       setOrders((prev) => [...prev, data.order]); // safer
//       setCartProduct([]);
//       alert("Order placed successfully!");
//       navigate("/order");
//     } else {
//       alert(data.message);
//     }
//   } catch (err) {
//     console.error("Checkout error:", err);
//   }
// };

     

//   if (!CartProduct.length) {
//     return (
//       <div className="text-center py-20 text-xl">
//         Your cart is empty
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Cart Items */}
//         <div className="w-full md:w-2/3 bg-zinc-100 p-5 rounded-xl">
//           {CartProduct.map((item, i) => (
//             <div
//               key={item.product._id}
//               className="flex gap-4 items-center bg-white p-4 rounded-xl mb-4"
//             >
//               <img
//                 src={item.product.image}
//                 alt={item.product.name}
//                 className="w-24 h-24 object-cover rounded-md"
//               />

//               <div className="flex-1">
//                 <h2 className="font-semibold">
//                   {item.product.name}
//                 </h2>
//                 <p className="text-slate-600">
//                   {item.product.description}
//                 </p>
//               </div>

//               <div className="flex items-center gap-2">
//                 <button onClick={() => decrement(i)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => increment(i)}>+</button>
//               </div>

//               <p className="font-bold">
//                 ₹{item.product.price * item.quantity}
//               </p>

//               <button
//                 onClick={() =>
//                   handleRemove(item.product._id, i)
//                 }
//                 className="bg-red-500 px-3 py-1 rounded text-white"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Order Summary */}
//         <div className="w-full md:w-1/3 bg-zinc-100 p-5 rounded-xl h-fit">
//           <h2 className="text-xl font-bold mb-4 text-center">
//             Order Summary
//           </h2>

//           <div className="flex justify-between mb-2">
//             <span>Subtotal:</span>
//             <span>₹{totalPrice().toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between mb-2">
//             <span>Discount (20%):</span>
//             <span>₹{(totalPrice() * 0.2).toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between mb-2">
//             <span>Shipping (10%):</span>
//             <span>₹{(totalPrice() * 0.1).toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between font-bold text-lg mb-4">
//             <span>Total:</span>
//             <span>
//               ₹
//               {(
//                 totalPrice() -
//                 totalPrice() * 0.2 +
//                 totalPrice() * 0.1
//               ).toFixed(2)}
//             </span>
//           </div>

//         <button
//   disabled={!CartProduct.length}
//   onClick={handleCheckout}
//   className={`w-full py-2 rounded ${
//     CartProduct.length
//       ? "bg-slate-800 text-white"
//       : "bg-gray-400 cursor-not-allowed"
//   }`}
// >
//   Checkout
// </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


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
        const res = await fetch(
          "https://ecom-backend-shopsy.onrender.com/carts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

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
      (total, item) => total + item.product.price * item.quantity,
      0
    );

  /* ================= UPDATE QUANTITY ================= */
  const updateQuantity = async (index, newQuantity) => {
    if (newQuantity < 1) return;

    const cartItem = CartProduct[index];

    try {
      const res = await fetch(
        "https://ecom-backend-shopsy.onrender.com/carts",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId: cartItem.product._id,
            quantity: newQuantity,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setCartProduct(data.cart.products);
      }
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const increment = (i) => updateQuantity(i, CartProduct[i].quantity + 1);
  const decrement = (i) => updateQuantity(i, CartProduct[i].quantity - 1);

  /* ================= REMOVE ITEM ================= */
  const handleRemove = async (productId, index) => {
    try {
      const res = await fetch(
        `https://ecom-backend-shopsy.onrender.com/carts/${productId}`,
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
  if (!token) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  const handleCheckout = async () => {
    if (!CartProduct.length) return;

    try {
      const res = await fetch(
        "https://ecom-backend-shopsy.onrender.com/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ paymentMethod: "COD" }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setOrders((prev) => [...prev, data.order]);
        setCartProduct([]);
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
      <div className="min-h-screen bg-pink-50 flex items-center justify-center">
        <p className="text-xl text-slate-600">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-pink-700 mb-10">
          Your Cart
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 🛍 Cart Items */}
          <div className="w-full md:w-2/3 bg-white rounded-2xl shadow p-6">
            {CartProduct.map((item, i) => (
              <div
                key={item.product._id}
                className="flex gap-4 items-center border-b border-pink-100 pb-4 mb-4 last:border-none"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-slate-800">
                    {item.product.name}
                  </h2>
                  <p className="text-slate-500 text-sm">
                    {item.product.description}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrement(i)}
                    className="px-3 py-1 rounded-full bg-pink-100 text-pink-600"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(i)}
                    className="px-3 py-1 rounded-full bg-pink-100 text-pink-600"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold text-pink-600 w-20 text-right">
                  ₹{item.product.price * item.quantity}
                </p>

                <button
                  onClick={() => handleRemove(item.product._id, i)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* 🧾 Order Summary */}
          <div className="w-full md:w-1/3 bg-white rounded-2xl shadow p-6 h-fit">
            <h2 className="text-xl font-bold text-center text-slate-800 mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-slate-600">
              <span>Subtotal</span>
              <span>₹{totalPrice().toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-3 text-slate-600">
              <span>Discount (20%)</span>
              <span>- ₹{(totalPrice() * 0.2).toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-slate-600">
              <span>Shipping (10%)</span>
              <span>₹{(totalPrice() * 0.1).toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span className="text-pink-600">
                ₹
                {(
                  totalPrice() -
                  totalPrice() * 0.2 +
                  totalPrice() * 0.1
                ).toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3 rounded-full bg-pink-600 text-white 
              hover:bg-pink-700 transition font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
