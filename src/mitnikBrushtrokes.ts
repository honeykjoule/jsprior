import { getCollection } from "./chromadb.js";

const filepath = "/root/github/prior/data/mitnik-brushstrokes.txt";

const vectorStore = await getCollection(filepath);

const response = await vectorStore.similaritySearch("how to win", 2);

console.log(response);