import vortiquoConfig from '@vortiquo/eslint-config/node-library-js';

export default [
  {
    ignores: [
      '*.config.mjs',
      '*.config.js',
      '.lintstagedrc.mjs',
      '.releaserc.js',
    ],
  },
  ...vortiquoConfig,
  {
    rules: {
      'turbo/no-undeclared-env-vars': 'off',
    },
  },
];
