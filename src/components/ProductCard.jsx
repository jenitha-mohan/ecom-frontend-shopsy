// import { Link } from "react-router";

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-5 w-[300px] hover:shadow-xl hover:scale-[1.03] transition-all">
      
//       {/* Product Image */}
//       <img 
//         src={product.image} 
//         className="h-64 w-full object-cover rounded-xl mb-4" 
//         alt={product.name}
//       />

//       {/* Product Name */}
//       <h2 className="font-semibold text-slate-800 text-lg">
//         {product.name}
//       </h2>

//       {/* Price */}
//       <p className="text-slate-600 text-md font-medium">
//         ₹{product.price}
//       </p>

//       {/* Buttons */}
//       <div className="flex justify-between mt-4">
//         <button
//           className="bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-900 transition"
//           onClick={() => addToCart(product)}
//         >
//           Add
//         </button>

//         <Link
//           to={`/products/${product.id}`}
//           className="bg-zinc-200 text-slate-800 px-4 py-2 rounded-lg border border-gray-300 hover:bg-zinc-300 transition"
//         >
//           View
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import { Link } from "react-router";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-5 w-[300px] 
      shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* 🖼 Product Image */}
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-64 w-full object-cover rounded-xl mb-4"
        />

        {/* Optional Badge */}
        <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
          New
        </span>
      </div>

      {/* 📌 Product Name */}
      <h2 className="font-semibold text-slate-800 text-lg mt-2">
        {product.name}
      </h2>

      {/* 💰 Price */}
      <p className="text-pink-600 text-lg font-bold mt-1">
        ₹{product.price}
      </p>

      {/* 🛒 Buttons */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-pink-600 text-white py-2 rounded-full 
          hover:bg-pink-700 transition"
        >
          Add to Cart
        </button>

        <Link
          to={`/products/${product._id || product.id}`}
          className="flex-1 text-center border border-pink-500 text-pink-600 
          py-2 rounded-full hover:bg-pink-50 transition"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

