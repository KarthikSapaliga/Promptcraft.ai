import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateArticle = async () => {};

export const generateTitles = async () => {};

export const generateImage = async () => {};

export const removeBg = async () => {};

export const removeObject = async () => {};

export const analyzeResume = async () => {};
