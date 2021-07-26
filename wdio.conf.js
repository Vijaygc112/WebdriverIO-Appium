export const config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: '@babel/register',
        timeout: 60000
    },

    maxInstances: 1,
    sync: 'true',
    specs: [
        'tests/spec/**'
    ]
}
