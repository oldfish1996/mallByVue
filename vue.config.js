// vue.config.js
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  //部署到 github 设置路径
  publicPath: "./",
  //设置文件夹别名
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
  }
}