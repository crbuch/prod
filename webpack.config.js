const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['curves','table','yesterdaysProd','wbd','analyzeTable'];
let allHtmlPlugs = htmlPageNames.map(page => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${page}.html`, 
    filename: `${page}.html`, 
    chunks: [`${page}`] 
  })
});

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main:'./src/js/index.js',
    curves:'./src/js/curves.js',
    table:'./src/js/table.js',
    yesterdaysProd:'./src/js/yesterdaysProd.js',
    wbd:'./src/js/wbd.js',
    analyzeTable:'./src/js/analyzeTable.js'
  },
  experiments: {
    topLevelAwait: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['main']
    })
  ].concat(allHtmlPlugs),
  module: {
    rules: [
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
    ],
  },
};
