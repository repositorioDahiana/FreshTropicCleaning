import { Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-600 text-white py-12">
      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-center items-start md:items-center text-center md:text-left gap-12">
        {/* Columna 1 - Nombre + Descripción */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <h2 className="text-lg font-extrabold tracking-wide uppercase mb-2">
            Fresh Tropic Cleaning
          </h2>
          <p className="text-sm text-green-100 leading-relaxed">
            Cleaning services for all. <br />
            Proudly serving for up to 50 <br />
            Miles from Fort Myers, FL
          </p>
        </div>

        {/* Columna 2 - Contact Info */}
        <div className="flex flex-col items-center md:items-center w-full md:w-1/3">
          <h3 className="text-md font-semibold mb-3">Contact Info</h3>
          <p className="flex items-center justify-center gap-2 text-sm text-green-100">
            <Phone className="h-4 w-4" /> (239) 502 6166
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-green-100 mt-2">
            <Mail className="h-4 w-4" />
            freshtropiccleaning@gmail.com
          </p>
        </div>

        {/* Columna 3 - Operating Hours */}
        <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
          <h3 className="text-md font-semibold mb-3">Operating Hours</h3>
          <p className="text-sm text-green-100">24 hours a day</p>
          <p className="text-sm text-green-100">7 days a week</p>
          <p className="text-sm text-green-100">365 days a year</p>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-5 mt-10 text-green-100">
        <FaGoogle className="hover:text-white cursor-pointer transition" />
        <FaTiktok className="hover:text-white cursor-pointer transition" />
        <FaYoutube className="hover:text-white cursor-pointer transition" />
        <FaFacebookF className="hover:text-white cursor-pointer transition" />
        <FaInstagram className="hover:text-white cursor-pointer transition" />
        <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
      </div>

      {/* Línea inferior */}
      <div className="text-center text-xs text-green-100 mt-8 border-t border-green-400 pt-4">
        © {new Date().getFullYear()} Fresh Tropic Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
