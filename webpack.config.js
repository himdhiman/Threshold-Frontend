const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, 
        {
            test: /\.ttf$/,
            use: ['file-loader']
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        }
      ]
    },
    plugins: [
        new MonacoWebpackPlugin({output:'workers', languages:['cpp', 'javascript', 'typescript', 'python', 'java'], features:[]}),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
          })
    ]
    
  };