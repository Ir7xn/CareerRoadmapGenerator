// src/services/aiService.js

import { GoogleGenAI } from '@google/genai';

// Initialize the GoogleGenAI client
// It requires the REACT_APP_GEMINI_API_KEY environment variable set in .env.local
const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});

const MODEL_NAME = "gemini-2.5-flash"; 

export const aiService = {
  generateRoadmap: async (prompt) => {
    if (!ai.apiKey) {
        throw new Error("Gemini API Key not configured. Please check your .env.local file.");
    }
    
    // Request the model to return a structured JSON object
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        { role: "user", parts: [{ text: prompt }] }
      ],
      config: {
        responseMimeType: "application/json",
        temperature: 0.2, 
      },
    });

    const jsonText = response.text.trim();
    
    // Clean the response text to isolate the raw JSON string
    const cleanedJsonText = jsonText
        .replace(/^```json\s*/, '') // Remove starting markdown fence
        .replace(/\s*```$/, '');    // Remove ending markdown fence

    try {
        // Attempt to parse the cleaned JSON
        return JSON.parse(cleanedJsonText);
    } catch (e) {
        console.error("Failed to parse JSON from AI response:", cleanedJsonText, e);
        // Throw an error that App.js can catch and display
        throw new Error("The AI returned an invalid structure. Please try again.");
    }
  },
};