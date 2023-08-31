import { Injectable } from '@nestjs/common';
import { ChromaClient, TransformersEmbeddingFunction } from 'chromadb';

@Injectable()
export class ChromaDbService {
  client = new ChromaClient({ path: 'http://localhost:8000' });
  embedder = new TransformersEmbeddingFunction();
  collection = async () =>
    await this.client.getOrCreateCollection({
      name: 'Lyra',
      embeddingFunction: this.embedder,
    });

  async insertData({ Ids, metadatas, documents }) {
    await (
      await this.collection()
    ).add({
      ids: Ids,
      metadatas: metadatas,
      documents: documents,
    });
  }

  async query() {
    await (
      await this.collection()
    ).query({
      nResults: 2,
      queryTexts: ['lorem ipsum'],
    });
  }
}
