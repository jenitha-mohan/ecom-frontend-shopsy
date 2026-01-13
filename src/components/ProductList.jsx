// import ProductCard from "./ProductCard.jsx";

// const ProductList = ({ products=[], addToCart }) => {
//   return (
//     <div className="mx-auto bg-zinc-100 p-6 rounded-2xl shadow-md">
//       <h1 className="text-3xl font-bold mb-5 text-slate-800 text-center tracking-wide">
//         Product List
//       </h1>
     


//       <div className="flex gap-6 flex-wrap justify-center">
//         {products.length === 0 ? (
//           <p className="text-gray-500">No products available</p>
//         ) : (
//           products.map((product) => (
//             <ProductCard
//               key={product._id || product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           )))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products = [], addToCart }) => {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-4xl font-extrabold mb-10 text-center text-pink-700 tracking-wide">
          Our Products
        </h1>

        {/* Products Grid */}
        <div className="flex gap-8 flex-wrap justify-center">
          {products.length === 0 ? (
            <p className="text-slate-500 text-lg">
              No products available
            </p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product._id || product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductList;

