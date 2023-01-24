const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['curves','table','yesterdaysProd','wbd','analyzeTable'];
let allHtmlPlugs = htmlPageNames.map(page => {
  let chunk = [`${page}`] 
  if (page.slice(-2) == 'ET'){
    chunk = page.substring(0,page.length - 2)
    console.log("chunk",chunk)
  }

  return new HtmlWebpackPlugin({
    template: `./src/pages/${page}.html`, 
    filename: `${page}.html`, 
    chunks: [`${chunk}`] 
  })
});
console.log(allHtmlPlugs)
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
      main:'./src/index.js',
      curves:'./src/curves.js',
      table:'./src/table.js',
      yesterdaysProd:'./src/yesterdaysProd.js',
      wbd:'./src/wbd.js',
      analyzeTable:'./src/analyzeTable.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/pages/index.html',
          chunks: ['main']
        })
      ].concat(allHtmlPlugs)
};