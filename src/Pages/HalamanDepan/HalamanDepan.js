import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Components/Navbar";
import {
  FaFlag,
  FaUserTie,
  FaClock,
  FaSlidersH,
} from "react-icons/fa";
import { FaInstagram,FaWhatsapp } from "react-icons/fa";  
import { motion } from "framer-motion";

// Landing Page
import HalamanDepan from "../../Assets/LandingPage/HalamanDepan.jpeg";
import HalamanDepan2 from "../../Assets/LandingPage/HalamanDepan2.jpeg";
import HalamanDepan3 from "../../Assets/LandingPage/HalamanDepan3.jpeg";
import HalamanDepan4 from "../../Assets/LandingPage/HalamanDepan4.jpeg";
import HalamanDepan5 from "../../Assets/LandingPage/HalamanDepan5.jpg";

// Galeri Produk
import galeri11 from "../../Assets/Galeri/galeri11.jpeg";
import galeri12 from "../../Assets/Galeri/galeri12.jpeg";
import galeri13 from "../../Assets/Galeri/galeri13.jpeg";
import galeri14 from "../../Assets/Galeri/galeri14.jpeg";
import galeri15 from "../../Assets/Galeri/galeri15.jpeg";
import galeri16 from "../../Assets/Galeri/galeri16.jpeg";
import galeri17 from "../../Assets/Galeri/galeri17.jpg";
import galeri18 from "../../Assets/Galeri/galeri18.jpeg";
import galeri1 from "../../Assets/Galeri/galeri1.jpg";
import galeri2 from "../../Assets/Galeri/galeri2.jpg";
import galeri3 from "../../Assets/Galeri/galeri3.jpg";
import galeri4 from "../../Assets/Galeri/galeri4.jpg";
import galeri5 from "../../Assets/Galeri/galeri5.jpg";
import galeri6 from "../../Assets/Galeri/galeri6.jpg";
import galeri7 from "../../Assets/Galeri/galeri7.jpg";
import galeri8 from "../../Assets/Galeri/galeri8.jpg";
import galeri9 from "../../Assets/Galeri/galeri9.jpg";
import galeri10 from "../../Assets/Galeri/galeri10.jpg";


// Galeri Mitra
import Baseus from "../../Assets/Mitra/Baseus.jpg";
import Olike from "../../Assets/Mitra/Olike.jpg";
import Oraimo from "../../Assets/Mitra/Oraimo.jpg";
import Robot from "../../Assets/Mitra/Robot.jpg";
import Sandisk from "../../Assets/Mitra/Sandisk.jpg";
import Ugreen from "../../Assets/Mitra/Ugreen.jpg";

// Galeri Sertifikat
import sertifikat1 from "../../Assets/Sertifikat/sertifikat1.jpg";
import sertifikat2 from "../../Assets/Sertifikat/sertifikat2.jpg";
import sertifikat3 from "../../Assets/Sertifikat/sertifikat3.jpg";
import sertifikat4 from "../../Assets/Sertifikat/sertifikat4.jpg";
import sertifikat5 from "../../Assets/Sertifikat/sertifikat5.jpg";


const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const galleryImages = [
  galeri11,
  galeri12,
  galeri13,
  galeri14,
  galeri15,
  galeri16,
  galeri17,
  galeri18,
  galeri1,
  galeri2,
  galeri3,
  galeri4,
  galeri5,
  galeri6,
  galeri7,
  galeri8,
  galeri9,
  galeri10,
];

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(galleryImages[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <section className="flex flex-col justify-center items-center text-center py-56 relative overflow-hidden">
  {/* Auto-scroll Background Images */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="flex animate-slide w-[200%] h-full">
      <img src={HalamanDepan} alt="Background 1" className="w-1/2 h-full object-cover" />
      <img src={HalamanDepan4} alt="Background 2" className="w-1/2 h-full object-cover" />
      <img src={HalamanDepan5} alt="Background 1" className="w-1/2 h-full object-cover" />
      <img src={HalamanDepan3} alt="Background 2" className="w-1/2 h-full object-cover" />
      <img src={HalamanDepan2} alt="Background 1" className="w-1/2 h-full object-cover" />
    </div>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-900 opacity-60 backdrop-blur-lg"></div>

  {/* Content */}
  <motion.h1
  initial="hidden"
  animate="visible"
  custom={1}
  variants={fadeUpVariant}
  className="relative z-10 text-3xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
>
  Selamat Datang di Puka Cell
</motion.h1>


  <motion.p
    initial="hidden"
    animate="visible"
    custom={2}
    variants={fadeUpVariant}
    className="relative z-10 text-lg text-white max-w-2xl mx-auto"
  >
    Toko gadget terpercaya dengan produk terbaik dan pelayanan maksimal
    untuk pelanggan di seluruh Indonesia.
  </motion.p>

  {/* Animation style */}
  <style jsx>{`
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-slide {
      animation: slide 5s ease-in-out forwards;
    }
  `}</style>
</section>



      {/* Features Section */}
      <section className="bg-[rgb(43,27,59)] py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {[{
          icon: <FaFlag />,
          title: "10 TAHUN PENGALAMAN",
          desc: "Kami telah melayani selama 10 tahun dengan dedikasi tinggi dan pengalaman luas.",
        }, {
          icon: <FaUserTie />,
          title: "TERPERCAYA",
          desc: "Telah dipercaya oleh ribuan pelanggan untuk berbagai kebutuhan gadget dan layanan.",
        }, {
          icon: <FaClock />,
          title: "HARGA TERMURAH",
          desc: "Menawarkan harga terbaik dan bersaing dengan kualitas unggulan.",
        }, {
          icon: <FaSlidersH />,
          title: "LAYANAN RAMAH",
          desc: "Pelayanan pelanggan yang ramah, cepat, dan selalu siap membantu Anda.",
        }].map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="relative overflow-hidden bg-[rgba(255,255,255,0.02)] border border-purple-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:bg-[rgba(255,255,255,0.04)] transition-all duration-500 ease-in-out transform hover:scale-105 before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-transparent before:bg-gradient-to-r before:from-purple-800 before:via-pink-500 before:to-orange-500 before:bg-[length:200%_200%] before:animate-border-glow before:opacity-60 before:z-0"
          >
            <div className="relative z-10 flex justify-center items-center w-16 h-16 mx-auto mb-4 text-white text-5xl hover:text-orange-500 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="relative z-10 font-bold text-2xl text-white mb-2">{item.title}</h3>
            <p className="relative z-10 text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-[rgb(43,27,59)] text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-6" data-aos="fade-up">Tentang Puka Cell</h2>
        <p data-aos="fade-up" data-aos-delay="300" className="text-gray-300 max-w-3xl mx-auto">
          Puka Cell adalah platform ritel elektronik yang menyediakan berbagai produk gadget berkualitas seperti smartphone, aksesoris, dan perangkat
          digital lainnya. Kami berdedikasi memberikan harga bersaing, layanan cepat, dan jaminan kualitas produk untuk seluruh pelanggan kami.
        </p>
      </section>

{/* Mitra Section */}
<section className="py-20 px-6 bg-gray-50 text-center" id="partner">
  <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6" data-aos="fade-up">
    Mitra & Partner Kami
  </h2>
  <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg" data-aos="fade-up" data-aos-delay="150">
    Kami bangga telah menjalin kolaborasi strategis bersama berbagai mitra terpercaya.
  </p>

  <div className="relative">
    <div className="flex overflow-x-auto space-x-8 scrollbar-hide px-4 py-6" id="scroll-gallery">
      {[Baseus, Olike, Oraimo, Robot, Sandisk, Ugreen].map((src, i) => (
        <div
          key={i}
          className="min-w-[300px] h-[250px] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:scale-110"
          data-aos="zoom-in"
          data-aos-delay={i * 100}
        >
          <div className="relative w-full h-full group">
            <img
              src={src}
              alt={`Mitra ${i + 1}`}
              className="w-full h-full object-cover rounded-3xl transition-all duration-300"
              onClick={(e) => e.target.classList.toggle('blur-sm')}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 flex justify-center items-center rounded-3xl group-hover:bg-opacity-50 transition-opacity duration-300">
            </div>
            {/* Deskripsi Mitra */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm">
                {i === 0 && "Baseus adalah merek asal Tiongkok yang memproduksi aksesoris elektronik seperti charger, kabel, dan power bank, dengan kelebihan pada desain yang modern, fitur inovatif, serta teknologi pengisian cepat dan keamanan tinggi."}
                {i === 1 && "Olike merupakan brand aksesoris gadget dari Tiongkok yang populer di Asia Tenggara, dengan keunggulan harga yang terjangkau dan produk yang mudah ditemukan sehingga cocok untuk pengguna pemula."}
                {i === 2 && "Oraimo adalah brand teknologi dari Tiongkok yang memproduksi earphone, power bank, dan smartwatch, dengan kelebihan desain yang stylish, daya tahan baterai yang lama, dan fitur modern pada produk wearable-nya."}
                {i === 3 && "Robot adalah merek aksesoris elektronik dari Tiongkok yang terkenal di Indonesia, menawarkan produk seperti charger dan power bank dengan harga ekonomis, mudah didapat, dan cocok untuk kebutuhan sehari-hari."}
                {i === 4 && "Sandisk merupakan perusahaan asal Amerika Serikat yang bergerak di bidang penyimpanan data seperti memory card dan flash drive, dengan keunggulan kualitas penyimpanan yang sangat baik, kecepatan transfer tinggi, dan daya tahan produk yang sudah teruji secara global."}
                {i === 5 && "Ugreen adalah brand teknologi dari Tiongkok yang memproduksi aksesoris elektronik seperti kabel, charger, dan hub, dengan kelebihan inovasi produk, kualitas material yang bagus, serta layanan purna jual yang baik dan sertifikasi internasional."}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <p className="mt-10 text-sm text-gray-500" data-aos="fade-up" data-aos-delay="400">
  Tertarik menjadi mitra kami? <Link to="/kontak" className="text-purple-700 font-semibold hover:underline">Hubungi kami sekarang</Link>
</p>
</section>


<section className="py-20 px-6 bg-gradient-to-b from-purple-50 via-gray-50 to-white" id="sertifikat">
  <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-4" data-aos="fade-up">
    Sertifikat dan Penghargaan
  </h2>
  <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
    Kami bangga menerima berbagai sertifikat dan penghargaan sebagai bukti kualitas, dedikasi, dan kepercayaan.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {[sertifikat1, sertifikat2, sertifikat3, sertifikat4, sertifikat5].map((imgSrc, index) => (
      <div
        key={index}
        data-aos="zoom-in"
        data-aos-delay={100 + index * 100}
        className="relative group overflow-hidden rounded-xl shadow-xl bg-white ring-1 ring-gray-200 transition transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
      >
        <img
          src={imgSrc}
          alt={`Sertifikat ${index + 1}`}
          className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white font-semibold text-sm">Sertifikat {index + 1}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-[rgb(43,27,59)] text-center">
  <h2
    className="text-3xl sm:text-4xl font-bold text-purple-300 mb-4"
    data-aos="fade-up"
  >
    Galeri Kami
  </h2>
  <p
  data-aos="fade-up"
  data-aos-delay="300"
  className="text-gray-300 max-w-3xl mx-auto mb-11"
>
Lihat lebih dekat aktivitas dan produk kami melalui galeri Puka Cell — kumpulan momen terbaik, promo menarik, dan suasana toko yang hangat untuk memberikan kepercayaan dan kenyamanan kepada pelanggan.</p>


  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
    {galleryImages.map((image, index) => (
      <div
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 100}
        className="relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
        onClick={() => handleImageClick(index)}
      >
        <img
          src={image}
          alt={`Product ${index + 1}`}
          className="w-full h-48 object-cover rounded-lg transition-all duration-500 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    ))}
  </div>
</section>


      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
            <img src={selectedImage} alt="Enlarged Product" className="w-full h-auto" />
            <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full">
              Close
            </button>
          </div>
        </div>
      )}

{/* Cabang Kami Section */}
<section className="py-16 px-6 bg-[rgb(43,27,59)] text-center">
<h2
    className="text-3xl sm:text-4xl font-bold text-purple-300 mb-4"
    data-aos="fade-up"
  >
    Cabang Kami
  </h2>
  <p
  data-aos="fade-up"
  data-aos-delay="300"
  className="text-gray-300 max-w-3xl mx-auto mb-11"
>Puka Cell, meskipun baru hadir di satu kota, telah membuka beberapa cabang untuk memberikan layanan terbaik dan produk berkualitas kepada pelanggan di berbagai lokasi.</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">
    {/* Cabang 1 */}
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/PukaCell1.jpg")}
        alt="Cabang Surabaya"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Puka Cell 1</h3>
      <p className="text-gray-700 mb-2">Purwosari, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59316</p>
      <div className="flex justify-center gap-4">
        
<a
  href="https://www.instagram.com/puka.cell.kudus/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>
<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>

    {/* Cabang 2 */}
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/PukaCell2.jpg")}
        alt="Cabang Bandung"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Puka Cell 2</h3>
      <p className="text-gray-700 mb-2">Jl. Ganesha Raya, Pasuruhan Lor, Kec. Jati, Kabupaten Kudus, Jawa Tengah 59349</p>
      <div className="flex justify-center gap-4">
 
<a
  href="https://www.instagram.com/pukacell2/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>

<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>

    {/* Cabang 3 */}
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/PukaCell3.jpg")}
        alt="Cabang Bali"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Puka Cell 3</h3>
      <p className="text-gray-700 mb-2">Jl. Kyai Telingsing Kec. Kaliwungu, Kabupaten Kudus, Jawa Tengah 59315</p>
      <div className="flex justify-center gap-4">

      <a
  href="https://www.instagram.com/pukacell3/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>

<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>

    {/* Cabang 4 */}
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/RajaBrilink.jpg")}
        alt="Cabang Yogyakarta"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Raja Brilink</h3>
      <p className="text-gray-700 mb-2">Jl. Sunan Kudus No.155b, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59317</p>
      <div className="flex justify-center gap-4">

      <a
  href="https://www.instagram.com/raja.brilink.kudus/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>

<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>

    {/* Cabang 5 */}
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/PukaCell5.jpg")}
        alt="Cabang Makassar"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Puka Cell 5</h3>
      <p className="text-gray-700 mb-2">Jl. Raya Kudus - Colo, Baekrajan, Bae, Kec. Bae, Kabupaten Kudus, Jawa Tengah 59313</p>
      <div className="flex justify-center gap-4">

      <a
  href="https://www.instagram.com/pukacell5/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>

<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>

    {/* Cabang 6 */}
    <div
      data-aos="fade-up"
      data-aos-delay="600"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/Juara01Cell.jpg")}
        alt="Cabang Semarang"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Juara 01 Cell</h3>
      <p className="text-gray-700 mb-2">Jl. Ganesha Raya, Purwosari, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59316</p>
      <div className="flex justify-center gap-4">
 
<a
  href="https://www.instagram.com/puka.cell.kudus/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>

<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>

    {/* Cabang 7 */}
    <div
      data-aos="fade-up"
      data-aos-delay="700"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/Ugreen.jpg")}
        alt="Cabang Medan"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Ugreen Store Kudus</h3>
      <p className="text-gray-700 mb-2">Jl. HM Subchan ZE, Purwosari, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59316</p>
      <div className="flex justify-center gap-4">

      <a
  href="https://www.instagram.com/ugreen.store.kudus/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>

<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>

    {/* Cabang 8 */}
    <div
      data-aos="fade-up"
      data-aos-delay="800"
      className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
    >
      <img
        src={require("../../Assets/Cabang/NafaCell.jpg")}
        alt="Cabang Surakarta"
        className="w-full h-48 object-cover rounded-lg mb-4 max-h-48 transition-all duration-500 transform hover:scale-110"
      />
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Nafa Cell</h3>
      <p className="text-gray-700 mb-2"> Pejaten, Krandon, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59314</p>
      <div className="flex justify-center gap-4">

      <a
  href="https://www.instagram.com/nafa_cell1/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-500 hover:text-purple-700 transition-transform duration-300 transform hover:scale-125"
>
  <FaInstagram size={28} />
</a>

<a
  href="https://wa.me/628123456789" // ganti dengan nomor kamu
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-125"
>
  <FaWhatsapp size={28} />
</a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default LandingPage;
