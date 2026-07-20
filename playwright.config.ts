import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: "allure-playwright",
  
  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com/', // ✅ activate this
    trace: 'on-first-retry',
  },

  projects: [
    // ✅ 1. Setup project (runs login once)
    {
      name: 'setup',
      testDir: './setup',                 // 👈 matches folder
      testMatch: /.*auth\.setup\.ts/,
    },

    // ✅ 2. Chromium (MAIN execution with session reuse)
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storage/auth.json',  // ✅ inject session
      },
      dependencies: ['setup'],             // ✅ critical link
    },

    // ✅ 3. Firefox
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'storage/auth.json',
      },
      dependencies: ['setup'],
    },

    // ✅ 4. WebKit (Safari)
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: 'storage/auth.json',
      },
      dependencies: ['setup'],
    },
  ],
});