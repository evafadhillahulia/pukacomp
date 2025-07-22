import React, { useState } from "react";
import { motion } from "framer-motion";
import robot1 from "../../Assets/Kabel Data/Robot/robot1.jpg";
import robot2 from "../../Assets/Kabel Data/Robot/robot2.jpg";

const KabelData = {
  Robot: [
    {
      name: "Robot Cable C1",
      description: "Kabel data berkualitas tinggi dengan daya tahan ekstra.",
      images: [robot1, robot2],
      price: "Rp 25.000",
      specs: ["Micro USB", "Panjang 1m", "Fast Charging", "Material Nylon"],
    },
    {
      name: "Robot Cable C2",
      description: "Kabel dengan konektor kuat dan desain menarik.",
      images: [robot1, robot2],
      price: "Rp 30.000",
      specs: ["Type-C", "Output 2.4A", "Tahan Tarikan", "Warna Elegan"],
    },
  ],
  Ugreen: [
    {
      name: "Ugreen Data Cable 2A",
      description: "Kabel USB-C untuk pengisian cepat dan transfer data stabil.",
      images: [robot1, robot2],
      price: "Rp 55.000",
      specs: ["USB-C", "Output 2A", "Transfer Data Cepat", "1.5 Meter"],
    },
  ],
  Baseus: [
    {
      name: "Baseus Cable Lightning",
      description: "Kabel lightning berkualitas untuk perangkat Apple.",
      images: [robot1, robot2],
      price: "Rp 70.000",
      specs: ["Lightning", "Fast Charging", "Apple Certified", "1 Meter"],
    },
  ],
};

const Cable = () => {
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
        Produk Kabel Data
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(KabelData).map((category) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {KabelData[selectedCategory].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center">
              <motion.img
                src={item.images[mainImageIndex[index] || 0]}
                alt="Main"
                className="w-full h-52 object-contain mb-3 rounded-xl border"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex justify-center space-x-2 mb-3">
                {item.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    onClick={() => handleThumbnailClick(index, idx)}
                    className={`w-10 h-10 object-cover rounded cursor-pointer border ${
                      mainImageIndex[index] === idx ? "border-indigo-600" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
              <h2 className="text-lg font-semibold text-center">{item.name}</h2>
              <p className="text-sm text-gray-600 text-center mb-2">{item.description}</p>
              <p className="text-indigo-600 font-bold text-lg text-center mb-2">{item.price}</p>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                {item.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cable;
