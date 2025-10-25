import { Phone } from "lucide-react"; 
import { Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t bg-white text-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo Fresh Tropic Cleaning"
            className="h-8 w-8 object-contain"
          />
          <span className="text-sm font-semibold text-slate-900">
            Fresh Tropic Cleaning
          </span>
        </div>

        {/* Navegación corta */}
        <nav className="flex items-center gap-2 text-sm text-green-700 font-semibold">
          <Mail className="h-4 w-4" />
          <span>freshtropiccleaning@gmail.com</span>
        </nav>


        {/* Contacto con ícono */}
        <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">
          <Phone className="h-4 w-4" />
          <span>(339) 035-521</span>
        </div>
      </div>

      {/* Línea inferior pequeña */}
      <div className="border-t border-slate-200 text-center text-xs text-slate-500 py-3">
        © {new Date().getFullYear()} Fresh Tropic Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
