
import { GoogleGenAI } from "@google/genai";

// Fix: Initialize with process.env.API_KEY directly as per SDK requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSecurityAdvise = async (userInput: string) => {
  try {
    // Fix: Call generateContent with model and contents according to the latest SDK
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: `You are an expert security consultant for Push Lock Security. 
        The company is 5 years old, has 150 professionals, and focuses on affordable, high-quality security for homes, schools, and hospitals.
        Your goal is to provide concise, professional security advice based on the user's situation. 
        Always mention that Push Lock offers a "Free Consultation" for more detail.
        Keep responses under 100 words. Be reassuring but authoritative.`,
      },
    });
    // Fix: Use the .text property directly as it is a getter, not a function
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to the security database. Please call us at +1 (800) PUSH-LOCK for immediate assistance.";
  }
};