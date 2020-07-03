const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') //打包后可视化文件大小
const CircularDependencyPlugin = require('circular-dependency-plugin') //循环引用
const CompressionPlugin = require('compression-webpack-plugin') //gzip压缩
const TerserPlugin = require('terser-webpack-plugin') //代码压缩，生产环境自动删除console
const resolve = dir=> path.join(__dirname,dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? './': '/'
module.exports = {
  // 基本路径
  publicPath: BASE_URL,
  // 输出文件目录
  outputDir: 'wedding',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack-dev-server 相关配置
  devServer: {
    disableHostCheck: true,
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
      // 插件
      config.plugins.push(
        new BundleAnalyzerPlugin(),
        new TerserPlugin({
          cache:true,
          parallel:true,
          sourceMap:true,
          terserOptions:{
            compress: {
                drop_debugger: true,
                drop_console: true,
            },
        }
      }),
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: true,
        cwd: process.cwd()
      }),
      // 目前服务器未开启Gzip,所以源文件不能删除
      new CompressionPlugin({
        // gzip压缩配置
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.json$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过244kb的数据进行压缩
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets: false, // 是否删除原文件
      })
    )         
    }
    // Loader-rules为空或没有匹配到打包会报错
    config.module.rules.push(
       //图片压缩
      {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use:[{
          loader: 'image-webpack-loader',
          options: {bypassOnDebug: true}
      }]
      }
    )
       // 公共代码抽离
       config.optimization = {
          splitChunks: {
              cacheGroups: {
                  vendor: {
                      chunks: 'all',
                      test: /node_modules/,
                      name: 'vendor',
                      minChunks: 1,
                      maxInitialRequests: 5,
                      minSize: 0,
                      priority: 100
                  },
                  common: {
                      chunks: 'all',
                      test: /[\\/]src[\\/]js[\\/]/,
                      name: 'common',
                      minChunks: 2,
                      maxInitialRequests: 5,
                      minSize: 0,
                      priority: 60
                  },
                  styles: {
                      name: 'styles',
                      test: /\.(sa|sc|c)ss$/,
                      chunks: 'all',
                      enforce: true
                  },
                  runtimeChunk: {
                      name: 'manifest'
                  }
              }
          }
    }
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
      config.plugin ('html').tap(args => {
        args[0].chunksSortMode = 'none'
        return args
      })
    config.resolve.alias
    .set('@',resolve('src'))
    .set('@c',resolve('src/components'))
  },
  productionSourceMap:false, //打包不生成.map文件
}
