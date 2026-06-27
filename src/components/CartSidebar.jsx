import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function CartSidebar({
  isOpen,
  onClose,
  onCheckout,
}) {
  const {
    cartItems,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>

      {/* Background */}

      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">

          <div>

            <h2 className="text-2xl font-bold">
              Shopping Cart
            </h2>

            <p className="text-gray-500 mt-1">
              {totalItems} Items
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* Products */}

        <div className="flex-1 overflow-y-auto p-6">

          {cartItems.length === 0 ? (

            <div className="h-full flex items-center justify-center text-gray-500">

              Your cart is empty

            </div>

          ) : (

            <div className="space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="border rounded-2xl p-4"
                >

                  <div className="flex gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain bg-slate-100 rounded-xl"
                    />

                    <div className="flex-1">

                      <h3 className="font-bold text-lg">
                        {item.name}
                      </h3>

                      <p className="text-blue-700 font-bold mt-1">
                        {item.price}
                      </p>

                      {/* Quantity */}

                      <div className="flex items-center justify-between mt-4">

                        <div className="flex items-center gap-3">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                          >
                            <FaMinus size={12} />
                          </button>

                          <span className="font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center"
                          >
                            <FaPlus size={12} />
                          </button>

                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="text-red-600"
                        >
                          <FaTrash />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>
                {/* Bottom */}

        {cartItems.length > 0 && (

          <div className="border-t p-6 bg-white">

            {/* Total */}

            <div className="flex items-center justify-between mb-6">

              <span className="text-xl font-semibold">
                Total
              </span>

              <span className="text-3xl font-black text-blue-700">
                ₹{totalPrice.toLocaleString()}
              </span>

            </div>

            {/* Buttons */}

            <button
              onClick={onCheckout}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition duration-300"
            >
              Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full mt-3 border border-gray-300 hover:bg-gray-100 py-4 rounded-xl font-semibold transition duration-300"
            >
              Continue Shopping
            </button>

          </div>

        )}

      </div>

    </>
  );
}

export default CartSidebar;