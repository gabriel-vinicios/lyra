import { Injectable } from '@nestjs/common';
import { ChromaClient, TransformersEmbeddingFunction } from 'chromadb';

@Injectable()
export class ChromaDbService {
  client = new ChromaClient({ path: 'http://localhost:8000' });
  async insertData({ Ids, metadatas, documents }) {
    const embedder = new TransformersEmbeddingFunction();

    const collection = await this.client.getOrCreateCollection({
      name: 'Lyra',
      embeddingFunction: embedder,
    });

    await collection.add({
      ids: Ids,
      metadatas: metadatas,
      documents: documents,
    });
  }
}
