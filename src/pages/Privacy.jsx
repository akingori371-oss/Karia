
import { Link } from "react-router-dom";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="text-slate-500 text-sm mt-2">
              How Karia Medical collects, uses, and protects your information.
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-600 leading-7">

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                1. Information We Collect
              </h2>
              <p>
                When you use Karia Medical services, we may collect information
                such as your name, email address, contact information,
                appointment details, and information that you voluntarily
                provide through our forms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                Your information may be used to manage appointments, communicate
                with you, provide healthcare-related services, improve our
                website, and maintain accurate patient records.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                3. Protection of Your Information
              </h2>
              <p>
                We take reasonable measures to protect information provided
                through our services from unauthorized access, alteration,
                disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell personal information. Information may only be
                shared when necessary to provide services, comply with legal
                requirements, or protect the safety and rights of patients and
                our organization.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                5. Your Privacy Choices
              </h2>
              <p>
                You may contact Karia Medical regarding questions about your
                personal information or how it is handled.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                6. Policy Updates
              </h2>
              <p>
                This Privacy Policy may be updated from time to time. Any
                significant changes will be reflected on this page.
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

