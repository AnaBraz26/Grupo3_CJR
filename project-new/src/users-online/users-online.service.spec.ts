import { Test, TestingModule } from '@nestjs/testing';
import { UsersOnlineService } from './users-online.service';

describe('UsersOnlineService', () => {
  let service: UsersOnlineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersOnlineService],
    }).compile();

    service = module.get<UsersOnlineService>(UsersOnlineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
