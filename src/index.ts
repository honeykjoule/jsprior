import dotenv from "dotenv";
import { OpenAI } from "langchain/llms";
import {LLMChain } from "langchain/chains";
import { TASK_CREATION_PROMPT } from "./prompts.js";

// Load the API key from the environment
dotenv.config();
const OPENAI = new OpenAI({openAIApiKey: process.env.OPENAI_API_KEY});

// Prepare the chain
let objective = "Grow a synthetic intelligence that can create tasks to achieve any objective.";
const MODEL = new OpenAI({temperature: 0.9});
const CHAIN = new LLMChain({ llm: MODEL, prompt: TASK_CREATION_PROMPT});

// Call OpenAI
let response = await CHAIN.call({ objective: objective });

// Format the output
let prompt =  await TASK_CREATION_PROMPT.format({ objective: objective })
let formattedText = response.text.replace(/\\n/g, "\n").trim();

// Print the prompt and response
console.log(prompt);
console.log(formattedText);