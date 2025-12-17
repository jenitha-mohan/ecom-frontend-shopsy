import { Link } from "react-router";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-5 w-[300px] hover:shadow-xl hover:scale-[1.03] transition-all">
      
      {/* Product Image */}
      <img 
        src={product.image} 
        className="h-64 w-full object-cover rounded-xl mb-4" 
        alt={product.name}
      />

      {/* Product Name */}
      <h2 className="font-semibold text-slate-800 text-lg">
        {product.name}
      </h2>

      {/* Price */}
      <p className="text-slate-600 text-md font-medium">
        ₹{product.price}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-900 transition"
          onClick={() => addToCart(product)}
        >
          Add
        </button>

        <Link
          to={`/products/${product.id}`}
          className="bg-zinc-200 text-slate-800 px-4 py-2 rounded-lg border border-gray-300 hover:bg-zinc-300 transition"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
