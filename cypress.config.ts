import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 3000,
  defaultCommandTimeout: 5000,
  viewportWidth: 1500,
  viewportHeight: 942,
  numTestsKeptInMemory: 0,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    appUrl: 'http://localhost:3000',
  },
  e2e: {
    testIsolation: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
