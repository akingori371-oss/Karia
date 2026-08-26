
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Booking from "./pages/Bookingpage";

const NAV_LINKS = [
  "Services",
  "About",
  "Doctors",
  "Patient Portal",
  "Contact",
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #059669, #3b5f8a)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="white"
                opacity="0.5"
              />
              <path
                d="M11 7h2v4h4v2h-4v4h-2v-4H7v-2h4V7z"
                fill="white"
              />
            </svg>
          </div>

          <span className="font-serif text-lg text-slate-800 leading-tight">
            Karia Medical
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors">
            Sign In
          </button>

          <Link
            to="/booking"
            className="btn-primary px-5 py-2 text-sm font-semibold rounded-xl"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            {menuOpen ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/30 px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-slate-600 py-1"
            >
              {link}
            </a>
          ))}

          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="btn-primary px-5 py-2.5 text-sm font-semibold rounded-xl mt-2 text-center"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}

function HeroBadge({ label }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
      style={{
        background: "rgba(5,150,105,0.1)",
        color: "#047857",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
      {label}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">
      <div
        className="absolute top-16 right-0 w-[480px] h-[480px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.4) 0%, transparent 70%)",
          transform: "translate(30%, -20%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,95,138,0.5) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col gap-6">
          <HeroBadge label="Level 2 Accredited Medical Centre" />

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-800 leading-[1.08]">
            Karia
            <br />
            <span style={{ color: "#059669" }}>Medical</span>
            <br />
            Clinic
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-md font-sans">
            Compassionate, evidence-based healthcare for every stage of life —
            from primary care to specialized maternal and laboratory services.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="/booking"
              className="btn-primary px-6 py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2"
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
              Book Outpatient Appointment
            </Link>

            <button className="btn-secondary px-6 py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
              Pharmacy &amp; Lab Services
            </button>

            <button className="btn-emergency px-5 py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.01z" />
              </svg>
              Emergency Contacts
            </button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <Stat value="12,400+" label="Patients Served" />
            <div className="w-px h-10 bg-slate-200" />
            <Stat value="98%" label="Satisfaction Rate" />
            <div className="w-px h-10 bg-slate-200" />
            <Stat value="24/7" label="Emergency Line" />
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-4 relative">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-serif text-2xl text-slate-800">{value}</div>
      <div className="text-xs text-slate-500 font-medium mt-0.5">{label}</div>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div
        className="glass rounded-3xl p-6 shadow-xl float-anim"
        style={{
          boxShadow:
            "0 20px 60px rgba(5,150,105,0.12), 0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Next Appointment
            </p>

            <p className="font-serif text-xl text-slate-800 mt-0.5">
              Dr. John Kiarie
            </p>

            <p className="text-sm text-slate-500">
              General Practitioner
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&auto=format"
            alt="Doctor portrait"
            className="w-14 h-14 rounded-2xl object-cover"
          />
        </div>

        <div
          className="flex items-center gap-3 p-3 rounded-xl"
          style={{ background: "rgba(5,150,105,0.07)" }}
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#059669">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Monday, 25 Aug 2026
            </p>
            <p className="text-xs text-slate-500">
              10:30 AM · Room 4B
            </p>
          </div>

          <div className="ml-auto">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(5,150,105,0.12)",
                color: "#047857",
              }}
            >
              Confirmed
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: "Heart Rate", value: "72 bpm", icon: "❤️" },
            { label: "Blood Pressure", value: "118/76", icon: "🩺" },
            { label: "Weight", value: "68 kg", icon: "⚖️" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-2.5 text-center"
              style={{ background: "rgba(241,245,249,0.8)" }}
            >
              <div className="text-lg">{item.icon}</div>
              <div className="text-sm font-semibold text-slate-700 mt-0.5">
                {item.value}
              </div>
              <div className="text-xs text-slate-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2"
        style={{
          boxShadow: "0 8px 24px rgba(59,95,138,0.15)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
        <span className="text-xs font-semibold text-slate-700">
          12 Doctors Available
        </span>
      </div>
    </div>
  );
}

const SERVICES = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2z" />
        <path d="M20 21a8 8 0 10-16 0" />
        <path d="M12 16v2m0 0v2m0-2h2m-2 0h-2" />
      </svg>
    ),
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    tag: "Primary Care",
    title: "General Practice & Family Medicine",
    desc: "Comprehensive outpatient care for adults and children — chronic disease management, preventive health, and same-day consultations.",
    details: [
      "Adult & Paediatric Care",
      "Hypertension & Diabetes",
      "Preventive Screenings",
      "Vaccinations",
    ],
    available: "Mon – Sat, 7 AM – 8 PM",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    color: "#3b5f8a",
    bg: "rgba(59,95,138,0.08)",
    tag: "Maternal Health",
    title: "Antenatal & Postnatal Services",
    desc: "Dedicated maternity care from conception through postpartum recovery, with a certified midwife team and specialist referral pathways.",
    details: [
      "Antenatal Monitoring",
      "High-Risk Pregnancy",
      "Postnatal Visits",
      "Family Planning",
    ],
    available: "Mon – Fri, 8 AM – 5 PM",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M9 3H5a2 2 0 00-2 2v4" />
        <path d="M9 3h10a2 2 0 012 2v4M9 3v18" />
        <path d="M9 21H5a2 2 0 01-2-2V9" />
        <path d="M9 21h10a2 2 0 002-2V9" />
        <path d="M3 9h18" />
        <circle cx="16" cy="15" r="1.5" />
        <path d="M16 13v-.5M16 17v.5M14 15h-.5M18 15h.5" />
      </svg>
    ),
    color: "#7c5c28",
    bg: "rgba(124,92,40,0.08)",
    tag: "Laboratory",
    title: "Diagnostic & Laboratory Testing",
    desc: "On-site diagnostic laboratory with same-day results for routine panels, cultures, and specialized tests. Linked to our in-house pharmacy.",
    details: [
      "Complete Blood Count",
      "Urine & Stool Analysis",
      "Malaria RDT",
      "Glucose & Lipid Panels",
    ],
    available: "Mon – Sat, 7 AM – 6 PM",
  },
];

function ServiceCard({ s, idx }) {
  return (
    <div
      className="glass card-hover rounded-3xl p-7 flex flex-col gap-5 group cursor-default"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
        animationDelay: `${idx * 0.1}s`,
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: s.bg,
            color: s.color,
          }}
        >
          {s.icon}
        </div>

        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: s.bg,
            color: s.color,
          }}
        >
          {s.tag}
        </span>
      </div>

      <div>
        <h3 className="font-serif text-xl text-slate-800 leading-snug mb-2">
          {s.title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed">
          {s.desc}
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-y-1.5 gap-x-2">
        {s.details.map((detail) => (
          <li
            key={detail}
            className="flex items-center gap-1.5 text-xs text-slate-600"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: s.color }}
            />
            {detail}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {s.available}
        </div>

        <button
          className="text-xs font-semibold flex items-center gap-1 transition-colors"
          style={{ color: s.color }}
        >
          Learn more
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              Our Specialties
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mt-2 leading-tight">
              Comprehensive Care
              <br />
              Under One Roof
            </h2>
          </div>

          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Our multidisciplinary teams work in coordinated units so patients
            receive holistic, continuous care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.tag}
              s={service}
              idx={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const DOCTORS = [
  {
    name: "Dr. Naomi Wambui",
    specialty: "General Practitioner",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&auto=format",
    rating: 4.9,
    patients: 1840,
    available: true,
  },
  {
    name: "Dr. Caroline",
    specialty: "Obstetrician & Gynaecologist",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&auto=format",
    rating: 4.8,
    patients: 1260,
    available: true,
  },
  {
    name: "Dr. Kwame Asante",
    specialty: "Internal Medicine",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&auto=format",
    rating: 4.7,
    patients: 990,
    available: false,
  },
  {
    name: "Dr. Lillian Mwangi",
    specialty: "Paediatrician",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&auto=format",
    rating: 4.9,
    patients: 2100,
    available: true,
  },
];

function DoctorCard({ d }) {
  return (
    <div
      className="glass card-hover rounded-3xl p-5 flex flex-col items-center text-center gap-4"
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <div className="relative">
        <img
          src={d.img}
          alt={d.name}
          className="w-20 h-20 rounded-2xl object-cover"
        />

        <span
          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            d.available ? "bg-emerald-400" : "bg-slate-300"
          }`}
        />
      </div>

      <div>
        <p className="font-serif text-lg text-slate-800">
          {d.name}
        </p>

        <p className="text-xs text-slate-500 mt-0.5">
          {d.specialty}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#f59e0b"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {d.rating}
        </span>

        <span>{d.patients.toLocaleString()} patients</span>
      </div>

      {d.available ? (
        <Link
          to="/booking"
          className="w-full py-2 rounded-xl text-xs font-semibold transition-all btn-primary text-center"
        >
          Book Appointment
        </Link>
      ) : (
        <button
          className="w-full py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-400 cursor-not-allowed"
          disabled
        >
          Unavailable Today
        </button>
      )}
    </div>
  );
}

function Doctors() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(180deg, #f0f5f1 0%, #f7f8f4 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Our Specialists
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mt-2">
            Meet Your Doctors
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.name} d={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoStrip() {
  const items = [
    {
      label: "Emergency Hotline",
      value: "+233 30 290 0001",
      color: "#dc2626",
      bg: "rgba(239,68,68,0.07)",
    },
    {
      label: "Location",
      value: "14 Hospital Rd, Accra, GH",
      color: "#059669",
      bg: "rgba(5,150,105,0.07)",
    },
    {
      label: "Working Hours",
      value: "Mon – Sat · 7 AM – 8 PM",
      color: "#3b5f8a",
      bg: "rgba(59,95,138,0.07)",
    },
    {
      label: "Online Booking",
      value: "Available 24 / 7",
      color: "#7c5c28",
      bg: "rgba(124,92,40,0.07)",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="glass rounded-2xl p-5 flex flex-col gap-3"
            style={{
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: item.bg,
                color: item.color,
              }}
            >
              {item.label === "Emergency Hotline" && "☎"}
              {item.label === "Location" && "⌖"}
              {item.label === "Working Hours" && "◷"}
              {item.label === "Online Booking" && "▣"}
            </div>

            <div>
              <p className="text-xs text-slate-400 font-medium">
                {item.label}
              </p>

              <p className="text-sm font-semibold text-slate-700 mt-0.5">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Grace Mensah",
      role: "Antenatal Patient",
      text: "The maternal care team made my entire pregnancy feel safe and supported. Every visit was thorough and the midwives were incredibly attentive.",
      rating: 5,
    },
    {
      name: "Emmanuel Tetteh",
      role: "Regular Patient",
      text: "I've been bringing my family here for three years. The GPs take the time to actually listen. Lab results are ready same day which is a game changer.",
      rating: 5,
    },
    {
      name: "Abena Frimpong",
      role: "Post-surgery Follow-up",
      text: "The follow-up care after my procedure was exceptional. The nursing staff called to check in every day. Highly recommend Karia to anyone.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Patient Voices
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mt-2">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="glass card-hover rounded-3xl p-7 flex flex-col gap-4"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#f59e0b"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>

              <div>
                <p className="font-semibold text-sm text-slate-800">
                  {review.name}
                </p>

                <p className="text-xs text-slate-400 mt-0.5">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, #047857 0%, #3b5f8a 100%)",
            boxShadow: "0 24px 64px rgba(5,150,105,0.3)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">
                Ready to take the next step
                <br className="hidden md:block" />
                toward better health?
              </h2>

              <p className="text-white/70 mt-3 text-sm max-w-md leading-relaxed">
                Our patient coordinators are here to help you find the right
                specialist, schedule your visit, and answer any questions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/booking"
                className="px-7 py-3.5 rounded-2xl font-semibold text-sm bg-white text-emerald-800 transition-all hover:bg-emerald-50 hover:shadow-lg"
              >
                Book Appointment
              </Link>

              <button className="px-7 py-3.5 rounded-2xl font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-all">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      heading: "Services",
      links: [
        "Primary Care",
        "Maternal Health",
        "Laboratory",
        "Pharmacy",
        "Emergency",
      ],
    },
    {
      heading: "Patients",
      links: [
        "Book Appointment",
        "Patient Portal",
        "Lab Results",
        "Prescriptions",
        "Insurance",
      ],
    },
    {
      heading: "Contact",
      links: [
        "14 Hospital Rd, Accra",
        "+233 30 290 0001",
        "info@kariamedical.gh",
        "Mon–Sat 7AM–8PM",
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #059669, #3b5f8a)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 7h2v4h4v2h-4v4h-2v-4H7v-2h4V7z"
                  fill="white"
                />
              </svg>
            </div>

            <span className="font-serif text-lg text-white">
              Karia Medical
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Level 2 accredited facility committed to accessible,
            compassionate healthcare for our community.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h4 className="text-sm font-semibold text-white mb-4">
              {column.heading}
            </h4>

            <ul className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li
                  key={link}
                  className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© 2026 Karia Medical Clinic. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}



function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <InfoStrip />
      <Services />
      <Doctors />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}