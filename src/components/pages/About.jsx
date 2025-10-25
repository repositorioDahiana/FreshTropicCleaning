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
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
          <div>
            <img
              src="/gallery1.jpg"
              alt="Our Mission"
              className="w-full h-72 object-cover rounded-2xl shadow-md animate-floatImage"
            />
          </div>
          <div className="bg-green-100 p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700">Our Mission</h2>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              To offer dependable, high-quality cleaning services that bring peace,
              comfort, and freshness to every home and office we serve.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 items-center gap-12">
          <div className="bg-green-100 p-8 rounded-2xl shadow-md order-2 md:order-1">
            <h2 className="text-xl font-semibold text-green-700">Our Vision</h2>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              To become the most trusted cleaning provider in the industry,
              known for professionalism, attention to detail, and exceptional customer experience.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/gallery5.jpg"
              alt="Our Vision"
              className="w-full h-72 object-cover rounded-2xl shadow-md animate-floatImage"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-green-800">What Makes Us Different</h2>
          <p className="mt-2 text-slate-600">
            More than cleaning — we bring care, reliability and excellence to every job.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Certified Professionals",
                desc: "Our team is trained, background-checked, and fully committed to excellence.",
                img: "/Img2.png",
              },
              {
                title: "Eco-Friendly Products",
                desc: "We use safe, non-toxic and biodegradable cleaning solutions for your family and the planet.",
                img: "/Img4.png",
              },
              {
                title: "Flexible Scheduling",
                desc: "We work mornings, evenings and weekends — to fit your lifestyle and needs.",
                img: "/Img5.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-lg transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-green-700">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to experience freshness?</h2>
          <p className="mt-4 text-base">
            Let’s make your home or office sparkle. Contact us for a free estimate today.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>
    </main>
  );
}
