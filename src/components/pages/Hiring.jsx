import { useState } from "react";

export default function Hiring() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Application submitted successfully!");
    console.log(form);
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
          Phone: (339) 035-521 <br />
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
          Personal Information / Información Personal
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-green-700">
              First Name | Primer Nombre *
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
              Last Name | Apellido *
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
            Phone Number | Número de Teléfono *
          </label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
          <p className="text-xs text-slate-500 mt-1">
            By providing your number, you consent to receive communication from Fresh Tropic Cleaning.  
            / Al proporcionar su número, acepta recibir mensajes de comunicación de Fresh Tropic Cleaning.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            Email | Correo Electrónico *
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
            Home Address | Dirección de Hogar *
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          />
          <p className="text-xs text-slate-500 mt-1">
            Include city, state, and zip code / Incluya ciudad, estado y código postal.
          </p>
        </div>

        {/* Work Info */}
        <h2 className="text-xl font-semibold text-green-700 mt-8 mb-4">
          Work Information / Información Laboral
        </h2>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            What position are you applying for? / ¿A qué puesto de trabajo aplica? *
          </label>
          <select
            name="position"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option value="">Select an option</option>
            <option>Commercial Cleaning | Limpieza Comercial</option>
            <option>Residential Cleaning | Limpieza Residencial</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-700">
            How many hours per week are you willing to work? / ¿Cuántas horas por semana?
          </label>
          <select
            name="hours"
            onChange={handleChange}
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option>Less than 20 hrs / Menos de 20 horas</option>
            <option>20-30 hrs (Part time)</option>
            <option>30-40 hrs (Full time)</option>
            <option>40+ hrs (Full time)</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-semibold text-green-700">
            Availability / Disponibilidad *
          </label>
          <p className="text-xs text-slate-500 mb-2">
            Select all that apply / Seleccione todas las opciones que apliquen
          </p>
          <div className="grid md:grid-cols-3 gap-2 text-sm">
            {[
              "Monday | Lunes",
              "Tuesday | Martes",
              "Wednesday | Miércoles",
              "Thursday | Jueves",
              "Friday | Viernes",
              "Saturday | Sábado",
              "Sunday | Domingo",
            ].map((day, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input type="checkbox" name="availability" />
                {day}
              </label>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-semibold text-green-700">
            Do you have cleaning experience? / ¿Tiene experiencia en limpieza? *
          </label>
          <select
            name="experience"
            onChange={handleChange}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 focus:border-green-600 outline-none"
          >
            <option>No experience | Sin experiencia</option>
            <option>Less than 1 year | Menos de 1 año</option>
            <option>1–5 years | Entre 1 y 5 años</option>
            <option>More than 5 years | Más de 5 años</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-amber-500 text-white font-semibold rounded-xl py-3 transition-all"
        >
          Submit Application / Enviar Solicitud
        </button>
      </form>
    </main>
  );
}
