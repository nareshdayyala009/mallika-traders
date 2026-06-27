import {
  FaAward,
  FaTruck,
  FaWallet,
  FaShieldAlt,
  FaHeadset,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    description:
      "We supply genuine plumbing materials from trusted manufacturers.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    description:
      "Quick delivery service across Hyderabad for residential and commercial projects.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <FaWallet />,
    title: "Affordable Pricing",
    description:
      "Best prices without compromising product quality.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Supplier",
    description:
      "Years of experience serving thousands of happy customers.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaTools />,
    title: "Wide Product Range",
    description:
      "PVC, CPVC, HDPE, Water Tanks, Valves and Accessories.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    description:
      "Friendly assistance to help you choose the right products.",
    color: "bg-cyan-100 text-cyan-700",
  },
];

function WhyChoose() {
  return (
    <section
      id="why"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">
            Why Customers Trust Mallika Traders
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Premium quality products, competitive prices and reliable service for every plumbing requirement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8"
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;