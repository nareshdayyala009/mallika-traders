import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-50 pt-28 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-5 py-2 rounded-full">
              Trusted Plumbing Supplier
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Industrial Pipe
              <br />
              Network
              <span className="text-orange-500">
                {" "}
                Solutions
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl">
              Mallika Traders supplies premium PVC Pipes,
              CPVC Pipes, Water Tanks, Valves and Plumbing
              Accessories for residential, commercial and
              industrial projects at affordable prices.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#products"
                className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                View Products
                <FaArrowRight />
              </a>

              <a
                href="https://wa.me/917337338803"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-12">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>100% Genuine Products</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Fast Delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Affordable Prices</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Trusted Supplier</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="absolute inset-0 bg-blue-100 rounded-[40px] blur-3xl opacity-50"></div>

            <img
              src={hero}
              alt="Mallika Traders"
              className="relative w-full max-w-xl mx-auto drop-shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;