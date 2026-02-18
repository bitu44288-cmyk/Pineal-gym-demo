import { GoogleGenAI } from "@google/genai";

// Initialize the client directly using the environment variable.
// The API key must be configured in the environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFitnessAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are an expert fitness coach for 'Pineal Fitness' in Delhi. Provide short, motivating, and actionable fitness advice. Keep answers under 100 words. Be professional yet energetic.",
      },
    });

    return response.text || "Keep pushing! Consistency is key.";
  } catch (error) {
    console.error("Error generating fitness advice:", error);
    return "Stay focused and keep training! (AI is currently offline)";
  }
};