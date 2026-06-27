import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar({ openCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Products",
      id: "products",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Categories",
      id: "categories",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="h-[88px] flex items-center justify-between">

          {/* Logo */}

          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={logo}
              alt="Mallika Traders"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Mallika
                <span className="text-orange-500"> Traders</span>
              </h2>

              <p className="text-xs text-gray-500">
                Plumbing Solutions
              </p>
            </div>

          </div>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[16px] font-medium text-gray-700 hover:text-blue-700 transition"
              >
                {item.name}
              </button>
            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-5">

            {/* Cart */}

            <button
  onClick={openCart}
  className="relative text-2xl text-slate-700 hover:text-blue-700 transition duration-300"
>

  <FaShoppingCart />

  {totalItems > 0 && (

    <span className="absolute -top-2 -right-3 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">

      {totalItems}

    </span>

  )}

</button>

            {/* WhatsApp */}

            <a
              href="https://wa.me/917337338803"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-semibold transition duration-300 shadow-md"
            >
              <FaWhatsapp className="text-2xl" />

              WhatsApp
            </a>

          </div>

          {/* Mobile */}

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t">

          {links.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-6 py-4 border-b hover:bg-gray-50"
            >
              {item.name}
            </button>

          ))}

        </div>

      )}

    </header>
  );
}

export default Navbar;