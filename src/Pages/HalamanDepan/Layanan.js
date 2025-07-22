import React from 'react';
import {
  FaMobileAlt,
  FaBatteryFull,
  FaCreditCard,
  FaMoneyBillWave,
  FaGlassWhiskey,
  FaExchangeAlt,
  FaArrowCircleUp,
  FaSimCard,
  FaMusic,
  FaStore,
  FaGamepad,
  FaBolt,
  FaFileInvoiceDollar,
  FaShoppingCart, // Ikon untuk Jual Beli HP
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const layananList = [
  { icon: <FaBatteryFull className="text-indigo-600 text-3xl mb-2" />, text: 'Ganti LCD & Baterai' },
  { icon: <FaGlassWhiskey className="text-indigo-600 text-3xl mb-2" />, text: 'Pasang Tempered Glass' },
  { icon: <FaCreditCard className="text-indigo-600 text-3xl mb-2" />, text: 'Transfer Antar Bank' },
  { icon: <FaMoneyBillWave className="text-indigo-600 text-3xl mb-2" />, text: 'Tarik Tunai' },
  { icon: <FaArrowCircleUp className="text-indigo-600 text-3xl mb-2" />, text: 'Top Up Dana, OVO, Gopay' },
  { icon: <FaSimCard className="text-indigo-600 text-3xl mb-2" />, text: 'Isi Pulsa & Paket Data' },
  { icon: <FaMusic className="text-indigo-600 text-3xl mb-2" />, text: 'Isi Lagu MP3 & MP4' },
  { icon: <FaStore className="text-indigo-600 text-3xl mb-2" />, text: 'Melayani Grosir' },
  { icon: <FaGamepad className="text-indigo-600 text-3xl mb-2" />, text: 'Top Up Game (ML, FF, dll)' },
  { icon: <FaBolt className="text-indigo-600 text-3xl mb-2" />, text: 'Isi Token Listrik' },
  { icon: <FaFileInvoiceDollar className="text-indigo-600 text-3xl mb-2" />, text: 'Bayar Tagihan (PDAM, PLN)' },
  { icon: <FaShoppingCart className="text-indigo-600 text-3xl mb-2" />, text: 'Jual Beli HP Baru & Bekas' },
];

const Layanan = () => {
  return (
    <div className="p-8 pt-32 bg-gradient-to-r from-white via-indigo-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-4">Layanan Puka Cell</h1>
      <p className="text-center max-w-xl mx-auto text-lg text-gray-700">
        Kami melayani berbagai kebutuhan digital & service HP Anda dengan cepat dan terpercaya.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {layananList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-indigo-100"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-medium text-indigo-700 mt-2">{item.text}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;
