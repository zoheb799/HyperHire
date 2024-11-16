"use client";
import CrossIcon from "@/public/svgs/cross";
import InvertIcon from "@/public/svgs/Invert";
import Logo from "@/public/svgs/logonav";
import Menu from "@/public/svgs/menu";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="hidden bg-transparent lg:flex items-center justify-evenly p-4">
        <div>
          <Logo />
        </div>

        {/* Links */}
        <div className="flex gap-6 relative">
          {/* Home Link with Dropdown */}
          <div className="relative">
            <div className="flex justify-center items-center">
              <a
                href="#"
                className="flex items-center text-white hover:text-blue-300"
                onClick={toggleDropdown}
              >
                <span className="mr-2 font-black text-base leading-6">
                  채용
                </span>
                <InvertIcon />
              </a>
            </div>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                onMouseLeave={closeDropdown}
              >
                <a href="#" className="block p-1 text-black hover:bg-gray-100">
                  채용
                </a>
                <a href="#" className="block p-1 text-black hover:bg-gray-100">
                  해외 개발자 원격 채용
                </a>
                <a href="#" className="block p-1 text-black hover:bg-gray-100">
                  외국인 원격 채용 (비개발 직군)
                </a>
                <a href="#" className="block p-1 text-black hover:bg-gray-100">
                  한국어 가능 외국인 채용
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-white hover:text-blue-300 font-black text-base leading-6"
          >
            해외 개발자 활용 서비스
          </a>
        </div>

        <a
          href="#"
          className="bg-white text-[#4A77FF] px-4 py-2 rounded-md hover:bg-gray-100 font-black text-base leading-6"
        >
          문의하기
        </a>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center p-3 bg-transparent lg:hidden">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          {isNavOpen ? <CrossIcon/> : <Menu/>}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {isNavOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-400 text-white z-50 shadow-lg p-4">
          {/* Close Button */}
          <button
            className="text-white text-2xl focus:outline-none absolute top-4 right-4"
            onClick={toggleNav}
            aria-label="Close menu"
          >
            <CrossIcon/> 
          </button>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-6 mt-8">

            <Logo/>
            {/* Dropdown Link */}
            <div className="relative">
              <a
                href="#"
                className="flex items-center text-white hover:text-blue-300"
                onClick={toggleDropdown}
              >
                <span className="mr-2 font-black text-base leading-6">
                  채용
                </span>
                <InvertIcon />
              </a>

              {/* Dropdown Menu in Sidebar */}
              {isDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-black"
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href="#"
                    className="block p-1 hover:bg-gray-100"
                    onClick={closeNav}
                  >
                    채용
                  </a>
                  <a
                    href="#"
                    className="block p-1 hover:bg-gray-100"
                    onClick={closeNav}
                  >
                    해외 개발자 원격 채용
                  </a>
                  <a
                    href="#"
                    className="block p-1 hover:bg-gray-100"
                    onClick={closeNav}
                  >
                    외국인 원격 채용 (비개발 직군)
                  </a>
                  <a
                    href="#"
                    className="block p-1 hover:bg-gray-100"
                    onClick={closeNav}
                  >
                    한국어 가능 외국인 채용
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="hover:text-blue-300 font-black text-base leading-6"
              onClick={closeNav}
            >
              해외 개발자 활용 서비스
            </a>

            <a
              href="#"
              className="bg-white text-[#4A77FF] px-4 py-2 w-1/3 rounded-md hover:bg-gray-100 font-black text-base leading-6"
              onClick={closeNav}
            >
              문의하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
