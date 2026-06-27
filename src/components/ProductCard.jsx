import { motion } from "framer-motion";
import { FaShoppingCart, FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );

  const quantity = cartItem ? cartItem.quantity : 0;

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

        {/* Rating & Quantity */}

        <div className="flex items-center justify-between mt-5">

          <div className="flex items-center gap-1 text-yellow-400">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            <span className="ml-2 text-gray-500 text-sm">
              (5.0)
            </span>

          </div>

          {quantity > 0 && (

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">

              Qty : {quantity}

            </span>

          )}

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

                {/* Bottom Action */}

        <div className="mt-8">

          {quantity === 0 ? (

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300"
            >
              <FaShoppingCart />

              Add to Cart

            </button>

          ) : (

            <div className="flex items-center justify-between bg-blue-700 rounded-xl px-4 py-3">

              <button
                onClick={() => decreaseQuantity(product.id)}
                className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center hover:scale-110 transition"
              >
                <FaMinus />
              </button>

              <span className="text-white text-xl font-bold">
                {quantity}
              </span>

              <button
                onClick={() => increaseQuantity(product.id)}
                className="w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center hover:scale-110 transition"
              >
                <FaPlus />
              </button>

            </div>

          )}

        </div>

      </div>

    </motion.div>
  );
}

export default ProductCard;