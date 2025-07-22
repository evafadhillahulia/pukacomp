import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // 
import Footer from './Components/Footer'; // 
import LandingPage from './Pages/HalamanDepan/HalamanDepan'; 
import Charger from './Pages/Produk/Charger'; 
import Contact from './Pages/HalamanDepan/Kontak';
import Layanan from './Pages/HalamanDepan/Layanan';
import Testimonial from './Pages/HalamanDepan/Testimonial';
import KuotaXL from "./Pages/Produk/Kuota/XL";
import KuotaTri from "./Pages/Produk/Kuota/Tri";
import KuotaSmartfren from './Pages/Produk/Kuota/Smartfren';
import KuotaTelkomsel from './Pages/Produk/Kuota/Telkomsel';
import KuotaIndosat from './Pages/Produk/Kuota/Indosat';
import Cable from './Pages/Produk/KabelData';
import Speaker from './Pages/Produk/Speaker';


const App = () => {
  return (
    <div>
      {/* Navbar akan muncul di seluruh aplikasi */}
      <Navbar />
      <Routes>
        {/* Menentukan Route untuk halaman */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/produk/charger" element={<Charger />} />
        <Route path="/produk/kuota/xl" element={<KuotaXL />} />
        <Route path="/produk/kuota/tri" element={<KuotaTri />} />
        <Route path="/produk/kuota/smartfren" element={<KuotaSmartfren />} />
        <Route path="/produk/kuota/telkomsel" element={<KuotaTelkomsel />} />
        <Route path="/produk/kuota/indosat" element={<KuotaIndosat />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/produk/kabel-data" element={<Cable />} />
        <Route path="/produk/speaker" element={<Speaker />} />
        {/* Rute lainnya */}
      </Routes>

      <Footer /> {/* Letakkan di luar Routes */}
    </div>
  );
};

export default App;
