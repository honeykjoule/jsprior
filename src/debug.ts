import { ChromaClient } from 'chromadb';
import fs from 'fs';

const client = new ChromaClient();

const collections = await client.listCollections();

fs.writeFile('data.json', JSON.stringify(collections), (error) => {
    if (error) {
        throw error;
    }});
    console.log('Data written to file');

// Function that returns a list of all collections
// export async function checkCollections() {
//   const collectionList = await client.listCollections();
//   return collectionList;
// }

// const name = 'mitnik-brushstrokes';

// export async function collectionExists(name: string) {
//   const collection = await client.getCollection(name);
//   return collection;
// }

// (async () => {
//   const data = JSON.stringify(await checkCollections());
//   fs.writeFile('data.json', data, (error) => {
//     if (error) {
//       throw error;
//     }
//     console.log('Data written to file');
//   });
// })();