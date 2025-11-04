export default function Services() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero / Intro */}
      <section className="bg-gradient-to-r from-green-300 via-white to-lime-50 py-20 text-center animate-fadeInSlide">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            Our Cleaning Services
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Flexible, reliable, and sparkling results. Choose the plan that fits your life.
          </p>
        </div>
      </section>

      {/* By Type of Service */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Hourly Cleaning",
                desc: "Perfect for quick cleanups, last-minute guests, or flexible needs. Book as many hours as you need.",
                image: "/gallery5.jpg",
              },
              {
                title: "Contract-Based Cleaning",
                desc: "Ideal for offices, buildings or homes with regular schedules. Weekly, biweekly, or monthly contracts available.",
                image: "/Img1.jpg",
              },
              {
                title: "Deep Cleaning",
                desc: "Detailed, room-by-room cleaning including corners, baseboards, appliances, and more. Great for seasonal or post-renovation needs.",
                image: "/Img7.jpg",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-48 w-full object-cover animate-floatImage"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-green-700">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Type of Property */}
      <section className="bg-green-100 py-20">
        <div className="max-w-6xl mx-auto px-4 animate-fadeInGallery">
          <h2 className="text-2xl font-bold text-green-800 text-center mb-12">
            We Clean All Types of Spaces
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Apartments", image: "/Img6.jpg" },
              { name: "Houses", image: "/Img8.jpg" },
              { name: "Offices", image: "/service2.jpg" },
              { name: "Vacation Rentals", image: "/service6.png" },
              { name: "Post-Move Cleaning", image: "/Img8.jpg" },
              { name: "Retail & Commercial", image: "/service3.jpg" },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all duration-500"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-40 w-full object-cover animate-floatImage"
                />
                <div className="p-4 text-center">
                  <h4 className="text-sm font-medium text-green-700">
                    {p.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
