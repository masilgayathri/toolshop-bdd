import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['steps/**/*.ts', 'fixtures/**/*.ts'],
});

export default defineConfig({
  testDir,
  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    testIdAttribute: 'data-test',
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html', { open: 'never' }]],
});
