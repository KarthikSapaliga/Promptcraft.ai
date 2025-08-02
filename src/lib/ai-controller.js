import { GoogleGenAI } from "@google/genai";

import {
    getArticleGenPrompt,
    getTitleGenPrompt,
    getImageGenPrompt,
    getBgRemovalPrompt,
    getObjectRemovalPrompt,
    getResumeReviewPrompt,
} from "./prompts.js";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateArticle = async (topic, articleLength) => {
    const prompt = getArticleGenPrompt(topic, articleLength);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });

        const article = response?.text;
        return article;
    } catch (err) {
        console.error("Error generating article:", err);
        throw err;
    }
};

export const generateTitles = async () => {};

export const generateImage = async () => {};

export const removeBg = async () => {};

export const removeObject = async () => {};

export const analyzeResume = async () => {};
