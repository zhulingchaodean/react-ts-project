const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode:"development",
    devtool:false,
    entry:"./src/index.tsx",
    output:{
        filename:"[name].[hash:5].js",
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        hot:true,
        contentBase:path.join(__dirname,'dist'),
        historyApiFallback:{ // browserHistory 刷新重定向到 index.html
            index:'./index.html',
        }
    },
    resolve:{
        extensions:[".ts",".tsx",".js",".json"],
        alias:{
            "@": path.resolve('src'),
        }
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.[hash].html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]

}