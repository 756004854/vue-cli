
const path = require('path')
function resolve (dir) {
return path.join(__dirname,dir)
}

module.exports = {
  outputDir: "dist", // 生成目录
  lintOnSave: false,
  baseUrl: './',
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('layout',resolve('src/layout'))
        .set('base',resolve('src/base'))
        .set('static',resolve('src/static'))
  },
  devServer: {
    port: 8000, // 端口号
    open: true,// 是否启动浏览器
    
    proxy: {
      '/api': {
        target: 'http://api.douban.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
// https://api.peibanwan.com/userInfo_updatePasswordByTelphone 