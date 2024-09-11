import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const PORT = 3000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/question", (req, res) => {
  const { question } = req.body;
  const { OPENAI_API_KEY } = process.env;

  res.json({ message: question });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
