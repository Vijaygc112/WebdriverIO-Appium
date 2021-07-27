exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    loglevel: 'info',
    framework: 'mocha',
    mochaOpts:{
        ui: 'bdd',
        require:['@babel/register'],
        timeout: 600000
    },

    capabilities:[{
        
            "platformName": "iOS",
            "platformVersion": "14.5",
            "deviceName": "iPhone 12 Pro Max",
            "automationName": "XCUITest",
            "app": "/Users/vijaychitragar/Vijay G C/Automation/WebdriverIO-Appium/resources/wdioNativeDemoApp.app"
        
    }],
    maxInstances: 1,
    sync: true, 
    specs:[
        './test/spec/playwithmocha.js'
    ]

}
