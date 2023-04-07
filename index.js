import dotenv from "dotenv";
import { OpenAI } from "langchain/llms";
// const { OpenAI } = await import("langchain/llms");
// Load the API key from the environment
dotenv.config();
const openai = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY });
// Define the prompt
const prompt = "Why did the chicken cross the road?";
const res = await openai.call(prompt);
console.log(res);
// // Generate text using GPT-3
// const generateText = async () => {
//     const response = await openai.completions.generate({
//         prompt,
//         maxTokens: 100,
//         temperature: 0.9,
//         topP: 1,
//         presencePenalty: 0,
//         frequencyPenalty: 0,
//         stream: true,
//     });
//     // Log the response
//     console.log(response.data.choices[0].text);
// };
// // Call the function
// generateText();
