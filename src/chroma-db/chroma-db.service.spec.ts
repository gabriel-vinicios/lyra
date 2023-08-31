import { Test, TestingModule } from '@nestjs/testing';
import { ChromaDbService } from './chroma-db.service';

describe('ChromaDbService', () => {
  let service: ChromaDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChromaDbService],
    }).compile();

    service = module.get<ChromaDbService>(ChromaDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
