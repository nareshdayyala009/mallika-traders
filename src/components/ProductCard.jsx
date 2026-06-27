import { motion } from "framer-motion";
import { FaShoppingCart, FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
    >
      {/* Product Image */}

      <div className="bg-slate-100 h-72 flex items-center justify-center p-8 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-56 object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-7 flex flex-col flex-1">

        <span className="text-sm uppercase tracking-wider font-semibold text-orange-500">
          {product.category}
        </span>

        <h3 className="text-2xl font-bold mt-3 text-slate-900">
          {product.name}
        </h3>

        <p className="text-gray-600 leading-7 mt-4 flex-1">
          {product.description}
        </p>

        {/* Rating */}

        <div className="flex items-center gap-1 text-yellow-400 mt-5">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span className="ml-2 text-gray-500 text-sm">
            (5.0)
          </span>

        </div>

        {/* Price */}

        <div className="flex items-center justify-between mt-6">

          <h2 className="text-3xl font-black text-blue-700">
            {product.price}
          </h2>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            In Stock
          </span>

        </div>

        {/* Add To Cart */}

        <button
          className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300"
        >
          <FaShoppingCart />

          Add to Cart

        </button>

      </div>
    </motion.div>
  );
}

export default ProductCard;