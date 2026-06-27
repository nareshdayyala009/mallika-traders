import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black">
              Mallika
              <span className="text-orange-500"> Traders</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              Your trusted destination for premium plumbing
              materials, sanitary products, pipes, valves and
              bathroom accessories.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 mt-6 text-gray-400">

              <li><a href="#home" className="hover:text-white">Home</a></li>

              <li><a href="#products" className="hover:text-white">Products</a></li>

              <li><a href="#about" className="hover:text-white">About</a></li>

              <li><a href="#categories" className="hover:text-white">Categories</a></li>

              <li><a href="#contact" className="hover:text-white">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 mt-6 text-gray-400">

              <div className="flex gap-3">

                <FaPhoneAlt className="mt-1 text-orange-500"/>

                <span>
                  +91 73373 38803
                </span>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="mt-1 text-orange-500"/>

                <span>
                  beerlasrinivas1@gmail.com
                </span>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-orange-500"/>

                <span>
                  Mallika Traders,
                  Mankamma Thota,
                  Karimnagar,
                  Telangana
                </span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-bold">
              Follow Us
            </h3>

            <div className="flex gap-5 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/917337338803"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-gray-400">

          © {new Date().getFullYear()} Mallika Traders.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;