import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.SITE_URL || "http://localhost:3000",
    "X-Title": process.env.SITE_NAME || "TAB-bot",
  },
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage || userMessage.trim() === "") {
    return res.status(400).json({ reply: "Jangan cuma diam dong!." });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3.1:free",
      messages: [
        {
          role: "system",
          content: "Kamu adalah TAB, asisten AI yang selalu membalas dalam Bahasa Indonesia dengan gaya ramah dan sopan.",
        },
        { role: "user", content: userMessage },
      ],
    });

    const replyRaw =
      completion.choices?.[0]?.message?.content ||
      "Maaf, tidak ada respon dari TAB.";

    const reply = replyRaw.replace(/<\|.*?\|>/g, "").trim();

    res.json({ reply });
  } catch (error) {
    console.error("❌ Error dari OpenRouter:", error.response?.data || error.message);
    res.status(500).json({ reply: "Gagal terhubung ke pusat kendali TAB nih!." });
  }
});

app.listen(PORT, () => console.log(`Server sudah berjalan di http://localhost:${PORT}`));
