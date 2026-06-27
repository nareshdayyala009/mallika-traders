import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaBoxes,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
              About Us
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Mallika Traders
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mallika Traders is a trusted supplier of premium plumbing
              materials, sanitary products, water tanks, valves and
              industrial pipe solutions. We are committed to providing
              genuine products, competitive prices and excellent customer
              service.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                Genuine Products
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                Trusted Brands
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                Affordable Pricing
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                Customer Support
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <FaAward className="mx-auto text-5xl text-blue-700" />
              <h3 className="mt-5 text-4xl font-black">10+</h3>
              <p className="mt-2 text-gray-500">Years Experience</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <FaBoxes className="mx-auto text-5xl text-orange-500" />
              <h3 className="mt-5 text-4xl font-black">500+</h3>
              <p className="mt-2 text-gray-500">Products</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <FaUsers className="mx-auto text-5xl text-green-600" />
              <h3 className="mt-5 text-4xl font-black">1000+</h3>
              <p className="mt-2 text-gray-500">Happy Customers</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <FaCheckCircle className="mx-auto text-5xl text-purple-600" />
              <h3 className="mt-5 text-4xl font-black">100%</h3>
              <p className="mt-2 text-gray-500">Quality Assured</p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;