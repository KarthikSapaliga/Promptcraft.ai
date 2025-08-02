import { GoogleGenAI, Modality } from "@google/genai";

import {
    getArticleGenPrompt,
    getTitleGenPrompt,
    getImageGenPrompt,
    getBgRemovalPrompt,
    getObjectRemovalPrompt,
    getResumeReviewPrompt,
} from "./prompts.js";

import { arrayBufferToBase64 } from "./utils.js";

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

export const generateTitles = async (topic, category) => {
    const prompt = getTitleGenPrompt(topic, category);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });

        const article = response?.text;
        return article;
    } catch (err) {
        console.error("Error generating titles:", err);
        throw err;
    }
};

export const generateImage = async (desc, style) => {
    const prompt = getImageGenPrompt(desc, style);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-preview-image-generation",
            contents: prompt,
            config: {
                responseModalities: [Modality.TEXT, Modality.IMAGE],
            },
        });

        const parts = response.candidates[0]?.content?.parts || [];

        for (const part of parts) {
            if (part.inlineData?.data) {
                const base64Image = part.inlineData.data;
                return `data:image/png;base64,${base64Image}`;
            }
        }
    } catch (err) {
        console.error("Error generating titles:", err);
        throw err;
    }
};

export const removeBg = async (imageBuffer) => {
    const base64Image = arrayBufferToBase64(imageBuffer);
    const prompt = getBgRemovalPrompt();

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-preview-image-generation",
            contents: [
                { text: prompt },
                { inlineData: { mimeType: "image/png", data: base64Image } },
            ],
            config: {
                responseModalities: [Modality.TEXT, Modality.IMAGE],
            },
        });

        const parts = response.candidates[0]?.content?.parts || [];
        for (const part of parts) {
            if (part.inlineData?.data) {
                const base64Image = part.inlineData.data;
                return `data:image/png;base64,${base64Image}`;
            }
        }
    } catch (err) {
        console.error("Error generating titles:", err);
        throw err;
    }
};

export const removeObject = async () => {};

export const analyzeResume = async () => {};
