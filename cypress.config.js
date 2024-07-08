const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com', 
    env: {
      username: 'standard_user',
      password: 'secret_sauce',
      baduser: 'standard'
    }
  },
});
