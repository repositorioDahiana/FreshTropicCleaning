import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Item = ({ to, children, onClick }) => (
    <Link
      to={to}
      className="relative px-3 py-2 text-sm font-bold text-slate-700 hover:text-green-700 transition-colors duration-300 group"
      onClick={(e) => {
        setOpen(false);
        if (onClick) onClick(e);
      }}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-gradient-to-r from-green-50 via-white to-amber-50/70 backdrop-blur-sm shadow-md transition-all duration-500">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Logo animado */}
            <img
              src="/logo.png"
              alt="Logo Fresh Tropic Cleaning"
              className="h-10 w-10 object-contain animate-[sway_4s_ease-in-out_infinite]"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-slate-900 relative -top-0.5">
                Fresh
              </span>
              <span className="text-xl font-semibold text-green-700 relative -top-0.5">
                Tropic
              </span>
              <span className="text-xl font-semibold text-slate-900 relative -top-0.5">
                Cleaning
              </span>
            </div>
          </Link>

          {/* Navegación escritorio */}
          <nav className="hidden md:flex items-center gap-1">
            <Item
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Item>
            <Item to="/about">About Us</Item>
            <Item to="/services">Services</Item>
            <Link
              to="/estimate"
              className="ml-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500 hover:shadow-[0_0_10px_rgba(255,200,0,0.5)] transition-all duration-300"
            >
              Free Estimate
            </Link>
          </nav>

          {/* Botón móvil */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-green-50 transition-colors"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            {!open ? (
              <svg
                className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 transition-transform duration-300 rotate-90 text-green-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t bg-white shadow-inner animate-fadeIn">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            <Link
              to="/"
              className="py-2 text-slate-700 hover:text-green-700 transition-all"
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-slate-700 hover:text-green-700 transition-all"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="py-2 text-slate-700 hover:text-green-700 transition-all"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="mt-2 rounded-xl bg-green-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-amber-500 hover:shadow-[0_0_10px_rgba(255,200,0,0.5)] transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Free Estimate
            </Link>
          </div>
        </nav>
      </div>

      {/* Animaciones personalizadas */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
