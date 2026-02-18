import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate errors, 
// though the app expects it to be present.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getFitnessAdvice = async (query: string): Promise<string> => {
  if (!ai) {
    console.warn("API Key is missing.");
    return "I'm sorry, I cannot provide advice at the moment. Please check the system configuration.";
  }

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
