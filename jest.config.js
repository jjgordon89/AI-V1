module.exports = {
  testEnvironment: 'node',
  rootDir: '.', // Run tests from project root
  testMatch: ['<rootDir>/backend/**/__tests__/**/*.test.js?(x)'], // Adjusted pattern
  // moduleDirectories is likely not needed now, defaults to ['node_modules'] at root
  // collectCoverage: true,
  // coverageDirectory: './coverage/backend',
};
