import { Test, TestingModule } from '@nestjs/testing';
import { UploadmanyController } from './uploadmany.controller';

describe('Uploadmany Controller', () => {
  let controller: UploadmanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadmanyController],
    }).compile();

    controller = module.get<UploadmanyController>(UploadmanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
