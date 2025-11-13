export default function SuccessModal({ open, onClose, message, type = "success" }) {
  if (!open) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-green-200">

        {/* ICONO */}
        <div className="mb-4 text-5xl">
          {isSuccess ? (
            <span className="text-green-600">✔️</span>
          ) : (
            <span className="text-red-600">❌</span>
          )}
        </div>

        {/* TITULO */}
        <h2 className={`text-2xl font-bold mb-3 ${isSuccess ? "text-green-700" : "text-red-700"}`}>
          {isSuccess ? "Success!" : "Error"}
        </h2>

        {/* MENSAJE */}
        <p className="text-slate-600 mb-6">
          {message}
        </p>

        {/* BOTÓN */}
        <button
          onClick={onClose}
          className={`font-semibold px-6 py-2 rounded-lg transition-all w-full
            ${isSuccess ? "bg-green-700 hover:bg-green-600 text-white" : "bg-red-600 hover:bg-red-500 text-white"}
          `}
        >
          Close
        </button>
      </div>
    </div>
  );
}
