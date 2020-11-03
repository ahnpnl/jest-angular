const jestBaseConfig = require('../../jest.config');

module.exports = {
  ...jestBaseConfig,
  setupFilesAfterEnv: ['<rootDir>/../../setup-jest.ts'],
};
