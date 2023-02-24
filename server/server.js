import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
const PORT = process.env.PORT || 5000;
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from ChatGPT Clone",
  });
});

app.post("/", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 3000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  res.status(200).send({
    data: response.data.choices[0].text,
  });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
