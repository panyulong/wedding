const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') //打包后可视化文件大小
const CircularDependencyPlugin = require('circular-dependency-plugin') //分离
const CompressionPlugin = require('compression-webpack-plugin') //gzip压缩
const resolve = dir=> path.join(__dirname,dir)
module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: 'localhost',
    port: 8090,
    https: false,
    hotOnly: true,
     // 设置代理
    proxy: {
        '/api':{
          target:'http://192.168.0.123:8080',
          ws:true,
          changeOrigin:true,
          pathRewrite: {
            '^/api': '/' 
          }
        }
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
    plugins: [
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: true,
        cwd: process.cwd()
      }),
      new CompressionPlugin({
        // gzip压缩配置
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过244kb的数据进行压缩
        deleteOriginalAssets: true, // 是否删除原文件
      })
    ]
  },
  // 第三方插件配置
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: ["./src/assets/css/public.less"]
   }
  },
  chainWebpack:config=>{
      // 解决动态加载组件出现循环依赖的问题
      config.plugin('html').tap(args => {
        args[0].chunksSortMode = 'none'
        return args
      })
    config.resolve.alias
    .set('@',resolve('src'))
    .set('@c',resolve('src/components'))
  },
  productionSourceMap:false, //打包不生成.map文件
}
