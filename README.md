# @vortiquo/jest-config

[![npm version](https://img.shields.io/npm/v/@vortiquo/jest-config.svg)](https://www.npmjs.com/package/@vortiquo/jest-config)
[![license](https://img.shields.io/npm/l/@vortiquo/jest-config.svg)](https://github.com/vortiquo/jest-config/blob/main/LICENSE)

Shared Jest configurations for React, Next.js, and Node.js projects.

> **Note:** Consider using
> [@vortiquo/vitest-config](https://www.npmjs.com/package/@vortiquo/vitest-config)
> for new projects. Vitest is 10-20x faster and has native TypeScript/ESM
> support.

## Installation

```bash
npm install -D @vortiquo/jest-config jest ts-jest
# or
pnpm add -D @vortiquo/jest-config jest ts-jest
# or
yarn add -D @vortiquo/jest-config jest ts-jest
```

## Available Configs

| Config   | Use Case                 |
| -------- | ------------------------ |
| `node`   | Node.js backend projects |
| `react`  | React applications       |
| `nextjs` | Next.js applications     |

## Usage

Create a `jest.config.js` in your project:

### Node.js

```js
import { node } from '@vortiquo/jest-config/node';

export default node;
```

With customization:

```js
import { node } from '@vortiquo/jest-config/node';

export default {
  ...node,
  setupFilesAfterEnv: ['./src/test/setup.ts'],
};
```

### React

```js
import { react } from '@vortiquo/jest-config/react';

export default react;
```

### Next.js

```js
import { createNextJestConfig } from '@vortiquo/jest-config/nextjs';

export default createNextJestConfig({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
});
```

## Additional Dependencies

For React/Next.js testing:

```bash
pnpm add -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

## Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "COLLECT_COVERAGE=true jest"
  }
}
```

## What's Included

- ✅ TypeScript support via `ts-jest`
- ✅ Coverage collection
- ✅ Standard test patterns (`*.spec.ts`)
- ✅ Asset stub transforms (CSS, images)

## License

MIT © [Vortiquo](https://vortiquo.com)
