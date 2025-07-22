import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import robot1 from "../../Assets/Charger/Robot/robot1.jpg";
import robot2 from "../../Assets/Charger/Robot/robot2.jpg";
import olike1 from "../../Assets/Charger/Olike/olike1.jpg";
import olike2 from "../../Assets/Charger/Olike/olike2.jpg";
import ugreen1 from "../../Assets/Charger/Ugreen/ugreen1.jpg";
import ugreen2 from "../../Assets/Charger/Ugreen/ugreen2.jpg";

const chargerData = {
  Robot: [
    {
      name: "Robot Charger R1",
      description: "Charger cepat dengan teknologi fast charging.",
      images: [robot1, robot2],
      price: "Rp 75.000",
      specs: ["Fast Charging", "Output 2.1A", "USB Port", "Garansi 6 Bulan"],
    },
    {
      name: "Robot Charger R2",
      description: "Desain compact dan efisien untuk penggunaan sehari-hari.",
      images: [robot1, robot2],
      price: "Rp 65.000",
      specs: ["Compact Design", "Output 1A", "USB Port", "Garansi 3 Bulan"],
    },
    {
      name: "Robot Charger R3",
      description: "Charger ringan dan mudah dibawa.",
      images: [robot1, robot2],
      price: "Rp 80.000",
      specs: ["Ringan", "1 Port", "Fast Charge", "Garansi 1 Tahun"],
    },
  ],
  Olike: [
    {
      name: "Olike PowerPro",
      description: "Charger pintar dengan proteksi suhu dan arus.",
      images: [olike1, olike2],
      price: "Rp 85.000",
      specs: ["Overheat Protection", "Output 2.4A", "Dual USB", "Smart IC"],
    },
    {
      name: "Olike SpeedCharge",
      description: "Pengisian daya super cepat untuk semua perangkat.",
      images: [olike1, olike2],
      price: "Rp 99.000",
      specs: ["Quick Charge 3.0", "Type-C Output", "Slim Design"],
    },
  ],
  Ugreen: [
    {
      name: "Ugreen Charger 30W",
      description: "Power delivery charger dengan teknologi terbaru.",
      images: [ugreen1, ugreen2],
      price: "Rp 120.000",
      specs: ["30W Power Delivery", "USB-C + USB-A", "Compact Travel Size"],
    },
    {
      name: "Ugreen Dual Port",
      description: "2 port USB charger dengan performa maksimal.",
      images: [ugreen1, ugreen2],
      price: "Rp 110.000",
      specs: ["Dual USB Output", "18W Total Power", "Smart Charging Chip"],
    },
  ],
  Baseus: [
    {
      name: "Ugreen Charger 30W",
      description: "Power delivery charger dengan teknologi terbaru.",
      images: [ugreen1, ugreen2],
      price: "Rp 120.000",
      specs: ["30W Power Delivery", "USB-C + USB-A", "Compact Travel Size"],
    },
    {
      name: "Ugreen Dual Port",
      description: "2 port USB charger dengan performa maksimal.",
      images: [ugreen1, ugreen2],
      price: "Rp 110.000",
      specs: ["Dual USB Output", "18W Total Power", "Smart Charging Chip"],
    },
  ],
};

const Charger = () => {
  const [selectedCategory, setSelectedCategory] = useState("Robot");
  const [mainImageIndex, setMainImageIndex] = useState({});

  const handleThumbnailClick = (productIndex, imageIndex) => {
    setMainImageIndex((prev) => ({
      ...prev,
      [productIndex]: imageIndex,
    }));
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-4 pt-10">
        Produk Charger
      </h1>

      {/* Tabs with Fade In Animation */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(chargerData).map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setMainImageIndex({});
            }}
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

      {/* Produk grid with slide-in animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {chargerData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center">
              {/* Gambar utama */}
              <motion.img
                src={item.images[mainImageIndex[index] || 0]}
                alt="Main"
                className="w-full h-52 object-contain mb-3 rounded-xl border"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Thumbnails */}
              <div className="flex justify-center space-x-2 mb-3">
                {item.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => handleThumbnailClick(index, idx)}
                    className={`w-12 h-12 object-cover rounded cursor-pointer border-2 ${
                      mainImageIndex[index] === idx
                        ? "border-indigo-500"
                        : "border-gray-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>

              {/* Info Produk */}
              <div className="text-center px-2">
                <h3 className="text-lg font-bold text-indigo-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-indigo-600 font-semibold mb-2">{item.price}</p>
                <ul className="text-sm text-gray-600 list-disc list-inside text-left">
                  {item.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
};

export default Charger;
