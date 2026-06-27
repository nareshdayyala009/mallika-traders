import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function AddressModal({
  isOpen,
  onClose,
  onSubmit,
}) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    house: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[110]">

      <div className="bg-white w-full max-w-xl rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-xl"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-center">
          Delivery Address
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Please enter your delivery details.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <input
            required
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            required
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            required
            name="house"
            placeholder="House / Flat No"
            value={formData.house}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            required
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            required
            name="area"
            placeholder="Area / Locality"
            value={formData.area}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            required
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            required
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            required
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            name="landmark"
            placeholder="Landmark (Optional)"
            value={formData.landmark}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold"
          >
            Proceed to WhatsApp
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddressModal;