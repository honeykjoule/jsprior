import { getOpenAIAPIKey } from "./environment.js";
import { OpenAI } from "langchain/llms";
import {LLMChain } from "langchain/chains";
import { TASK_CREATION_PROMPT } from "./prompts.js";

const model = new OpenAI({openAIApiKey: getOpenAIAPIKey()});

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