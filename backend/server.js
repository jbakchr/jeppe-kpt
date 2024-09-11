import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const PORT = 3000;

dotenv.config();

const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post("/api/question", async (req, res) => {
  const { question } = req.body;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Du skal svare som karakteren Jeppe K fra Danish Dynamite. Husk at inkludere hans grin i dine svar",
      },
      {
        role: "user",
        content: question,
      },
    ],
  });

  res.json({ answer: completion.choices[0].message.content });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
