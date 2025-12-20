import { base } from './base.js';

/**
 * Jest configuration for Node.js projects.
 * @type {import('jest').Config}
 */
export const node = {
  ...base,
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default node;
