module.exports = {
  clearMocks: true,
  testEnvironment: `jest-environment-jsdom`,
  setupFilesAfterEnv: [`./jest.setup.js`],
};
