export default function About() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero / Title */}
      <section className="bg-gradient-to-r from-green-300 via-white to-lime-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">
            About Fresh Tropic Cleaning
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Bringing fresh vibes to your space with expert cleaning, eco-friendly solutions, and a team you can trust.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          {/* Imagen lateral */}
          <div className="animate-float">
            <img
              src="/gallery1.jpg"
              alt="Fresh Tropic Cleaning Team at Work"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="bg-green-100 p-8 md:p-10 rounded-2xl shadow-lg border border-green-200">
            <p className="text-base leading-relaxed mb-6 text-slate-800">
              At <span className="font-semibold text-green-700">Fresh Tropic Cleaning</span>, we take pride in providing
              high-quality cleaning services in Fort Myers and surrounding areas. With our skilled team and
              state-of-the-art equipment, we guarantee exceptional results.
            </p>
            <p className="text-base leading-relaxed text-slate-800">
              Our mission is centered around three core values:{" "}
              <span className="font-semibold text-green-700">Cleanliness, Organization, and Mental Health.</span> We’re not
              just a cleaning service — we’re a compassionate company committed to your well-being. A clean and organized
              space is essential for a healthy life, and we understand that better than anyone else.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-green-800">Our Achievements</h2>
          <p className="mt-2 text-slate-600">
            Numbers that reflect our commitment, growth, and excellence in every service.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Clean Homes */}
            <div className="flex flex-col items-center">
              <p className="text-5xl font-extrabold text-green-700">2500</p>
              <p className="mt-2 text-sm font-medium text-slate-700">Clean Homes</p>
            </div>

            {/* Professional Staffers */}
            <div className="flex flex-col items-center">
              <p className="text-5xl font-extrabold text-green-700">15+</p>
              <p className="mt-2 text-sm font-medium text-slate-700">Professional Staffers</p>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col items-center">
              <p className="text-5xl font-extrabold text-green-700">1500+</p>
              <p className="mt-2 text-sm font-medium text-slate-700">Happy Clients</p>
            </div>

            {/* Years in Business */}
            <div className="flex flex-col items-center">
              <p className="text-5xl font-extrabold text-green-700">4</p>
              <p className="mt-2 text-sm font-medium text-slate-700">Years in Business</p>
            </div>
          </div>
        </div>
      </section>      
    </main>
  );
}
