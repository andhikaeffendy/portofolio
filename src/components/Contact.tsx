import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact</h2>
          <div className="w-20 h-1 bg-blue-500 mb-4" />
          <p className="text-gray-700">
            Feel free to reach out for collaborations, inquiries, or just to say
            hello!
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-500 mt-1" size={20} />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-700">Ambon City, Maluku, Indonesia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-500 mt-1" size={20} />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Call Me</h4>
                <p className="text-gray-700">+62 821 9811 3362</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-500 mt-1" size={20} />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Email Me
                </h4>
                <p className="text-gray-700">andhikaeffendy14@gmail.com</p>
              </div>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps?q=Ambon%20City%2C%20Maluku%2C%20Indonesia&output=embed"
              className="w-full h-64 border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
