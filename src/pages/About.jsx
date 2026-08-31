
import { Link } from "react-router-dom";

export default function AboutPage() {
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
        <div className="w-full max-w-4xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              About Karia Medical
            </h1>

            <p className="text-slate-500 text-sm mt-2">
              Healthcare made simpler, accessible, and patient-focused.
            </p>
          </div>

          <div className="space-y-10 text-sm text-slate-600 leading-7">

            {/* Who We Are */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Who We Are
              </h2>

              <p>
                Karia Medical is a patient-focused medical clinic dedicated to
                providing accessible and reliable healthcare services. Our
                goal is to create a comfortable environment where patients
                can receive quality care and easily manage their appointments.
              </p>
            </section>

            {/* Our Mission */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Our Mission
              </h2>

              <p>
                Our mission is to make healthcare easier to access by combining
                professional medical care with simple and convenient digital
                services. We aim to reduce unnecessary waiting times and make
                appointment management easier for both patients and healthcare
                providers.
              </p>
            </section>

            {/* Our Vision */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                Our Vision
              </h2>

              <p>
                We envision a healthcare experience where patients can
                conveniently connect with healthcare professionals, manage
                appointments, and access important information through a
                reliable digital platform.
              </p>
            </section>

            {/* What We Offer */}
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                What We Offer
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">

                <div className="border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Appointment Booking
                  </h3>

                  <p className="text-sm text-slate-500">
                    Convenient appointment scheduling designed to make
                    accessing healthcare easier.
                  </p>
                </div>

                <div className="border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Patient Services
                  </h3>

                  <p className="text-sm text-slate-500">
                    Simple digital tools that help patients manage their
                    healthcare interactions.
                  </p>
                </div>

                <div className="border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Professional Care
                  </h3>

                  <p className="text-sm text-slate-500">
                    A patient-centered approach focused on respectful and
                    reliable healthcare.
                  </p>
                </div>

                <div className="border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Patient First
                  </h3>

                  <p className="text-sm text-slate-500">
                    We put the needs, comfort, and experience of our patients
                    at the center of what we do.
                  </p>
                </div>

              </div>
            </section>

            {/* CTA */}
            <section className="border-t border-slate-200 pt-8 text-center">
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                Ready to Book an Appointment?
              </h2>

              <p className="text-slate-500 mb-5">
                Take the next step toward managing your healthcare conveniently.
              </p>

              <Link
                to="/signin"
                className="inline-block bg-slate-900 text-white hover:bg-transparent hover:text-slate-900 border border-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200"
              >
                Book Appointment
              </Link>
            </section>

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

