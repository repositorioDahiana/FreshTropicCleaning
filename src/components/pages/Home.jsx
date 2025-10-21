export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero / Intro Section */}
      <section className="bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Discover a cleaner, healthier space ✨
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              FreshTropic Cleaning offers top-tier residential and commercial cleaning solutions
              tailored to your lifestyle and schedule. Trust, punctuality, and professionalism in every visit.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="/services" className="bg-cyan-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-cyan-700">
                Our Services
              </a>
              <a href="/about" className="border border-cyan-600 text-cyan-700 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-50">
                Learn More
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200"
              alt="Professional cleaners"
              className="w-full rounded-2xl shadow-lg object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Impact / Stats Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Why People Choose Us</h2>
          <p className="mt-2 text-slate-600">Numbers that reflect our commitment and trust.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-4xl font-extrabold text-cyan-600">+1,500</p>
              <p className="mt-1 text-sm text-slate-600">Spaces cleaned</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-cyan-600">98%</p>
              <p className="mt-1 text-sm text-slate-600">Customer satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-cyan-600">4.9★</p>
              <p className="mt-1 text-sm text-slate-600">Average rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery or Portfolio */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">See Our Work</h2>
          <p className="mt-2 text-slate-600">Real results from real spaces.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://unilimpio.com/static/a3929000b57b1d0cf3e20104bd5507a0/d00ff/productos-de-limpieza-para-tu-hogar.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH4twxNMMSlx5q4mGixqagwx2Jd3n3OjROA&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdq29Ofu3B3cogm2xTcepPQ5b7XSOGQ5Szw&s",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Cleaned space ${i + 1}`}
                className="rounded-xl object-cover w-full h-56"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-cyan-600 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to enjoy a spotless space?</h2>
          <p className="mt-4 text-lg">
            Book your first cleaning or reach out to learn more about how we can help.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="bg-white text-cyan-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100">
              Contact Us
            </a>
            <a href="/services" className="border border-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-cyan-700">
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
