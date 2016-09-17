({
    appDir: './',
    baseUrl: 'js',
    dir: './dist',
    mainConfigFile: 'js/main.js',

    removeCombined: true,
    preserveLicenseComments: false,
    findNestedDependencies: true,

    // optimizations
    optimizeCss: 'default',
    optimize: 'uglify2',
    skipDirOptimize: true,
    uglify2: {
        compress: {
            drop_debugger: true,
            drop_console: true
        }
    },

    modules: [
        {
            name: 'main',
            include: ['app', 'main']
        }
    ]
})
