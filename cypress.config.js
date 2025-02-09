const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/*.cy.js",
  },
});
