exports.config = {
    runner: 'local',
    host: 'localhost',
    loglevel: 'info',
    framework: 'mocha',
    mochaOpts:{
        ui: 'bdd',
        require:['@babel/register'],
        timeout: 600000
    },
    path: '/wd/hub',
    port: 4725,
    services: [['appium', { 
                    command: 'appium' 
                }]
            ],
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