
import { Link } from "react-router-dom";
import { useState,use } from "react";

export default function ContactPage() {
    const [message , setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(formData.name === "" || formData.email === "" || formData.message === "" ){
        alert("Kindly fill in the inputs")
        return
    }

    console.log("Contact message:", formData);
    setMessage("Thank you for your information,it will be taken to consideration")
    navigation(/)
}



  return (
    <div className="min-h-screen bg-[#e8eeff] font-sans antialiased flex flex-col relative overflow-hidden">

      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-200/40 pointer-events-none" />

      <div
        className="absolute bottom-0 inset-x-0 h-48 md:h-64 bg-indigo-200/30 pointer-events-none"
        style={{ clipPath: "polygon(50% 20%, 0% 100%, 100% 100%)" }}
      />

      {/* Header */}
      <header className="px-8 py-6 flex items-center justify-between z-10">
        <Link
          to="/"
          className="font-bold text-2xl tracking-tight text-slate-900"
        >
          Karia Medical
        </Link>

        <Link
          to="/"
          className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center px-6 py-12 z-10">

        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">

            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                Contact Us
              </h1>

              <p className="text-slate-500 text-sm mt-2">
                We're here to help. Reach out to Karia Medical with any
                questions or concerns.
              </p>
            </div>

            <div className="space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Phone
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  +254 700 000 000
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Email
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  info@kariamedical.com
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Location
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  Nairobi, Kenya
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Opening Hours
                </p>

                <p className="text-sm text-slate-600">
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>

                <p className="text-sm text-slate-600">
                  Saturday: 9:00 AM – 2:00 PM
                </p>
              </div>

            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-xs text-slate-500 leading-6">
                For medical emergencies, please seek immediate emergency
                medical assistance rather than relying on this contact form.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">

            <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="6"
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-slate-900 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200"
              >
                Send Message
              </button>

              <p>{message}</p>

            </form>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-indigo-100 z-10">
        © 2026 Karia Medical Clinic. All rights reserved.
      </footer>

    </div>
  );
}

