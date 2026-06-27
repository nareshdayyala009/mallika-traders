import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section
      id="products"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Our Products
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">
            Featured Products
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our premium range of plumbing materials,
            including PVC pipes, CPVC pipes, water tanks,
            valves, fittings and industrial accessories.
          </p>

        </motion.div>

        {/* Products Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;