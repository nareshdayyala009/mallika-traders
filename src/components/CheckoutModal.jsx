import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function CheckoutModal({
  isOpen,
  onClose,
  onProceed,
}) {
  const [deliveryType, setDeliveryType] = useState("delivery");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">

      <div className="bg-white rounded-3xl w-full max-w-md p-8 relative">

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-center">
          Checkout
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Select Delivery Method
        </p>

        {/* Delivery */}

        <div className="mt-10 space-y-5">

          <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

            <input
              type="radio"
              checked={deliveryType === "delivery"}
              onChange={() =>
                setDeliveryType("delivery")
              }
            />

            <span className="font-semibold">
              Home Delivery
            </span>

          </label>

          <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

            <input
              type="radio"
              checked={deliveryType === "pickup"}
              onChange={() =>
                setDeliveryType("pickup")
              }
            />

            <span className="font-semibold">
              Store Pickup
            </span>

          </label>

        </div>

        <button
          onClick={() =>
            onProceed(deliveryType)
          }
          className="w-full mt-10 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold"
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default CheckoutModal;