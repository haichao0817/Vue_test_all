const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    runtimeCompiler: true,
    // vue.config.js for less-loader@6.0.0
    css: {
        loaderOptions: {
          less: {
            lessOptions: {
                modifyVars: {
                    //'primary-color': '#1dd2af',
                    //'link-color': '#1dd2af',
                    'border-radius-base': '2px',
                    //'border-color-base': '#1dd2af',
                },
                javascriptEnabled: true,
            },
          },
        },
    },
    devServer: {
        proxy: {
            '/api':{
                // target: "https://www.fastmock.site/mock/0cec57600befe53320c263e5da3805fc/project01",
                // target: "http://192.168.2.129:8088",
                // target: "http://192.168.14.140:9999",
                // target: "http://192.168.50.150:9999",
                target: "http://127.0.0.1:8081",
                changeOrigin:true,
                ws: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
    assetsDir: "static/",
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
			.set('@assets', resolve('src/assets'))
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    productionSourceMap: false, // 打包后在浏览器source里不显示源码
};