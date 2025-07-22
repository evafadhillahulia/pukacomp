import React, { useState } from "react";
import { motion } from "framer-motion";

const kuotaData = {
  Harian: [
    { name: "1GB / Hari", price: "Rp5.000", description: "Paket harian dengan kuota 1GB." },
    { name: "2GB / Hari", price: "Rp7.000", description: "Paket harian dengan kuota 2GB." },
  ],
  Mingguan: [
    { name: "5GB / Minggu", price: "Rp15.000", description: "Paket mingguan dengan kuota 5GB." },
    { name: "10GB / Minggu", price: "Rp25.000", description: "Paket mingguan dengan kuota 10GB." },
  ],
  Bulanan: [
    { name: "15GB / Bulan", price: "Rp45.000", description: "Paket bulanan dengan kuota 15GB." },
    { name: "25GB / Bulan", price: "Rp65.000", description: "Paket bulanan dengan kuota 25GB." },
  ],
  Unlimited: [
    { name: "Unlimited Apps", price: "Rp75.000", description: "Paket unlimited untuk aplikasi." },
    { name: "Unlimited + 2GB", price: "Rp90.000", description: "Paket unlimited dengan bonus 2GB." },
  ],
};

const KuotaXL = () => {
  const [selectedCategory, setSelectedCategory] = useState("Harian");

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-4 pt-10">
        Kuota XL
      </h1>

      {/* Tabs for Category */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(kuotaData).map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              selectedCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Produk grid with sliding effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {kuotaData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-indigo-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-indigo-600 font-semibold mb-3">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KuotaXL;
