import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero / Intro Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
        {/* Background Image */}
        <img
          src="/ImagHome1.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-700/30 to-transparent z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-wide">
            WE, CLEAN.
          </h1>

          {/* Botones actuales */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:2395026166"
              className="border-2 border-white text-white px-6 py-3 font-semibold rounded-xl hover:bg-white hover:text-green-700 transition-all"
            >
              CALL/TEXT: (239) 502 6166
            </a>

            <Link
              to="/contact"
              className="bg-green-900 text-white px-6 py-3 font-semibold rounded-xl hover:bg-amber-500 transition-all"
            >
              OUR LINKS
            </Link>

            <Link
              to="/hiring"
              className="border-2 border-white text-white px-6 py-3 font-semibold rounded-xl hover:bg-white hover:text-green-700 transition-all"
            >
              NOW HIRING
            </Link>
          </div>

          {/* Nuevo Botón: FREE ESTIMATE */}
          <div className="mt-8">
            <Link
              to="/estimate"
              className="bg-green-900 text-white text-xl font-bold px-10 py-4 rounded-2xl shadow-lg hover:bg-amber-400 transition-all"
            >
              FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>


      {/* Impact / Stats Section */}
      <section className="bg-green-100 py-16 text-center animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">WHY CHOOSE US?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Certified Professional Cleaners",
              "Environmentally Friendly Cleaning",
              "100% Satisfaction Guaranteed",
              "Available Evenings & Weekends",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-center text-slate-800 gap-2"
              >
                <span className="h-6 w-[2px] bg-green-700"></span>
                <p className="font-medium leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery / Portfolio */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center animate-fadeInGallery">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">OUR SERVICES</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: "/service1.jpg", color: "bg-pink-400/40", text: "Home Cleaning" },
              { img: "/service2.jpg", color: "bg-blue-500/40", text: "Maid Services" },
              { img: "/service3.jpg", color: "bg-cyan-400/40", text: "Window Washing" },
              { img: "/service4.png", color: "bg-green-400/40", text: "Commercial Cleaning" },
              { img: "/service5.png", color: "bg-lime-400/40", text: "Move-In / Move-Out Cleaning" },
              { img: "/service6.png", color: "bg-rose-500/40", text: "Vacation Rentals" },
            ].map((service, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
              >
                <img
                  src={service.img}
                  alt={service.text}
                  className="w-full h-56 object-cover brightness-95"
                />
                <div
                  className={`absolute inset-0 ${service.color} flex items-center justify-center`}
                >
                  <p className="text-white text-lg font-semibold drop-shadow-lg">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 py-16 text-center animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-12">BENEFITS</h2>

          <div className="space-y-12">
            {/* Card 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/benefit1.jpg"
                alt="Choosing Maravilla Cleaners"
                className="rounded-xl shadow-lg object-cover w-full h-64"
              />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Benefits of Fresh Tropic Cleaning
                </h3>
                <p className="text-slate-700">
                  We pride ourselves on being a cleaning company that strives for total quality
                  for our clients in Lee and Collier County as well as…
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/benefit2.jpg"
                alt="Customer Service"
                className="rounded-xl shadow-lg object-cover w-full h-64 md:order-2"
              />
              <div className="md:order-1">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Excellent Customer Service: Satisfaction Guaranteed
                </h3>
                <p className="text-slate-700">
                  Customers are not just looking for a spotless home or office; they also want to
                  feel valued and respected.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="/benefit3.jpg"
                alt="Competitive Pricing"
                className="rounded-xl shadow-lg object-cover w-full h-64"
              />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Competitive Pricing and Flexible Scheduling Options
                </h3>
                <p className="text-slate-700">
                  We understand the importance of price when it comes to choosing a cleaning
                  service, and we adapt to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
