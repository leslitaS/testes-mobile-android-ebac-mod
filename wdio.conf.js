const { join } = require("path");

exports.config = {
 // hostname: "localhost",
  port: 4723,
  path: "/wd/hub",
  specs: ["./test/specs/**/*.spec.js"],
  framework: "mocha",

  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator

      "platformName": "Android",
      "appium:platformVersion": "9.0",
      "appium:deviceName": "ebac-qe",
      "appium:automationName": "UIAutomator2",
      "appium:app": join(process.cwd(), "./app/android/Android-NativeDemoApp-0.4.0.apk"), 
      "appium:appWaitActivity": "*",
      "appium:autoGrandPermissions": "true",
      "appium:sessionName" : "single_test"
      
    }]
  
};
