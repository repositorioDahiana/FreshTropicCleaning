export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero / Intro Section */}
      <section className="bg-gradient-to-b from-green-200 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 items-center gap-10">
          <div className="animate-fadeInSlide">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Discover a cleaner, healthier space 🌴
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              FreshTropic Cleaning offers top-tier residential and commercial cleaning solutions
              tailored to your lifestyle and schedule. Trust, punctuality, and professionalism in every visit.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="/services"
                className="bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-500 hover:shadow-md transition-all"
              >
                Our Services
              </a>
              <a
                href="/about"
                className="border border-green-700 text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-green-700 hover:text-white transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="animate-float">
            <img
              src="/ImagHome1.jpg"
              alt="Professional cleaners"
              className="w-full rounded-2xl shadow-lg object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Impact / Stats Section */}
      <section className="bg-green-100 py-20 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Why People Choose Us</h2>
          <p className="mt-2 text-slate-600">Numbers that reflect our commitment and trust.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="animate-pulseStat">
              <p className="text-4xl font-extrabold text-green-700">+1,500</p>
              <p className="mt-1 text-sm text-slate-600">Spaces cleaned</p>
            </div>
            <div className="animate-pulseStat [animation-delay:0.5s]">
              <p className="text-4xl font-extrabold text-green-700">98%</p>
              <p className="mt-1 text-sm text-slate-600">Customer satisfaction</p>
            </div>
            <div className="animate-pulseStat [animation-delay:1s]">
              <p className="text-4xl font-extrabold text-green-700">4.9★</p>
              <p className="mt-1 text-sm text-slate-600">Average rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Portfolio */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center animate-fadeInGallery">
          <h2 className="text-2xl font-bold text-slate-900">See Our Work</h2>
          <p className="mt-2 text-slate-600">Real results from real spaces.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "/gallery1.jpg",
              "/gallery2.jpg",
              "/gallery3.jpg",
              "/gallery4.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 animate-floatImage"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <img
                  src={src}
                  alt={`Cleaned space ${i + 1}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-green-700 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to enjoy a spotless space?</h2>
          <p className="mt-4 text-lg">
            Book your first cleaning or reach out to learn more about how we can help.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="border border-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-green-700 transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
