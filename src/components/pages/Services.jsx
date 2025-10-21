export default function Services() {
    return (
      <main className="bg-white text-slate-800">
        {/* Hero / Intro */}
        <section className="bg-gradient-to-r from-cyan-100 via-white to-cyan-50 py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-700">Our Cleaning Services</h1>
            <p className="mt-4 text-lg text-slate-700">
              Flexible, reliable, and sparkling results. Choose the plan that fits your life.
            </p>
          </div>
        </section>
  
        {/* By Type of Service */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Choose Your Plan</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Hourly Cleaning",
                  desc: "Perfect for quick cleanups, last-minute guests, or flexible needs. Book as many hours as you need.",
                  image: "https://images.unsplash.com/photo-1598032896635-f0d2f48c92ac?q=80&w=800"
                },
                {
                  title: "Contract-Based Cleaning",
                  desc: "Ideal for offices, buildings or homes with regular schedules. Weekly, biweekly, or monthly contracts available.",
                  image: "https://images.unsplash.com/photo-1617692855029-6b8b57175b75?q=80&w=800"
                },
                {
                  title: "Deep Cleaning",
                  desc: "Detailed, room-by-room cleaning including corners, baseboards, appliances, and more. Great for seasonal or post-renovation needs.",
                  image: "https://images.unsplash.com/photo-1600047502449-bbdb0f3b3c4e?q=80&w=800"
                },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-cyan-700">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* By Type of Property */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">We Clean All Types of Spaces</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Apartments", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12?q=80&w=800" },
                { name: "Houses", image: "https://images.unsplash.com/photo-1615874959474-d609969a09c8?q=80&w=800" },
                { name: "Offices", image: "https://images.unsplash.com/photo-1589820296151-245aa6d7dc0f?q=80&w=800" },
                { name: "Vacation Rentals", image: "https://images.unsplash.com/photo-1600585154340-be6161f6361b?q=80&w=800" },
                { name: "Post-Move Cleaning", image: "https://images.unsplash.com/photo-1600585153783-42cf51f19873?q=80&w=800" },
                { name: "Retail & Commercial", image: "https://images.unsplash.com/photo-1578897367104-1cf03f135b7c?q=80&w=800" },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
                  <div className="p-4 text-center">
                    <h4 className="text-sm font-medium text-slate-800">{p.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-cyan-700 py-20 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold">Get a Free Estimate Today</h2>
            <p className="mt-4 text-base">
              Whether it’s a one-time deep clean or a recurring service, we’re here to help.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block bg-white text-cyan-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </main>
    );
  }
  