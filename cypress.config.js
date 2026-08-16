const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1300,
    defaultCommandTimeout: 20000,
    video: false,
    blockHosts: ['*.usefathom.com'],
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.js',
  },
})
