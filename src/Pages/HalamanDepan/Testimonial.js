import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Testi1 from '../../Assets/Testimoni/Testi1.jpg';
import Testi2 from '../../Assets/Testimoni/Testi2.jpg';
import Testi3 from '../../Assets/Testimoni/Testi3.jpg';
import Testi4 from '../../Assets/Testimoni/Testi4.jpg';
import Testi5 from '../../Assets/Testimoni/Testi5.jpg';
import Testi6 from '../../Assets/Testimoni/Testi6.jpg';
import Testi7 from '../../Assets/Testimoni/Testi7.jpg';
import Testi8 from '../../Assets/Testimoni/Testi8.jpg';

const Testimonial = () => {
  const testimonials = [
    Testi1, Testi2, Testi3, Testi4,
    Testi5, Testi6, Testi7, Testi8,
    Testi1, Testi2, Testi3, Testi4,
    Testi5, Testi6, Testi7, Testi8,
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, testimonials.length));
  };

  const isAllVisible = visibleCount >= testimonials.length;

  return (
    <div className="bg-gradient-to-r from-indigo-50  p-6 sm:p-12 pt-32">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-4 pt-20">Testimoni Pelanggan Kami</h2>
      <p className="text-center text-purple text-lg sm:text-xl mb-12">
        Berikut adalah beberapa testimoni dari pelanggan yang telah merasakan manfaat dari produk kami.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.slice(0, visibleCount).map((photo, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={photo}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </motion.div>
        ))}
      </div>

      {/* Belum Percaya? Section */}
      {!isAllVisible && (
        <div className="text-center mt-12 mb-12">
          <p className="text-purple text-lg sm:text-xl mb-4">
            Belum Percaya? Lihat lebih banyak testimoni!
          </p>
          <button
            onClick={showMore}
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 transition duration-300"
          >
            Lihat Testimoni Lainnya
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
