import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  collectCoverageFrom: [
    '**/*.{ts}',
    '!**/node_modules/**',
  ],
};

export default config;