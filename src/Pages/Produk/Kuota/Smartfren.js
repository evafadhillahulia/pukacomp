import React, { useState } from "react";
import { motion } from "framer-motion";

const kuotaSmartfrenData = {
  Harian: [
    { name: "1GB / Hari", price: "Rp3.500", description: "Kuota harian 1GB cocok untuk browsing ringan." },
    { name: "2GB / Hari", price: "Rp5.000", description: "Kuota harian 2GB untuk streaming dan sosial media." },
  ],
  Mingguan: [
    { name: "6GB / Minggu", price: "Rp17.000", description: "Paket mingguan hemat dengan kuota 6GB." },
    { name: "12GB / Minggu", price: "Rp30.000", description: "Kuota mingguan besar untuk semua aktivitas." },
  ],
  Bulanan: [
    { name: "18GB / Bulan", price: "Rp50.000", description: "Paket bulanan 18GB untuk pemakaian sedang." },
    { name: "30GB / Bulan", price: "Rp70.000", description: "Kuota bulanan besar untuk internet nonstop." },
  ],
  Unlimited: [
    { name: "Unlimited Apps", price: "Rp65.000", description: "Unlimited aplikasi pilihan Smartfren." },
    { name: "Unlimited + 3GB", price: "Rp85.000", description: "Unlimited dengan bonus 3GB." },
  ],
};

const KuotaSmartfren = () => {
  const [selectedCategory, setSelectedCategory] = useState("Harian");

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-red-600 mb-4 pt-10">
        Kuota Smartfren
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(kuotaSmartfrenData).map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-red-100 text-red-700 hover:bg-red-200"
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
        {kuotaSmartfrenData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-red-700 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-red-600 font-semibold mb-3">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KuotaSmartfren;
