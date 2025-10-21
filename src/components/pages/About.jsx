export default function About() {
    return (
      <main className="bg-white text-slate-900">
        {/* Hero / Title */}
        <section className="bg-gradient-to-r from-cyan-100 via-cyan-50 to-white py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-800">
              About Fresh Tropic Cleaning
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Bringing fresh vibes to your space with expert cleaning, eco‑friendly solutions and a team you can trust.
            </p>
          </div>
        </section>
  
        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="bg-cyan-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold text-cyan-700">Our Mission</h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                To offer dependable, high‑quality cleaning services that bring peace,
                comfort and freshness to every home and office we serve.
              </p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold text-cyan-700">Our Vision</h2>
              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                To become the most trusted cleaning provider in the industry,
                known for professionalism, attention to detail, and exceptional customer experience.
              </p>
            </div>
          </div>
        </section>
  
        {/* What Makes Us Different */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900">What Makes Us Different</h2>
            <p className="mt-2 text-slate-600">
              More than cleaning — we bring care, reliability and excellence to every job.
            </p>
  
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Certified Professionals",
                  desc: "Our team is trained, background‑checked and fully committed to excellence."
                },
                {
                  title: "Eco‑Friendly Products",
                  desc: "We use safe, non‑toxic and biodegradable cleaning solutions for your family and the planet."
                },
                {
                  title: "Flexible Scheduling",
                  desc: "We work mornings, evenings and weekends — to fit your lifestyle and needs."
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border">
                  <h3 className="text-lg font-semibold text-cyan-700">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="bg-cyan-700 py-20 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold">Ready to experience freshness?</h2>
            <p className="mt-4 text-base">
              Let’s make your home or office sparkle. Contact us for a free estimate today.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block bg-white text-cyan-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition"
            >
              Get a Free Estimate
            </a>
          </div>
        </section>
      </main>
    );
  }
  
  