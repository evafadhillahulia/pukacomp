import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/icon2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setMenuOpen(false); 
    setDropdownOpen(false); 
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const menus = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Produk", href: "/produk", hasDropdown: true },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Kontak", href: "/kontak" },
  ];

  const produkCategories = [
    { name: "Kuota", href: "/produk/kuota", subcategories: ["XL", "Tri", "Indosat", "Smartfren", "Telkomsel"] },
    { name: "Kabel Data", href: "/produk/kabel-data" },
    { name: "Charger", href: "/produk/charger" },
    { name: "Speaker", href: "/produk/speaker" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgb(43,27,59)] py-4 shadow-lg z-50 transition-all duration-300 ease-in-out backdrop-blur-md">
      <div className="w-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Puka Cell" className="h-12 w-15" />
          <span className="text-2xl font-extrabold text-white">Puka Cell</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {menus.map(({ name, href, hasDropdown }) => (
            <li key={name} className="relative group">
              <Link
                to={hasDropdown ? "#" : href}
                onClick={(e) => {
                  if (hasDropdown) {
                    e.preventDefault();
                    toggleDropdown();
                  } else {
                    handleMenuClick(name.toLowerCase()); 
                  }
                }}
                className={`py-2 px-4 transition duration-300 ease-in-out ${
                  activeMenu === name.toLowerCase() ? "text-indigo-300" : "hover:text-indigo-300"
                }`}
              >
                {name}
              </Link>
              {/* Dropdown for Produk */}
              {hasDropdown && dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-purple-900 to-indigo-800 rounded-lg shadow-xl transition-all ease-in-out duration-300 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                  {produkCategories.map((category) => (
                    <li key={category.name} className="relative">
                      <Link
                        to={category.href}
                        className="block py-2 px-4 text-white hover:bg-indigo-300 transition duration-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {category.name}
                      </Link>
                      {/* Subcategories for Kuota */}
                      {category.subcategories && (
                        <ul className="pl-4 mt-2 bg-indigo-700 rounded-lg transition-all ease-in-out">
                          {category.subcategories.map((sub) => (
                            <li key={sub}>
                              <Link
                                to={`/produk/kuota/${sub.toLowerCase()}`}
                                className="block py-2 px-4 text-white hover:bg-indigo-300 transition duration-300"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Ikon Sosmed Desktop */}
        <div className="hidden md:flex space-x-3">
  <a href="https://instagram.com/puka.cell.kudus/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300">
    <FaInstagram size={24} />
  </a>
  <a href="https://www.tiktok.com/@puka_baik" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300">
    <FaTiktok size={24} />
  </a>
  <a href="https://api.whatsapp.com/send?phone=628888008555&text" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300">
    <FaWhatsapp size={24} />
  </a>
  <a href="https://www.youtube.com/channel/UCjVTl6XcuSdizvCS9BsztMg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-300">
    <FaYoutube size={24} />
  </a>
</div>


        {/* Tombol Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4 space-y-4 bg-purple-900 py-4 px-6 rounded-lg shadow-lg`}>
        <ul className="space-y-2 text-white font-semibold">
          {menus.map(({ name, href, hasDropdown }) => (
            <li key={name}>
              <Link
                to={hasDropdown ? "#" : href}
                onClick={(e) => {
                  if (hasDropdown) {
                    e.preventDefault();
                    toggleDropdown();
                  } else {
                    handleMenuClick(name.toLowerCase()); // Set active menu when clicked
                  }
                }}
                className={`block transition duration-300 ease-in-out ${
                  activeMenu === name.toLowerCase() ? "text-indigo-300" : "hover:text-indigo-300"
                }`}
              >
                {name}
              </Link>
              {/* Mobile Dropdown for Produk */}
              {hasDropdown && dropdownOpen && (
                <ul className="mt-2">
                  {produkCategories.map((category) => (
                    <li key={category.name}>
                      <Link
                        to={category.href}
                        className="block py-2 px-4 text-white hover:bg-indigo-300"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {category.name}
                      </Link>
                      {/* Subcategories for Kuota */}
                      {category.subcategories && category.name === "Kuota" && (
                        <ul className="pl-4 mt-2 bg-indigo-700 rounded-lg transition-all ease-in-out">
                          {category.subcategories.map((sub) => (
                            <li key={sub}>
                              <Link
                                to={`/produk/kuota/${sub.toLowerCase()}`}
                                className="block py-2 px-4 text-white hover:bg-indigo-300 transition duration-300"
                                onClick={() => {
                                  setDropdownOpen(false);
                                  handleMenuClick("produk");
                                }}
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
