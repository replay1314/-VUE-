const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        port: 9001,
        proxy: {
            '/': {
                target: 'http://39.106.127.16:7001/',
                ws:false
            }
        },
    }

})
