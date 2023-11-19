const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nm6344',
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'https://rahulshettyacademy.com/angularpractice/',
    reporter: 'mochawesome',
    
    specPattern: './src/features/**/*feature',
    // "testFiles": "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
  },
});



