import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Categories from "./components/Categories";
import WhyChoose from "./components/WhyChoose";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
import AddressModal from "./components/AddressModal";
import { useCart } from "./context/CartContext";

function App() {

  const { cartItems, totalItems, totalPrice, clearCart } = useCart();

  const [cartOpen, setCartOpen] = useState(false);

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [addressOpen, setAddressOpen] = useState(false);

  const [deliveryType, setDeliveryType] = useState("");

  return (
    <>

      <Navbar
        openCart={() => setCartOpen(true)}
      />

      <Hero />

      <FeaturedProducts />

      <About />

      <Categories />

      <WhyChoose />

      <ContactForm />

      <Footer />

      {/* Cart */}

      <CartSidebar

        isOpen={cartOpen}

        onClose={() => setCartOpen(false)}

        onCheckout={() => {

          setCartOpen(false);

          setCheckoutOpen(true);

        }}

      />

      {/* Checkout */}

      <CheckoutModal

        isOpen={checkoutOpen}

        onClose={() => setCheckoutOpen(false)}

        onProceed={(type) => {

          setDeliveryType(type);

          setCheckoutOpen(false);

          if (type === "delivery") {

  setAddressOpen(true);

} else {

  let message = `🛒 *NEW ORDER*\n\n`;

  message += `🏪 *Store Pickup*\n\n`;

  message += `🛍 *Products*\n\n`;

  cartItems.forEach((item) => {

    const price = Number(item.price.replace(/[₹,]/g, ""));

    message += `${item.name}\n`;
    message += `₹${price} × ${item.quantity} = ₹${price * item.quantity}\n\n`;

  });

  message += `━━━━━━━━━━━━━━\n\n`;

  message += `Total Items : ${totalItems}\n`;
  message += `Grand Total : ₹${totalPrice}\n\n`;

  message += `I will collect the order from the shop.\n\n`;

  message += `Please confirm my order.\n\n`;

  message += `Thank You.`;

  window.open(
    `https://wa.me/917337338803?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  clearCart();

}

        }}

      />

      {/* Address */}

      <AddressModal

        isOpen={addressOpen}

        onClose={() => setAddressOpen(false)}

        onSubmit={(data) => {

  let message = `🛒 *NEW ORDER*\n\n`;

  message += `👤 *Customer Details*\n`;
  message += `Name: ${data.name}\n`;
  message += `Phone: ${data.phone}\n`;
  message += `Delivery: Home Delivery\n\n`;

  message += `📍 *Address*\n`;
  message += `House: ${data.house}\n`;
  message += `Street: ${data.street}\n`;
  message += `Area: ${data.area}\n`;
  message += `City: ${data.city}\n`;
  message += `State: ${data.state}\n`;
  message += `Pincode: ${data.pincode}\n`;

  if (data.landmark) {
    message += `Landmark: ${data.landmark}\n`;
  }

  message += `\n━━━━━━━━━━━━━━\n\n`;

  message += `🛍 *Products*\n\n`;

  cartItems.forEach((item) => {

    const price = Number(item.price.replace(/[₹,]/g, ""));

    message += `${item.name}\n`;
    message += `₹${price} × ${item.quantity} = ₹${price * item.quantity}\n\n`;

  });

  message += `━━━━━━━━━━━━━━\n\n`;

  message += `Total Items : ${totalItems}\n`;
  message += `Grand Total : ₹${totalPrice}\n\n`;

  message += `Please confirm my order.\n\n`;
  message += `Thank You.`;

  window.open(
    `https://wa.me/917337338803?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  clearCart();

  setAddressOpen(false);

}}

      />

    </>

  );
}

export default App;