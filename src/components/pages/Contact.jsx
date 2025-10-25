import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, phone, message };

    try {
      const res = await fetch("https://backend-freshtropiccleaning.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Your message was successfully saved!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Error connecting to the server.");
    }
  };

  return (
    <main className="bg-white text-slate-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-100 via-white to-lime-50 py-20 text-center animate-fadeInSlide">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Whether you're ready to book or just want to learn more, we’re happy
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 animate-fadeInUp">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-700">
              Contact Information
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Need a quote, have a question, or want to book a cleaning? Reach
              out via the form or directly using the info below.
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>
                <span className="font-medium text-green-700">📞 Phone:</span>{" "}
                (339) 035-521
              </li>
              <li>
                <span className="font-medium text-green-700">✉️ Email:</span>{" "}
                freshtropiccleaning@gmail.com
              </li>
              <li>
                <span className="font-medium text-green-700">📍 Location:</span>{" "}
                United States (Remote & Local)
              </li>
              <li>
                <span className="font-medium text-green-700">🕓 Hours:</span>{" "}
                Mon–Sat, 8:00am–6:00pm
              </li>
            </ul>

            <img
              src="/gallery1.jpg"
              alt="Friendly cleaning team"
              className="w-full rounded-2xl shadow-md object-cover mt-6 animate-floatImage"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-green-50 p-8 rounded-2xl shadow-lg border animate-fadeInUp"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-green-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-green-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-green-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-green-600 transition"
                  placeholder="Tell us about your space, needs, or questions"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-amber-500 hover:shadow-md transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 py-16 text-white text-center animate-fadeInSlide">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Let’s make your space sparkle!</h2>
          <p className="mt-2 text-base">
            We’ll get back to you within 24 business hours.
          </p>
        </div>
      </section>
    </main>
  );
}
