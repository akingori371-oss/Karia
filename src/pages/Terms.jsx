
import { Link } from "react-router-dom";

export default function TermsPage() {
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

      {/* Content */}
      <main className="flex-1 flex justify-center px-6 py-12 z-10">
        <div className="w-full max-w-4xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">

          <div className="mb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              Terms of Service
            </h1>

            <p className="text-slate-500 text-sm mt-2">
              Please read these terms before using Karia Medical services.
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-600 leading-7">

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Karia Medical services, you agree to
                follow these Terms of Service. If you do not agree with these
                terms, please do not use the service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                2. Use of Our Services
              </h2>
              <p>
                You agree to provide accurate information when making
                appointments or using patient services. You are responsible
                for keeping your account information accurate and secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                3. Appointments
              </h2>
              <p>
                Appointment availability may change. Patients should provide
                accurate appointment information and communicate with the
                clinic when they need to cancel or reschedule.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                4. Medical Information
              </h2>
              <p>
                Information provided through this website is intended to
                support the delivery of healthcare services. Online information
                should not be treated as a substitute for professional medical
                advice or emergency medical care.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                5. Prohibited Activities
              </h2>
              <p>
                Users must not misuse the website, attempt unauthorized access,
                interfere with its operation, or submit false or misleading
                information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                6. Changes to These Terms
              </h2>
              <p>
                Karia Medical may update these terms when necessary. Continued
                use of the service after changes are published indicates
                acceptance of the updated terms.
              </p>
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
