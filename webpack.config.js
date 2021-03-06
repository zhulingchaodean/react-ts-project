const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const path = require("path");
module.exports = function({ development, WEBPACK_SERVE}){
  return {
    mode:development?'development':'production',// 默认开发模式
    devtool:'source-map', // 生成sourcemap 文件
    entry:"./src/index.tsx",
    output:{
      filename:"[name].[hash:5].js",
      path:path.resolve(__dirname,'dist')
    },
    devServer:{
      hot:true, // 配合热更新插件一起使用
      contentBase:path.join(__dirname,'dist'),
      historyApiFallback:{ // browserHistory 刷新重定向到 index.html
        index:'./index.html',
      }
    },
    resolve:{
      extensions:[".ts",".tsx",".js",".json"],
      alias:{
        "@": path.resolve('src'),
        "~":[path.resolve(__dirname,'node_modules')],
      }
    },
    module:{
      rules:[
        {
          test:/\.(j|t)sx?$/,
          loader:"ts-loader",
          options:{
            transpileOnly:true, // 只转义不检查
            getCustomTransformers:()=>({ // 定义自定义转换器
              before:[
                tsImportPluginFactory({
                  libraryName:'antd', // 对哪个模进行按需加载
                  libraryDirectory:"es", // 按需加载必须是 es module
                  style:"css", // 自动引入对应的css
                })
              ]
            }),
            compilerOptions:{
              module: 'es2015'
            }
          },
        // exclude:/node_modules/,
        },
        {
          enforce:'pre',
          test:/\.(j|t)sx?$/,
          use:['source-map-loader'],
        },
        {
          test:/\.css/,
          use:['style-loader','css-loader','postcss-loader']
        },
        {
          test:/\.less$/,
          use:[
            'style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        },
        {
          test:/\.(jpg|png|jpeg|gif|svg)$/,
          use:[ "url-loader" ],
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:"./src/index.html",
        filename: development?'index.html':"index.[hash].html",
      }),
      // 热跟新插件
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin()
    ]

  }
}