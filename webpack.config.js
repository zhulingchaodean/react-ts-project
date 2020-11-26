const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
let mode = process.env.NODE_ENV == 'production'?'production':'development';
module.exports = {
  mode,// 默认开发模式
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
      "~":path.resolve(__dirname,'node_modules'),
    }
  },
  module:{
    rules:[
      {
        test:/\.(j|t)sx?$/,
        use:['ts-loader'],
        exclude:/node_modules/,
      },
      {
        enforce:'pre',
        test:/\.(j|t)sx?$/,
        use:['source-map-loader'],
      },
      {
        test:/\.css/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
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
      filename:"index.[hash].html",
    }),
    // 热跟新插件
    new webpack.HotModuleReplacementPlugin(),
  ]

}