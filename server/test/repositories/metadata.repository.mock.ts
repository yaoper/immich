import { IMetadataRepository } from '@app/domain';

export const newMetadataRepositoryMock = (): jest.Mocked<IMetadataRepository> => {
  return {
    deleteCache: jest.fn(),
    getExifTags: jest.fn(),
    init: jest.fn(),
    teardown: jest.fn(),
    reverseGeocode: jest.fn(),
  };
};