import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function ContactForm() {
  return (
    <section
      id="contact"
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
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-slate-900">
            Get In Touch
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Have questions about our plumbing materials?
            Contact Mallika Traders today.
          </p>

        </motion.div>

        {/* Contact Grid */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <div className="space-y-6">

            <div className="flex gap-5 bg-slate-50 p-6 rounded-3xl shadow-lg">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Shop Address
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  Mallika Traders
                  <br />
                  7-2-886
                  <br />
                  Near Sree Chaitanya Degree College
                  <br />
                  Mankamma Thota
                  <br />
                  Karimnagar
                  <br />
                  Telangana - 505001
                </p>

                <a
                  href="https://maps.app.goo.gl/dvrnTuwcWa826U429"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-blue-700 font-semibold hover:underline"
                >
                  View on Google Maps →
                </a>

              </div>

            </div>

            <div className="flex gap-5 bg-slate-50 p-6 rounded-3xl shadow-lg">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-2xl">
                <FaPhoneAlt />
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Phone Number
                </h3>

                <a
                  href="tel:7337338803"
                  className="text-gray-600 mt-2 block hover:text-blue-700"
                >
                  +91 73373 38803
                </a>

              </div>

            </div>

            <div className="flex gap-5 bg-slate-50 p-6 rounded-3xl shadow-lg">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 text-2xl">
                <FaEnvelope />
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Email Address
                </h3>

                <a
                  href="mailto:beerlasrinivas1@gmail.com"
                  className="text-gray-600 mt-2 block hover:text-blue-700"
                >
                  beerlasrinivas1@gmail.com
                </a>

              </div>

            </div>

            <div className="flex gap-5 bg-slate-50 p-6 rounded-3xl shadow-lg">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
                <FaClock />
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Monday – Saturday
                  <br />
                  9:00 AM – 8:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form className="bg-slate-50 rounded-3xl shadow-lg p-8">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border mb-5 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border mb-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border mb-5 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border outline-none resize-none"
            />

            <button
              className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>
                {/* Google Map */}

        <div className="mt-20">

          <div className="text-center max-w-3xl mx-auto mb-10">

            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
              Our Location
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900">
              Visit Our Store
            </h2>

            <p className="mt-4 text-lg text-gray-600 leading-8">
              Find us easily using Google Maps and visit our store.
            </p>

          </div>

          <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29233.203360538057!2d79.10262141761748!3d18.448088949811698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd92b607c692d%3A0xe490a839327f0e9f!2sMallika%20Traders!5e0!3m2!1sen!2sin!4v1782571400201!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Mallika Traders Location"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;