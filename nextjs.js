import nextJest from 'next/jest.js';

import { base } from './base.js';

/**
 * Creates Jest configuration for Next.js projects.
 * @param {import('jest').Config} customConfig - Custom Jest config to merge
 * @returns {Promise<import('jest').Config>}
 */
export const createNextJestConfig = (customConfig = {}) => {
  const config = {
    ...base,
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
        'jest-transform-stub',
    },
    ...customConfig,
  };

  return nextJest({ dir: './' })(config);
};

export default createNextJestConfig;
