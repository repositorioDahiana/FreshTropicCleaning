import { useState } from "react";
import SuccessModal from "../modals/SuccessModal";
import { useNavigate } from "react-router-dom";


export default function Estimate() {
  const [form, setForm] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState("success");
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await fetch(`${API_URL}/api/estimate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
          
      if (response.ok) {
        setModalMessage("Your request has been received! We will contact you shortly.");
        setModalType("success");
        setModalOpen(true);
        setForm({});
      } else {
        setModalMessage("There was an error submitting your request.");
        setModalType("error");
        setModalOpen(true);
      }
      
    } catch (error) {
      console.error(error);
      setModalMessage("Network error. Please try again.");
      setModalOpen(true);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900/70 via-green-800/40 to-green-700/20 py-16 px-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl space-y-6 border border-green-200"
      >
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Free Estimate Request
        </h2>

        {/* NAME */}
        <div>
          <label className="text-green-700 font-semibold">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name || ""}
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-green-700 font-semibold">Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone || ""}
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-green-700 font-semibold">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email || ""}
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        {/* ADDRESS */}
        <div>
          <label className="text-green-700 font-semibold">Address *</label>
          <input
            type="text"
            name="address"
            required
            value={form.address || ""}
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        {/* HOUSE AREA */}
        <div>
          <label className="text-green-700 font-semibold">House Area (sq ft) *</label>
          <input
            type="number"
            name="houseArea"
            required
            value={form.houseArea || ""}
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
        </div>

        {/* PETS */}
        <div>
          <label className="text-green-700 font-semibold">Do you have pets? *</label>
          <select
            name="pets"
            required
            value={form.pets || ""}
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* CLEANING TYPE */}
        <div>
          <label className="text-green-700 font-semibold">Cleaning Type *</label>
          <select
            name="cleaningType"
            required
            value={form.cleaningType || ""}
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select one</option>
            <option>Deep Cleaning</option>
            <option>Standard Cleaning</option>
          </select>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      <SuccessModal
        open={modalOpen}
        onClose={() => {
            setModalOpen(false);
            navigate("/", { replace: true });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        message={modalMessage}
        />
    </main>
  );
}
