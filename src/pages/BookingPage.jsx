import { useState } from "react";
import { Link } from "react-router-dom";

const DOCTORS = [
  { name: "Dr John Kamau", speciality: "Surgeon" },
  { name: "Dr Naomi Kiarie", speciality: "Nursing" },
];

const SERVICES = [
  "Treatment of common illnesses",
  "First aid and management of minor wounds",
  "Antenatal care check-ups",
  "Basic disease screening",
  "Deworming and supplementation programs",
];

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log("Appointment:", formData);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#e8eeff] font-sans antialiased flex flex-col justify-between relative overflow-hidden">
        {/* Background Decorative Graphic Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-200/40 pointer-events-none" />
        <div 
          className="absolute bottom-0 inset-x-0 h-48 md:h-64 bg-indigo-200/30 pointer-events-none"
          style={{ clipPath: "polygon(50% 20%, 0% 100%, 100% 100%)" }}
        />

        {/* Top Header Navigation */}
        <header className="px-8 py-6 flex items-center justify-between z-10">
          <Link to="/" className="font-bold text-2xl tracking-tight text-slate-900">
            Karia Medical
          </Link>
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </header>

        {/* Success Confirmation Card */}
        <main className="flex-1 flex items-center justify-center px-6 py-12 z-10">
          <div className="w-full max-w-lg bg-white border border-slate-200 p-8 sm:p-10 text-center shadow-sm">
            <div className="w-16 h-16 mx-auto border border-slate-900 bg-[#e8eeff] flex items-center justify-center mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-900"
              >
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              Appointment Requested
            </h1>

            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your appointment request has been received. Our patient coordinator will contact you to confirm details.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="w-full mt-8 border border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
            >
              Book Another Appointment
            </button>
          </div>
        </main>

        <footer className="py-6 text-center text-xs text-slate-500 border-t border-indigo-100 z-10">
          © 2026 Karia Medical Clinic. All rights reserved.
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e8eeff] font-sans antialiased flex flex-col justify-between relative overflow-hidden">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-200/40 pointer-events-none" />
      <div 
        className="absolute bottom-0 inset-x-0 h-48 md:h-64 bg-indigo-200/30 pointer-events-none"
        style={{ clipPath: "polygon(50% 20%, 0% 100%, 100% 100%)" }}
      />

      {/* Header */}
      <header className="px-8 py-6 flex items-center justify-between z-10 border-b border-indigo-100/60 bg-[#e8eeff]/80 backdrop-blur-sm">
        <Link to="/" className="font-bold text-2xl tracking-tight text-slate-900">
          Karia Medical
        </Link>
        <Link
          to="/"
          className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-12 pb-20 z-10">
        {/* Page Title Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Patient Booking
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mt-2">
            Book an Appointment
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
            Schedule your visit with one of our healthcare professionals. Please provide your details below to finalize your booking request.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Panel - Clinic Info */}
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <div className="w-12 h-12 border border-slate-900 bg-[#e8eeff] flex items-center justify-center mb-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-slate-900"
              >
                <rect x="3" y="4" width="18" height="18" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
              Your Visit
            </h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Select your preferred clinical service, doctor, and schedule.
            </p>

            <div className="mt-8 space-y-6 border-t border-slate-100 pt-6">
              <div className="flex gap-4 items-start">
                <span className="font-bold text-xs border border-slate-900 px-2 py-0.5 text-slate-900">
                  01
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Easy Booking
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete the online form in just a few minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="font-bold text-xs border border-slate-900 px-2 py-0.5 text-slate-900">
                  02
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Flexible Hours
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Appointments available Monday to Saturday.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="font-bold text-xs border border-slate-900 px-2 py-0.5 text-slate-900">
                  03
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Direct Support
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Call line: +233 30 290 0001
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 mt-8 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Operating Hours
              </p>
              <p className="text-xs font-semibold text-slate-900 mt-1">
                Mon – Sat · 7:00 AM – 8:00 PM
              </p>
            </div>
          </div>

          {/* Right Panel - Booking Form */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                  Patient Details
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your information to schedule your consultation.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
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
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    required
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Medical Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Doctor */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Preferred Doctor
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                >
                  <option value="">Select a doctor</option>
                  {DOCTORS.map((doctor) => (
                    <option key={doctor.name} value={doctor.name}>
                      {doctor.name} — {doctor.speciality}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Reason for Visit
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Briefly describe the reason for your visit..."
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 border border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-slate-900 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              >
                Request Appointment
              </button>

              <p className="text-center text-xs text-slate-400">
                By submitting this form, you agree to be contacted regarding your appointment request.
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer Strip */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-indigo-100 z-10">
        © 2026 Karia Medical Clinic. All rights reserved.
      </footer>
    </div>
  );
}

export default Booking;