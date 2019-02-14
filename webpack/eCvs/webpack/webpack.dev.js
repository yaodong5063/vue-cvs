const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');   
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entry = require('./webpack.entry.js'); //entery配置文件
const pluginfs=require('./webpack.plugins.js'); //plugins配置文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const assetsPath = function (_path) {
  const assetsSubDirectory =  'production';

  return path.posix.join(assetsSubDirectory, _path)
}
module.exports = {
    mode:'production',  //有development和production两种打包模式
    //写入
    entry:entry,
    //输出
    output:{
        path:path.join(__dirname, '../dist'),
        filename:'js/[name].js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        
      }
    },
    module:{
        rules:[
             // 解析.vue文件
             {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                  loaders: {
                      css: 'vue-style-loader!css-loader',
                      less: 'vue-style-loader!css-loader!less-loader'
                  },
                  postLoaders: {
                      html: 'babel-loader'
                  }
              }
            },
            {
              test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
              loader: 'url-loader?limit=1024'
            },
            // 转化ES6的语法
            {
              test:/\.js$/,
              exclude: /(node_modules|bower_components)/, // 防止将node_modules 中的js 转码
              use: [
                      {
                          loader: 'babel-loader',
                          options: {
                              presets: ['es2015']
                          }
                      }, 
               ],
            },
            {
              test: /\.css$/,
              use: [
                'vue-style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.scss$/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: { modules: true }
                },
                'sass-loader'
              ]
            },
            {
              test: /\.sass$/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: { modules: true }
                },
                'sass-loader'
              ]
            },
            {
              test: /\.less$/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: { modules: true }
                },
                'less-loader'
              ]
            }
        ]
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new VueLoaderPlugin()
       
    ],
    devServer: {
       contentBase: path.join(__dirname, "./../src"),
       proxy: {
        '/websocket': {
           target: 'ws://47.52.191.198:9502',
           ws: true
        },
       }, 
       port:9001,
       host:'127.0.0.1',
       overlay: true,
       stats: "errors-only",
       inline: true,//实时刷新
       disableHostCheck:true
    }
}