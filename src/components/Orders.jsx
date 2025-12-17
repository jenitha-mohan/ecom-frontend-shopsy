import { useEffect } from "react";

const Orders = ({ orders, setOrders }) => {
  const token = localStorage.getItem("token");

  /* ================= FETCH ORDERS ================= */
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:3000/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setOrders(data.orders); // ✅ FIXED
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, [setOrders, token]);

  const statusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-700 bg-yellow-200";
      case "On the Way":
        return "text-blue-700 bg-blue-200";
      case "Delivered":
        return "text-green-700 bg-green-200";
      default:
        return "text-gray-700 bg-gray-200";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center">
        Your Orders
      </h1>

      {orders.length === 0 ? (
        <div className="border rounded-xl p-8 text-center text-lg">
          No orders yet
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order) => (
            <div
              key={order._id} // ✅ FIXED
              className="border p-6 rounded-xl bg-white shadow"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Order ID: <b>{order._id}</b>
                  </p>
                  <p className="text-sm text-gray-600">
                    Date:{" "}
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm">
                    Payment: <b>{order.paymentMethod}</b>
                  </p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* ITEMS */}
              <div className="space-y-4">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border p-4 rounded-lg bg-zinc-50"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <div className="font-bold">
                      ₹{item.total}
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="flex justify-between mt-4 border-t pt-3 font-bold text-lg">
                <span>Total Amount</span>
                <span>₹{order.totalAmount}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
