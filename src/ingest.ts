import { TextLoader } from "langchain/document_loaders";
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function loadTextFromFile(filepath: string){
    const loader =  new TextLoader(filepath);
    const singleDoc = await loader.load();
    
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 2000,
        chunkOverlap: 200,
    });

    const splitDocuments =  await splitter.splitDocuments([
        new Document({ pageContent: singleDoc[0].pageContent })
    ]);

    return splitDocuments;
}