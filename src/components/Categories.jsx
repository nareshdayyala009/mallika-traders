import {
  FaWater,
  FaTint,
  FaTools,
  FaWarehouse,
  FaShower,
  FaFaucet,
} from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  {
    title: "PVC Pipes",
    icon: <FaWater />,
    description: "Premium quality PVC pipes for residential and commercial plumbing.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "CPVC Pipes",
    icon: <FaTint />,
    description: "Reliable hot and cold water plumbing solutions.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Pipe Fittings",
    icon: <FaTools />,
    description: "Elbows, tees, sockets, reducers and more.",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Water Tanks",
    icon: <FaWarehouse />,
    description: "Durable water storage tanks for every project.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Sanitary Ware",
    icon: <FaShower />,
    description: "Modern sanitary products for homes and offices.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Bathroom Accessories",
    icon: <FaFaucet />,
    description: "Premium taps, faucets and bathroom fittings.",
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Categories
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">
            Explore Our Categories
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Browse our wide collection of plumbing materials,
            sanitary products and industrial accessories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {categories.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              className="bg-slate-50 rounded-3xl shadow-lg hover:shadow-2xl p-10"
            >
              <div
                className={`w-24 h-24 rounded-2xl flex items-center justify-center text-5xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;