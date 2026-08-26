import { useState } from "react"

const DOCTORS = [{
    name: "Dr John Kamau",
    speciality: "Surgeon"
},
{
name: "Dr Naomi Kiarie",
speciality: "Nursing"
}
]

const SERVICES = [
    "Treatment of common ilnesses",
    "First aid and management if minor wounds",
    "Antenatal care check-ups",
    "Basic disease screening",
    "Deworming and supplementation programs"
]

function Booking() {
    const [formData , setFormData] = useState(
        {
    name: "",
    email: "",
    phone: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
        }
    )

    const [submitted , setSubmitted] = useState(false);

    function handleChange() {
        const {name , value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    function handleSubmittion(){
        setSubmitted(true);
        console.log("Appointment:",  formData)
    }
    if(submitted) {(
         <div className="min-h-screen hero-gradient flex items-center justify-center px-6 pt-20">
        <div className="glass rounded-3xl p-10 max-w-lg w-full text-center shadow-xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className="font-serif text-4xl text-slate-800">
            Appointment Requested
          </h1>

          <p className="text-slate-500 mt-4 leading-relaxed">
            Thank you, {formData.name}. Your appointment request has been
            received. Our patient coordinator will contact you to confirm the
            appointment.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary mt-7 px-6 py-3 rounded-xl font-semibold"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-gradient pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Patient Booking
          </span>

          <h1 className="font-serif text-4xl md:text-5xl text-slate-800 mt-2">
            Book an Appointment
          </h1>

          <p className="text-slate-500 max-w-xl mx-auto mt-4 leading-relaxed">
            Schedule your visit with one of our healthcare professionals.
            Please provide the information below and our team will confirm
            your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left information panel */}
          <div className="glass rounded-3xl p-7 shadow-lg h-fit">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#059669"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>

            <h2 className="font-serif text-2xl text-slate-800">
              Your Visit
            </h2>

            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              Choose your preferred service, doctor, date and time.
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Easy Booking
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Complete the form in just a few minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  🕐
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Flexible Hours
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Appointments available Monday to Saturday.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                  ☎
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Need Help?
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    Call +233 30 290 0001
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 mt-7 pt-6">
              <p className="text-xs text-slate-400">Working Hours</p>

              <p className="text-sm font-semibold text-slate-700 mt-1">
                Mon – Sat · 7 AM – 8 PM
              </p>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-2 glass rounded-3xl p-7 md:p-9 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <h2 className="font-serif text-2xl text-slate-800">
                  Patient Information
                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  Please enter your personal details.
                </p>
              </div>

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                  />
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Medical Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
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
              <div className="mt-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Preferred Doctor
                </label>

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                >
                  <option value="">Select a doctor</option>

                  {DOCTORS.map((doctor) => (
                    <option key={doctor.name} value={doctor.name}>
                      {doctor.name} — {doctor.specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date + Time */}
              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Preferred Time
                  </label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
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
              <div className="mt-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Reason for Visit
                </label>

                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Briefly describe the reason for your visit..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/70 outline-none resize-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full mt-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>

                Request Appointment
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                By submitting this form, you agree to be contacted regarding
                your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    )}
export default Booking