import { useParams } from "react-router";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();

  // Wait for products to load
  if (products.length === 0) {
    return (
      <div className="text-center mt-10 text-slate-700 font-semibold">
        Loading...
      </div>
    );
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="text-center mt-10 text-slate-700 font-semibold">
        Product not found!
      </div>
    );

  return (
    <div className="max-w-[450px] mx-auto mt-12 bg-white p-7 rounded-2xl shadow-md border border-gray-200">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl mb-5"
      />

      {/* Name */}
      <h1 className="text-3xl font-bold mb-3 text-slate-800">
        {product.name}
      </h1>

      {/* Description */}
      <p className="text-slate-600 mb-3 leading-relaxed">
        {product.description}
      </p>

      {/* Price */}
      <p className="text-zinc-800 text-2xl font-semibold mb-5">
        ₹{product.price}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-zinc-800 text-white py-3 rounded-lg text-lg hover:bg-zinc-900 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
