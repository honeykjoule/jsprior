import { getOpenAIAPIKey } from "./environment.js";
import  { OpenAIEmbeddings } from "langchain/embeddings";

export async function createEmbeddings(){
    const embedding = new OpenAIEmbeddings({ openAIApiKey: getOpenAIAPIKey() });
    return embedding;
}