import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignInPage() {
  const navigate = useNavigate();
   const [formData , setFormData] = useState({
    email : "",
    password : ""
   })
    const [message , setMessage] = useState("");

        function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value
    }));
}

function SignPatient(e) {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
        setMessage("Please fill in all the inputs");
        return;
    }

    setMessage("");
    console.log("Signed in:", formData);
    navigate("/Booking")
    
  
}
  return (
    <div className="min-h-screen bg-[#e8eeff] font-sans antialiased flex flex-col justify-between relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-indigo-200/40 pointer-events-none" />
      <div 
        className="absolute bottom-0 inset-x-0 h-48 md:h-64 bg-indigo-200/30 pointer-events-none"
        style={{ clipPath: "polygon(50% 20%, 0% 100%, 100% 100%)" }}
      />

      {/* Header */}
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

       <Link to="/signin">
       Sign In
       </Link>
      </header>

      {/* Main Form Display */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 z-10">
        <div className="w-full max-w-md bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
          
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              Patient Sign In
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Access your medical records and appointment history
            </p>
          </div>

          {/* Form UI Display */}
          <form onSubmit={SignPatient}>
          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Password
                </label>
                <a href="#" className="text-xs text-indigo-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm text-slate-900 bg-[#e8eeff]/30 border border-slate-300 focus:border-slate-900 focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 py-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-slate-300 text-slate-900 focus:ring-0 rounded-none cursor-pointer"
                />
                <span>Remember this device</span>
              </label>
            </div>

            {message && (
  <p className="text-red-500 text-sm text-center font-medium">
    {message}
  </p>
)}

            <button
              type="submit"
              className="w-full mt-2 border border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-slate-900 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200"
            
            >
              Sign In
            </button>
          </div>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <span className="relative bg-white px-4 text-xs text-slate-400 uppercase tracking-widest">
              Or
            </span>
          </div>

          {/* Secondary Action Link */}
          <div className="text-center">
            <p className="text-xs text-slate-600">
              Don't have a patient account yet?{" "}
              <Link 
                to="/booking" 
                className="font-bold text-slate-900 hover:text-indigo-600 underline transition-colors"
              >
                Register via Booking
              </Link>
            </p>
          </div>

        </div>
      </main>

      {/* Footer Strip */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-indigo-100 z-10">
        © 2026 Karia Medical Clinic. All rights reserved.
      </footer>
    </div>
  )};
