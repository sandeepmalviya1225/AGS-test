const { defineConfig } = require("cypress");
const cypressMochawesomeReporter = require('cypress-mochawesome-reporter/plugin');
module.exports = defineConfig({

  //video configration 

  video: true,
  // Enable video recording
videosFolder: "cypress/videos", // Folder to save videos
videoCompression: 32, // Compression quality (0-100, 32 is default)

//setting up the url 
  e2e: {
    baseUrl: 'https://alphaags.iplatformsolutions.com/', // Define your base URL here

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
      //reporting configration 
      cypressMochawesomeReporter(on);
      return config;
      

    },
    
  },
  browser: 'chrome', // Specify default browser here


  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,


    },
  
});
