import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white px-6 py-12"
      style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#2D2D2D' }}
    >
      {/* Middle Section */}
      <div className="text-center mb-4">
        <h2 className="text-xl text-white mb-3">JOIN THE HAPPY CROWD</h2>
        <p className="text-xs font-light text-white mb-3">
          Get New Arrivals and Exclusive Offers in Your Inbox
        </p>
        <button className="text-xs bg-white hover:bg-white text-[#A3FE00] px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
          <FaWhatsapp className="text-lg" /> Join Our Whatsapp Channel
        </button>
      </div>

      {/* Top Section (Now 4 Columns) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 text-center md:text-left mb-4">
        {/* SL */}
        <div>
          <h3 className="font-bold text-lg text-white mb-2">SL:</h3>
          <p className="text-xs font-light text-white">
            TechWave Solutions 
            <br />
            123 Main Street
          </p>
          <p className="text-xs font-light text-white mt-2">
            24/7 Hotline:{" "}
            <a href="tel: +94 112 345 678 " className="hover:underline text-white">
              +94 112 345 678 
            </a>
          </p>
          <p className="text-xs font-light text-white">
            Email:{" "}
            <a href="mailto:info@techwave.com" className="hover:underline text-white">
              info@techwave.com 
            </a>
          </p>
          <p className="text-xs font-light text-white flex justify-center md:justify-start items-center gap-2 mt-2">
            <FaWhatsapp className="text-[#A3FE00] " />{" "}
            <span> +94 112 345 678 </span>
          </p>
        </div>

        {/* USA */}
        <div>
          <h3 className="font-bold text-lg text-white mb-2">USA:</h3>
          <p className="text-xs font-light text-white">
            TechWave Solutions 
            <br />
            123 Main Street
          </p>
          <p className="text-xs font-light text-white mt-2">
            (Phone/Fax: +1-859-215-0159)
          </p>
          <p className="text-xs font-light text-white">
            Email:{" "}
            <a href="mailto:lexingtonky.office@techwave.com" className="hover:underline text-white">
              lexingtonky.office@techwave.com
            </a>
          </p>
        </div>

        {/* UK */}
        <div>
          <h3 className="font-bold text-lg text-white mb-2">UK:</h3>
          <p className="text-xs font-light text-white">
            145-157 St John Street,
            <br />
            London EC1V 4PY,
            <br />
            United Kingdom
          </p>
          <p className="text-xs font-light text-white mt-2">
            (Phone/Fax: +44-207-078-4149)
          </p>
          <p className="text-xs font-light text-white">
            Email:{" "}
            <a href="mailto:london.office@techwave.com" className="hover:underline text-white">
              london.office@techwave.com
            </a>
          </p>
        </div>

        {/* AUSTRALIA */}
        <div>
          <h3 className="font-bold text-lg text-white mb-2">AU:</h3>
          <p className="text-xs font-light text-white">
            123 Collins Street,
            <br />
            Melbourne VIC 3000,
            <br />
            Australia
          </p>
          <p className="text-xs font-light text-white mt-2">
            (Phone/Fax: +61-3-9123-4567)
          </p>
          <p className="text-xs font-light text-white">
            Email:{" "}
            <a href="mailto:melbourne.office@techwave.com" className="hover:underline text-white">
              melbourne.office@techwave.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 text-center">
        {/* Links & Actions */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
          <button className="bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-white-300 text-xs">
            Sell with TechWave
          </button>

          <a href="#" className="hover:underline text-xs text-white">
            Download <span className="font-semibold">TechWave App</span>
          </a>
        </div>

        {/* New Links Section */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 font-light">
          <a href="#" className="hover:underline text-xs text-white">Read About TechWave</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline text-white">Reviews</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline text-white">Refund & Returns</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline text-white">Careers & Jobs</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-4 text-white font-light font-roboto">
        © TechWave Solutions. Online Shopping for{" "}
        <a href="#" className="text-white hover:underline">
          Customers Worldwide
        </a>
      </div>

      {/* Social Icons with Top Border */}
      <div className="border-t border-white pt-6 mt-6 flex justify-center space-x-6 text-base text-white">
        <a href="#" aria-label="Facebook" className="border-2 border-white rounded-full p-1.5 bg-white text-black transition-all text-sm">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter" className="border-2 border-white rounded-full p-1.5">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Instagram" className="border-2 border-white rounded-full p-1.5 bg-white text-black transition-all text-sm">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn" className="border-2 border-white rounded-full p-1.5 bg-white text-black transition-all text-sm">
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="YouTube" className="border-2 border-white rounded-full p-1.5">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;