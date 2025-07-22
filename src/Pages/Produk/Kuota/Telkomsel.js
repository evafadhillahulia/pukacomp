import React, { useState } from "react";
import { motion } from "framer-motion";

const kuotaTelkomselData = {
  Harian: [
    { name: "2GB / Hari", price: "Rp6.000", description: "Paket harian Telkomsel untuk kebutuhan cepat." },
    { name: "3GB / Hari", price: "Rp8.500", description: "Paket harian untuk streaming dan video call." },
  ],
  Mingguan: [
    { name: "8GB / Minggu", price: "Rp22.000", description: "Paket mingguan reguler dengan harga hemat." },
    { name: "15GB / Minggu", price: "Rp35.000", description: "Kuota mingguan untuk semua aplikasi." },
  ],
  Bulanan: [
    { name: "20GB / Bulan", price: "Rp60.000", description: "Paket bulanan reguler 20GB." },
    { name: "40GB / Bulan", price: "Rp90.000", description: "Paket bulanan besar Telkomsel." },
  ],
  Unlimited: [
    { name: "Unlimited Apps", price: "Rp80.000", description: "Unlimited aplikasi sosial dan video." },
    { name: "Unlimited + 3GB", price: "Rp100.000", description: "Unlimited dan bonus kuota reguler." },
  ],
};

const KuotaTelkomsel = () => {
  const [selectedCategory, setSelectedCategory] = useState("Harian");

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-red-800 mb-4 pt-10">
        Kuota Telkomsel
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(kuotaTelkomselData).map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              selectedCategory === category
                ? "bg-red-800 text-white"
                : "bg-red-100 text-red-800 hover:bg-red-200"
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
        {kuotaTelkomselData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-red-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-red-600 font-semibold mb-3">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KuotaTelkomsel;
