import { loadTextFromFile } from "./ingest.js";
import { createEmbeddings } from "./embeddings.js";
import { Chroma } from "langchain/vectorstores";
import path from "path";

export async function getCollection(filepath: string){
    const embedding = await createEmbeddings();
    const filename = path.basename(filepath, path.extname(filepath));
    console.log("Filename:", filename);
    const docs = await loadTextFromFile(filepath);
    console.log("Docs[0]:", docs[0]);
    let vectorStore;
    vectorStore = await Chroma.fromExistingCollection(
        embedding, {
            collectionName: filename,
    });
    console.log("VectorStore loaded");
    return vectorStore;
}

export async function createCollection(filepath: string){
    const embedding = await createEmbeddings();
    const filename = path.basename(filepath, path.extname(filepath));
    const docs = await loadTextFromFile(filepath);
    let vectorStore;
    console.log("Creating collection:", filename);
    vectorStore = await Chroma.fromDocuments(
        docs,
        embedding, {
        collectionName: filename,
    });
    console.log("VectorStore loaded");
    return vectorStore;
}