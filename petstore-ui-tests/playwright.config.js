const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    headless: false,
    baseURL: 'https://petstore.octoperf.com',
  },
});