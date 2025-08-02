export function getArticleGenPrompt(topic, wordCountRange) {
    return `
You are a professional writer.

Write an informative, engaging, and well-structured article on the following topic:

Topic: ${topic}
Target Length: ${wordCountRange} words

Guidelines:
- Write in a clear, human-like, and conversational tone.
- Use headings and subheadings where appropriate.
- Ensure logical flow and coherence.
- Do not include a title or metadata—just the article body.
- Avoid repeating content or generic filler text.
- Format in clean Markdown.

Begin writing now.
`;
}

export function getTitleGenPrompt(topic, category, count = 5) {
    return `
You are an expert copywriter and content strategist.

Generate ${count} creative, engaging, and SEO-friendly titles for an article based on the following:

Topic: ${topic}
Category: ${category}

Instructions:
- Make sure each title is unique and appealing.
- Use a tone suitable for the "${category}" category.
- Keep each title concise, ideally 10–15 words.
- Avoid clickbait or overly vague titles.
- Number each title from 1 to ${count}.
- Respond with only the titles, no extra explanations.
`;
}

export function getImageGenPrompt(description, style) {
    return `
Generate an image based on the following:

Description: ${description}
Style: ${style}

Guidelines:
- Follow the given description closely.
- Apply the visual characteristics of the "${style}" style.
- Make the image visually coherent, detailed, and aligned with the style.
- Do not include text or watermarks in the image.
`;
}

export function getBgRemovalPrompt() {
    return `
Remove the background from the given image.

Guidelines:
- Keep only the main subject in the image.
- Make the background completely transparent.
- Do not alter the appearance, color, or details of the subject.
- Return the result as a PNG with transparent background.
`;
}

export function getObjectRemovalPrompt(objectDescription) {
    return `
Remove the described object from the image.

Description of object to remove: ${objectDescription}

Instructions:
- Identify the object in the image based on the full description.
- Remove only the described object, preserving everything else in the image.
- Use intelligent inpainting to fill the removed area naturally and realistically.
- Do not alter any other part of the image.
- Maintain the original image resolution, lighting, and context.
- Return the result in the same format as the original image.
`;
}

export function getResumeReviewPrompt() {
    return `
You are an expert career coach and hiring manager.

Analyze the resume provided below and give a comprehensive review.

Instructions:
1. Identify the likely job roles the candidate is targeting based on the resume.
2. Review the structure, formatting, and overall clarity of the resume.
3. Evaluate the relevance and strength of the content for the inferred role(s).
4. Point out missing or weak sections (e.g., summary, skills, metrics, achievements).
5. Check for grammar, consistency, tone, and professional language.
6. Suggest improvements to increase clarity, impact, and ATS compatibility.

Return your feedback using this format:
- **Inferred Target Role(s)**:
- **Overall Impression**:
- **Strengths**:
- **Areas to Improve**:
- **Suggested Improvements** (bullet points):
- **ATS Optimization Tips**:
- **Professional Score** (out of 10):

Respond only with the analysis. Do not rewrite the resume.
`;
}
