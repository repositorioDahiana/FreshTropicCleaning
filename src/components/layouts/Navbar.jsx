import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Item = ({ to, children, onClick }) => (
    <Link
      to={to}
      className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-cyan-700"
      onClick={(e) => {
        setOpen(false);
        if (onClick) onClick(e); 
      }}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Icono.png"
              alt="Logo Fresh Tropic Cleaning"
              className="h-10 w-10 object-contain"
            />
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-slate-900 relative -top-0.5">
                Fresh
              </span>
              <span className="text-xl font-semibold text-cyan-600 relative -top-0.5">
                Tropic
              </span>
              <span className="text-xl font-semibold text-slate-900 relative -top-0.5">
                Cleaning
              </span>
            </div>
          </Link>

          {/* Navegación escritorio */}
          <nav className="hidden md:flex items-center gap-1 ">
            <Item
              to="/"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Home
            </Item>
            <Item to="/about">About Us</Item>
            <Item to="/services">Services</Item>
            <Item to="/contact">Contact</Item>
            <Link
              to="/contact"
              className="ml-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
            >
              Free Estimate
            </Link>
          </nav>

          {/* Botón móvil */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            {/* Icono hamburguesa */}
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Icono de cerrar */}
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      {open && (
        <nav className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            <Link
              to="/"
              className="py-2 text-slate-700"
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-slate-700"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="py-2 text-slate-700"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="py-2 text-slate-700"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-2 rounded-xl bg-cyan-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-cyan-700"
              onClick={() => setOpen(false)}
            >
              Free Estimate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
