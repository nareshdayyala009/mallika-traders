import { motion } from "framer-motion";
import {
  FaWater,
  FaTint,
  FaTools,
  FaWarehouse,
  FaShower,
  FaFaucet,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaWater />,
    title: "PVC Pipes",
    desc: "Premium quality PVC pipes for residential and commercial plumbing.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: <FaTint />,
    title: "CPVC Pipes",
    desc: "Reliable hot and cold water plumbing solutions.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <FaTools />,
    title: "Pipe Fittings",
    desc: "Elbows, tees, sockets, reducers and more.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaWarehouse />,
    title: "Water Tanks",
    desc: "Durable water storage tanks for every project.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaShower />,
    title: "Sanitary Ware",
    desc: "Modern sanitary products for homes and offices.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FaFaucet />,
    title: "Bathroom Accessories",
    desc: "Premium taps, faucets and bathroom fittings.",
    color: "bg-cyan-100 text-cyan-700",
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Categories
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">
            Explore Our Categories
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse our wide collection of plumbing materials,
            sanitary products and industrial accessories.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {categories.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >

              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;