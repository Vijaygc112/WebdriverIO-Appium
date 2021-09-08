exports.config = {
    runner: 'local',
    host: 'localhost',
    path: '/wd/hub',
    loglevel: 'info',
    framework: 'mocha',
    mochaOpts:{
        ui: 'bdd',
        require:['@babel/register'],
        timeout: 600000
    },
    port: 4723,
    services: ['appium'],

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