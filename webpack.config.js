const HtmlWebPackPlugin = require("html-webpack-plugin");
path = require("path");

const APP_DIR = path.resolve(__dirname, "./src/");
const INDEX_DIR = path.resolve(__dirname, "./src/index.html");

module.exports = {
  historyApiFallback: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
