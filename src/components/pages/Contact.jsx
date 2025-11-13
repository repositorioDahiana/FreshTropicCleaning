import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaHome,
  FaUsers,
  FaFileAlt,
  FaGlobe,
  FaPinterestP,
} from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Contact() {
  const links = [
    // INTERNAL LINKS
    { icon: <FaUsers />, text: "Review Our Team", link: "/review", external: false },
    { icon: <FaFileAlt />, text: "Free Estimate", link: "/estimate", external: false },
    { icon: <FaGlobe />, text: "Visit Our Website", link: "/", external: false },

    // EXTERNAL LINKS
    { icon: <FaGoogle />, text: "See us on Google", link: "https://google.com", external: true },
    { icon: <FaFacebookF />, text: "See us on Facebook", link: "https://facebook.com", external: true },
    { icon: <FaInstagram />, text: "See us on Instagram", link: "https://instagram.com", external: true },
    { icon: <MdWork />, text: "See us on Bark", link: "https://bark.com", external: true },
    { icon: <GiHouse />, text: "See us on Angi", link: "https://angi.com", external: true },
    { icon: <RiToolsFill />, text: "See us on Thumbtack", link: "https://thumbtack.com", external: true },
    { icon: <GiHouse />, text: "See us on HomeAdvisor", link: "https://homeadvisor.com", external: true },
    { icon: <FaPinterestP />, text: "See us on Pinterest", link: "https://pinterest.com", external: true },
  ];

  return (
    <main className="bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col items-center justify-center text-center py-16 px-4">
      
      {/* Header */}
      <div className="flex flex-col items-center mb-10 animate-fadeInUp">
        <img
          src="/logo.png"
          alt="Fresh Tropic Cleaning Logo"
          className="h-24 w-24 rounded-full object-contain mb-4 shadow-lg border-4 border-green-200"
        />
        
        <h1 className="text-2xl font-bold text-green-700">
          Fresh Tropic Cleaning
        </h1>

        <p className="mt-2 text-slate-700 text-sm max-w-md">
          Family-owned and operated cleaning services powered by quality and innovation.
        </p>

        <div className="flex gap-4 mt-4 text-green-700 text-xl">
          <a href="https://wa.me/2395026166" target="_blank" rel="noreferrer">
            <FaWhatsapp className="hover:text-amber-500 transition" />
          </a>

          <a href="mailto:freshtropiccleaning@gmail.com">
            <FaEnvelope className="hover:text-amber-500 transition" />
          </a>
        </div>
      </div>

      {/* Linktree Buttons */}
      <div className="w-full max-w-sm space-y-4 animate-fadeInUp">
        {links.map((item, idx) =>
          item.external ? (
            // 🔗 EXTERNAL LINKS
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full bg-white border border-green-200 shadow-md hover:shadow-lg rounded-xl px-5 py-3 text-green-700 font-medium hover:bg-green-100 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
              <span className="text-slate-400">›</span>
            </a>
          ) : (
            // 🔗 INTERNAL LINKS (same tab)
            <Link
              key={idx}
              to={item.link}
              className="flex items-center justify-between w-full bg-white border border-green-200 shadow-md hover:shadow-lg rounded-xl px-5 py-3 text-green-700 font-medium hover:bg-green-100 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
              <span className="text-slate-400">›</span>
            </Link>
          )
        )}
      </div>
    </main>
  );
}
