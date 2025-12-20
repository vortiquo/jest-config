/**
 * Base Jest configuration shared across all environments.
 * @type {import('jest').Config}
 */
export const base = {
  collectCoverage: process.env.COLLECT_COVERAGE === 'true',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['.*snap$', '/node_modules/', '/dist/'],
  testMatch: ['**/tests/**/*.spec.{ts,tsx}', '**/tests/*.spec.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

export default base;
