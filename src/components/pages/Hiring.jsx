import { useState } from "react";
import SuccessModal from "../modals/SuccessModal";
import { useNavigate } from "react-router-dom";


export default function Hiring() {
  const [form, setForm] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setForm((prev) => {
      const currentValues = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter((v) => v !== value) };
      }
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_URL}/api/hiring`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        setModalMessage("Your application has been submitted successfully!");
        setModalOpen(true);
        setForm({});
      } else {
        setModalMessage("There was an error submitting your application.");
        setModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      setModalMessage("Network error. Please try again.");
      setModalOpen(true);
    }
  };
  

  return (
    <main className="bg-gradient-to-b from-green-50 to-white py-16 px-4 text-slate-800">
      {/* Header */}
      <div className="text-center mb-10">
        <img
          src="/logo.png"
          alt="Fresh Tropic Cleaning Logo"
          className="h-24 w-24 mx-auto rounded-full object-contain mb-4 shadow-lg border-4 border-green-200"
        />
        <h1 className="text-3xl font-bold text-green-700">
          Cleaning Contractor Application Form
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Fresh Tropic Cleaning LLC <br />
          Phone: (239) 502 6166 <br />
          Email: freshtropiccleaning@gmail.com <br />
          Web: www.freshtropiccleaning.com
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-green-200 space-y-6"
      >
        {/* Personal Info */}
        <h2 className="text-xl font-semibold text-green-700 mb-4">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-green-700">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              required
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-green-700">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              required
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Home Address *
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            City *
          </label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            State *
          </label>
          <input
            type="text"
            name="state"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Zip Code *
          </label>
          <input
            type="text"
            name="zip"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        {/* Work Info */}
        <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
          Work Information
        </h2>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            What position are you applying for? *
          </label>
          <select
            name="position"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Commercial Cleaning</option>
            <option>Residential Cleaning</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            How many hours per week are you willing to work?
          </label>
          <select
            name="hours"
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Less than 20 hrs</option>
            <option>20-30 hrs (Part time)</option>
            <option>30-40 hrs (Full time)</option>
            <option>40+ hrs (Full time)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Availability d *
          </label>
          <p className="text-xs text-slate-500 mb-2">
            Select all that apply
          </p>
          <div className="grid md:grid-cols-3 gap-2 text-sm">
            {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="availability"
                  value={day}
                  onChange={handleCheckboxChange}
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have cleaning experience?*
          </label>
          <select
            name="experience"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>No experience</option>
            <option>Less than 1 year </option>
            <option>1–5 years </option>
            <option>More than 5 years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have a working smartphone with data? *
          </label>
          <select
            name="smartphone"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            What languages can you speak? (Check all that apply) *
          </label>
          <div className="flex flex-col gap-2 text-sm">
            {["English", "Spanish", "Other"].map((lang) => (
              <label key={lang} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="languages"
                  value={lang}
                  onChange={handleCheckboxChange}
                />
                {lang}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Would you be willing to work in multiple different sites? *
          </label>
          <select
            name="multipleSites"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have any fears or allergies to pets? *
          </label>
          <select
            name="pets"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have experience supervising teams of cleaners? *
          </label>
          <select
            name="supervising"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Are you legally authorized to work in the United States? *
          </label>
          <select
            name="authorizedUS"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have your own car? *
          </label>
          <select
            name="car"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you already have your own cleaning tools and supplies? *
          </label>
          <select
            name="tools"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            In case you are selected for a pre-employment trial, you will have to provide proof of work authorization. Do you understand that? *
          </label>
          <select
            name="understandProof"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes, I understand that</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            In case you are selected to continue, may we request proof of Covid-19 vaccination? *
          </label>
          <select
            name="covidProof"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            If offered a position, do you agree to a background check? *
          </label>
          <select
            name="backgroundCheck"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Our payroll schedule is bi-weekly via Direct Deposit. Do you agree? *
          </label>
          <select
            name="biweeklyPay"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have a Social Security Number (SSN) or ITIN? *
          </label>
          <select
            name="ssn"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have a US bank account able to receive ACH deposits? *
          </label>
          <select
            name="bankAccount"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Upload a photo of your driver's license
          </label>
          <input
            type="file"
            name="license"
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            How did you hear about us? *
          </label>
          <select
            name="source"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>LinkedIn</option>
            <option>Craigs List</option>
            <option>Facebook</option>
            <option>Google</option>
            <option>Indeed</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Please acknowledge that we never charge for job applications. *
          </label>
          <select
            name="acknowledge"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            I certify that my answers are true and complete. *
          </label>
          <select
            name="certify"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-amber-500 text-white font-semibold rounded-xl py-3 transition-all"
        >
          Submit Application
        </button>
      </form>
      <SuccessModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}        
        message={modalMessage}
      />
    </main>
  );
}
