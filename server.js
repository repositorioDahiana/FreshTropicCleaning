import express from "express";
import { google } from "googleapis";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Utilidad para convertir arrays en texto
const flattenValue = (val) => {
  if (Array.isArray(val)) return val.join(", ");
  if (val === undefined || val === null) return "";
  return String(val);
};

app.post("/api/hiring", async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 🟢 Convierte todos los valores a texto plano
    const {
      firstName,
      lastName,
      phone,
      email,
      address,
      city,
      state,
      zip,
      position,
      hours,
      availability,
      experience,
      smartphone,
      languages,
      multipleSites,
      pets,
      supervising,
      authorizedUS,
      car,
      tools,
      understandProof,
      covidProof,
      backgroundCheck,
      biweeklyPay,
      ssn,
      bankAccount,
      source,
      acknowledge,
      certify,
    } = req.body;

    const rowData = [
      flattenValue(firstName),
      flattenValue(lastName),
      flattenValue(phone),
      flattenValue(email),
      flattenValue(address),
      flattenValue(city),
      flattenValue(state),
      flattenValue(zip),
      flattenValue(position),
      flattenValue(hours),
      flattenValue(availability),
      flattenValue(experience),
      flattenValue(smartphone),
      flattenValue(languages),
      flattenValue(multipleSites),
      flattenValue(pets),
      flattenValue(supervising),
      flattenValue(authorizedUS),
      flattenValue(car),
      flattenValue(tools),
      flattenValue(understandProof),
      flattenValue(covidProof),
      flattenValue(backgroundCheck),
      flattenValue(biweeklyPay),
      flattenValue(ssn),
      flattenValue(bankAccount),
      flattenValue(source),
      flattenValue(acknowledge),
      flattenValue(certify),
      new Date().toLocaleString(),
    ];

    console.log("🟢 Data sent to Google Sheets:", rowData);

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:Z",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    res.status(200).json({ message: "✅ Data added successfully!" });
  } catch (err) {
    console.error("❌ Google Sheets Error:", err);
    res.status(500).json({ error: "❌ Error adding data to sheet" });
  }
});

// FREE ESTIMATE FORM
app.post("/api/estimate", async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const {
      name,
      phone,
      email,
      address,
      houseArea,
      pets,
      cleaningType,
    } = req.body;

    const row = [
      name,
      phone,
      email,
      address,
      houseArea,
      pets,
      cleaningType,
      new Date().toLocaleString(),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet2!A:Z",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    res.status(200).json({ message: "Estimate request added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving estimate request" });
  }
});

app.post("/api/review", async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const { serviceSatisfaction, cleaner, comments } = req.body;

    const rowData = [
      serviceSatisfaction || "",
      cleaner || "",
      comments || "",
      new Date().toLocaleString(),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet3!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [rowData] },
    });

    res.status(200).json({ message: "Review saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving review" });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
