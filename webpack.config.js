// aqui precisamos usar common js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // aqui passaremos todas as instruções que o webpack precisa ter para gerar o bundle dentro do nosso projeto

  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle[hash].js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    // test - a extensão do arquivo que vai usar
    // user - o tipo de loader que vai utilizar
    rules: [
      {
        // expressão regular
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    // colocar a porta que quer rodar o servidor local
    port: 3000,
  },
};
