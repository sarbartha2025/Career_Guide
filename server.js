import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { error } from 'console';

const app = express();
const PORT = 5501;

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'public' folder
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// Gemini API Key
const API_KEY = 'AIzaSyAvS3icr6P0q-TJRgjWtNrKw4OWPz5FF5U';

// Gemini Test Function
async function testGemini() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent("Say hello from Gemini!");
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello' }),
    });
    
    const data = await response.json();
    console.log(data);
    
    const text = response.text();
    console.log("✅ Gemini Response:", text);
  } catch (error) {
    console.error("❌ Error with Gemini API:", error);
  }
}
// testGemini();

// Serve hackathon.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'loginHTML.html'));
});

// Optional: Handle chat API
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  app.use(express.json());


  if (!userMessage) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await fetch('http://localhost:5501/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello' }),
    });
    

    const reply = response.data.candidates[0]?.text || 'No valid response';
    res.json({ reply });
  } catch (error) {
    console.error('💥 Gemini API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from Gemini API' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
