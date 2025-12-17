import ProductCard from "./ProductCard.jsx";

const ProductList = ({ products=[], addToCart }) => {
  return (
    <div className="mx-auto bg-zinc-100 p-6 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-5 text-slate-800 text-center tracking-wide">
        Product List
      </h1>
     


      <div className="flex gap-6 flex-wrap justify-center">
        {products.length === 0 ? (
          <p className="text-gray-500">No products available</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id || product.id}
              product={product}
              addToCart={addToCart}
            />
          )))}
      </div>
    </div>
  );
};

export default ProductList;
