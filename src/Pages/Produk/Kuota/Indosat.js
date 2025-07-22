import React, { useState } from "react";
import { motion } from "framer-motion";

const kuotaIndosatData = {
  Harian: [
    { name: "1GB / Hari", price: "Rp4.500", description: "Kuota harian Indosat murah dan cepat." },
    { name: "2GB / Hari", price: "Rp6.500", description: "Streaming dan browsing tanpa batasan." },
  ],
  Mingguan: [
    { name: "7GB / Minggu", price: "Rp20.000", description: "Paket mingguan nyaman dan efisien." },
    { name: "14GB / Minggu", price: "Rp33.000", description: "Kuota besar untuk satu minggu penuh." },
  ],
  Bulanan: [
    { name: "25GB / Bulan", price: "Rp55.000", description: "Paket hemat 25GB selama satu bulan." },
    { name: "50GB / Bulan", price: "Rp85.000", description: "Paket bulanan jumbo dari Indosat." },
  ],
  Unlimited: [
    { name: "Unlimited Apps", price: "Rp70.000", description: "Unlimited aplikasi sosial media." },
    { name: "Unlimited + 4GB", price: "Rp95.000", description: "Unlimited + kuota reguler 4GB." },
  ],
};

const KuotaIndosat = () => {
  const [selectedCategory, setSelectedCategory] = useState("Harian");

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-yellow-500 mb-4 pt-10">
        Kuota Indosat
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(kuotaIndosatData).map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              selectedCategory === category
                ? "bg-yellow-400 text-white"
                : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {kuotaIndosatData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-yellow-600 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-yellow-500 font-semibold mb-3">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KuotaIndosat;
