import React, { useState } from "react";
import { motion } from "framer-motion";
import speaker1 from "../../Assets/Speaker/speaker1.jpg";
import speaker2 from "../../Assets/Speaker/speaker2.jpg";
import speaker3 from "../../Assets/Speaker/speaker3.jpg";

const speakerData = {
  JBL: [
    {
      name: "JBL Go 3",
      description: "Speaker portable dengan suara jernih dan desain tahan air.",
      images: [speaker1, speaker2],
      price: "Rp 450.000",
      specs: ["Waterproof", "Bluetooth 5.1", "10 Jam Pemakaian", "Bass Mantap"],
    },
    {
      name: "JBL Flip 5",
      description: "Speaker bertenaga tinggi dengan daya tahan baterai panjang.",
      images: [speaker1, speaker2,speaker3],
      price: "Rp 1.200.000",
      specs: ["20W Output", "IPX7", "12 Jam Main", "USB-C Fast Charge"],
    },
  ],
  Sony: [
    {
      name: "Sony SRS-XB13",
      description: "Speaker ringkas dengan EXTRA BASS.",
      images: [speaker3, speaker1,speaker3],
      price: "Rp 650.000",
      specs: ["EXTRA BASS", "Water Resistant", "USB Type-C", "Strap Ringkas"],
    },
    {
      name: "Sony SRS-XB23",
      description: "Desain silinder untuk suara surround terbaik.",
      images: [speaker3, speaker2],
      price: "Rp 1.300.000",
      specs: ["Stereo Pair", "IP67", "12 Jam", "Party Boost"],
    },
  ],
};

const Speaker = () => {
  const [selectedCategory, setSelectedCategory] = useState("JBL");
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
        Produk Speaker
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(speakerData).map((category) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {speakerData[selectedCategory].map((item, index) => (
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

export default Speaker;
