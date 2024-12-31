const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://alphaags.iplatformsolutions.com/', // Define your base URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
