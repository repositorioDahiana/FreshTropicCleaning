export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-base font-semibold text-slate-900">Fresh Tropic Cleaning</h4>
          <p className="mt-2 text-sm text-slate-600">
            Professional cleaning services for homes and offices. Guaranteed punctuality, quality, and freshness.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-sm font-semibold text-slate-900">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>📞 (339) 035-521</li>
            <li>✉️ freshtropiccleaning@gmail.com</li>
            <li>📍 United States</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 py-6">
        © {new Date().getFullYear()} Fresh Tropic Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
