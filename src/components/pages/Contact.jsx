export default function Contact() {
    return (
      <main className="bg-white text-slate-800">
        {/* Header */}
        <section className="bg-gradient-to-r from-cyan-100 via-white to-cyan-50 py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-700">Get in Touch</h1>
            <p className="mt-4 text-lg text-slate-700">
              Whether you're ready to book or just want to learn more, we’re happy to hear from you.
            </p>
          </div>
        </section>
  
        {/* Contact Form + Info */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-cyan-700">Contact Information</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Need a quote, have a question, or want to book a cleaning? Reach out via the form
                or directly using the info below.
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li><span className="font-medium">Phone:</span> (339) 035-521</li>
                <li><span className="font-medium">Email:</span> freshtropiccleaning@gmail.com</li>
                <li><span className="font-medium">Location:</span> United States (Remote & Local)</li>
                <li><span className="font-medium">Hours:</span> Mon–Sat, 8:00am–6:00pm</li>
              </ul>
            </div>
  
            {/* Contact Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for contacting us! We'll get back to you shortly.");
              }}
              className="bg-cyan-50 p-6 rounded-2xl shadow-md border"
            >
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows="4"
                    className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:border-cyan-600"
                    placeholder="Tell us about your space, needs, or questions"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="bg-cyan-700 py-16 text-white text-center">
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
  