import { useState } from "react";
import SuccessModal from "../modals/SuccessModal";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const [form, setForm] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState("success");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setModalMessage("Thank you for your feedback! 💚");
        setModalOpen(true);
      } else {
        setModalMessage("There was an error submitting your review.");
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
    <main className="bg-gradient-to-b from-green-50 to-white py-16 px-4 text-slate-800">
      <SuccessModal
        open={modalOpen}
        message={modalMessage}
        onClose={() => {
          setModalOpen(false);
          navigate("/", { replace: true });
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 drop-shadow-lg">
          Review Our Team
        </h1>
        <p className="text-slate-600 mt-2">
          Your feedback helps us improve our service every day.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-lg border border-green-200 rounded-2xl p-8 space-y-6"
      >
        {/* Question 1 */}
        <div>
          <label className="block text-sm font-semibold text-green-700 mb-2">
            Are you happy with our service? *
          </label>

          <div className="space-y-2">
            {["Yes! Thank you!", "You're okay", "No!"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="serviceSatisfaction"
                  value={opt}
                  onChange={handleChange}
                  required
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Cleaner Name */}
        <div>
          <label className="block text-sm font-semibold text-green-700">
            Who was your cleaner? *
          </label>
          <input
            type="text"
            name="cleaner"
            onChange={handleChange}
            required
            className="w-full border mt-1 px-3 py-2 rounded-lg focus:border-green-600 outline-none"
          />
        </div>

        {/* Optional comments */}
        <div>
          <label className="block text-sm font-semibold text-green-700">
            Additional Comments (optional)
          </label>
          <textarea
            name="comments"
            onChange={handleChange}
            className="w-full border mt-1 px-3 py-2 rounded-lg focus:border-green-600 outline-none"
            rows="4"
            placeholder="Tell us anything you want :)"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition-all 
            ${loading ? "bg-green-300" : "bg-green-700 hover:bg-amber-500"}
          `}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>

      <SuccessModal
        open={modalOpen}
        type={modalType}
        message={modalMessage}
        onClose={() => {
            setModalOpen(false);
            navigate("/", { replace: true });
            window.scrollTo({ top: 0, behavior: "smooth" });
                }}
      />
    </main>
  );
}
