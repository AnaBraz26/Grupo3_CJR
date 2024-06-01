import { Test, TestingModule } from '@nestjs/testing';
import { UsersOnlineController } from './users-online.controller';
import { UsersOnlineService } from './users-online.service';

describe('UsersOnlineController', () => {
  let controller: UsersOnlineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersOnlineController],
      providers: [UsersOnlineService],
    }).compile();

    controller = module.get<UsersOnlineController>(UsersOnlineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
