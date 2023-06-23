const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let htmlPageNames = ['curves','table','yesterdaysProd','wbd','analyzeTable','profile'];
let allHtmlPlugs = htmlPageNames.map(page => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${page}.html`, 
    filename: `${page}.html`, 
    chunks: [`${page}`] 
  })
});

module.exports = {
  mode: 'development',
  //devtool: 'eval-source-map',
  entry: {
    main:'./src/js/index.js',
    curves: './src/js/curves.js',
    table:'./src/js/table.js',
    yesterdaysProd:'./src/js/yesterdaysProd.js',
    wbd:'./src/js/wbd.js',
    analyzeTable:'./src/js/analyzeTable.js',
    profile: './src/js/profile.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['main']
    })
  ].concat(allHtmlPlugs),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
