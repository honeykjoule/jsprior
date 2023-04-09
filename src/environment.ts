import dotenv from "dotenv";
dotenv.config();
// Get OpenAI api key from environment variable
export function getOpenAIAPIKey(){
    return process.env.OPENAI_API_KEY;
}