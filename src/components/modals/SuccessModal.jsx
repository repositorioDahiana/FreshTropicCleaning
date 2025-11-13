export default function SuccessModal({ open, onClose, message }) {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-green-200">
          
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            ✔️ Success!
          </h2>
  
          <p className="text-slate-600 mb-6">
            {message}
          </p>
  
          <button
            onClick={onClose}
            className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-all w-full"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  