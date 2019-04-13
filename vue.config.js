const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist', //  输出文件夹
  indexPath: 'index.html',
  assetsDir: 'assets', // 静态资源目录
  filenameHashing: true, // 文件名hash
  // pages: {},//多文件入口
  transpileDependencies: [], // Babel显式转译依赖
  productionSourceMap: false,
  css: {
    modules: true, // 是否开启支持'foo.module.css'样式
    extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/variables.scss";` // 引入公共scss样式
      }
    }
  },
  configureWebpack: {
    entry: {
      app: './src/client/main.ts'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src')
      }
    }
  }
}
