import React, { useState } from "react";
import { motion } from "framer-motion";

const kuotaTriData = {
  Harian: [
    { name: "1.5GB / Hari", price: "Rp4.000", description: "Kuota harian 1.5GB untuk internet cepat." },
    { name: "2.5GB / Hari", price: "Rp6.000", description: "Kuota harian 2.5GB untuk streaming dan browsing." },
  ],
  Mingguan: [
    { name: "7GB / Minggu", price: "Rp18.000", description: "Kuota mingguan 7GB cocok untuk kebutuhan rutin." },
    { name: "12GB / Minggu", price: "Rp28.000", description: "Kuota mingguan besar dengan harga terjangkau." },
  ],
  Bulanan: [
    { name: "20GB / Bulan", price: "Rp50.000", description: "Paket bulanan 20GB untuk penggunaan reguler." },
    { name: "35GB / Bulan", price: "Rp70.000", description: "Kuota besar untuk satu bulan penuh." },
  ],
  Unlimited: [
    { name: "Unlimited Apps", price: "Rp60.000", description: "Paket unlimited khusus aplikasi pilihan." },
    { name: "Unlimited + 5GB", price: "Rp85.000", description: "Unlimited dengan tambahan 5GB reguler." },
  ],
};

const KuotaTri = () => {
  const [selectedCategory, setSelectedCategory] = useState("Harian");

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-pink-700 mb-4 pt-10">
        Kuota Tri
      </h1>

      {/* Tabs for Category */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(kuotaTriData).map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
              selectedCategory === category
                ? "bg-pink-600 text-white"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
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
        {kuotaTriData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-pink-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-pink-600 font-semibold mb-3">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KuotaTri;
