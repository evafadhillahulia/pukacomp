import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resellerName: '',
    resellerEmail: '',
    resellerTelepon: ''
  });

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert({ type: 'success', message: 'Pesan Anda telah terkirim! Terima kasih atas perhatian Anda.' });
    setFormData({ name: '', email: '', message: '', resellerName: '', resellerEmail: '', resellerTelepon: '' });

    setTimeout(() => {
      setAlert(null); 
    }, 5000);
  };

  const handleResellerSubmit = (e) => {
    e.preventDefault();
    setAlert({ type: 'success', message: 'Pendaftaran Reseller Anda telah berhasil! Kami akan menghubungi Anda segera.' });
    setFormData({ ...formData, resellerName: '', resellerEmail: '', resellerTelepon: '' });

    setTimeout(() => {
      setAlert(null); 
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-50  p-4 sm:p-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-4 pt-20">Kontak Kami</h2>

      {/* Alert Message */}
      {alert && (
        <motion.div
          className={`p-4 mb-4 rounded-lg text-white ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {alert.message}
        </motion.div>
      )}

      {/* Contact Form and Reseller Form in a Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-800 mb-4">Kirim Pesan</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Nama Anda"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Email Anda"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              name="message"
              placeholder="Tulis pesan Anda"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              required
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full py-3 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-800 transition-colors transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Kirim Pesan
            </motion.button>
          </form>
        </motion.div>

        {/* Reseller Registration Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-800 mb-4">Daftar Reseller</h2>
          <form onSubmit={handleResellerSubmit} className="space-y-4">
            <motion.input
              type="text"
              name="resellerName"
              placeholder="Nama Lengkap"
              value={formData.resellerName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              name="resellerEmail"
              placeholder="Email"
              value={formData.resellerEmail}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="alamat"
              name="resellerAlamat"
              placeholder="Alamat"
              value={formData.resellerAlamat}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="tel"
              name="resellerTelepon"
              placeholder="Nomor Telepon"
              value={formData.resellerTelepon}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              type="submit"
              className="w-full py-3 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-800 transition-colors transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Daftar Reseller
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Operational Hours */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-800 mb-4">Jam Operasional</h2>
        <div className="space-y-4">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xl text-indigo-700">🕒</span>
            <span className="text-lg">Senin - Minggu : 06.00 - 23.59</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
