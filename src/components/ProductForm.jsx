import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ProductForm = ({ products, setProducts }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !productPrice) {
      toast.error("Name and price are required");
      return;
    }

    try {
      const res = await axios.post("https://ecom-backend-shopsy.onrender.com/products", {
        name: productName,
        price: parseFloat(productPrice),
        image: productImage || "",
        description: productDescription || "",
      });

      const newProduct = res.data;
      setProducts([...products, newProduct]);

      toast.success("Product added successfully!");

      setProductName("");
      setProductPrice("");
      setProductImage("");
      setProductDescription("");
    } catch (err) {
      console.error("Error adding product:", err);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-slate-800 text-center">
          Admin — Add Product
        </h1>

        {/* Product Name */}
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-zinc-400 outline-none text-slate-700"
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-zinc-400 outline-none text-slate-700"
        />

        {/* Image */}
        <input
          type="text"
          placeholder="Image URL"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-zinc-400 outline-none text-slate-700"
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-zinc-400 outline-none text-slate-700 h-28"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-zinc-800 text-white py-3 rounded-lg hover:bg-zinc-900 transition text-lg font-medium"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
