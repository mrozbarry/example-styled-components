const webpack = require("webpack")
const MinifyPlugin  = require("babel-minify-webpack-plugin")
const path = require("path")

const ROOT = path.resolve(__dirname, "..")

module.exports = {
  entry: {
    "react-sass": path.resolve(ROOT, "src", "react-sass", "index.js"),
    "styled-components": path.resolve(ROOT, "src", "styled-components", "index.js"),
  },

  output: {
    filename: "[name].min.js",
    path: path.resolve(ROOT, "dist"),
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "babel-loader",
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
    ],
  },

  target: "web",

  plugins: [
    new MinifyPlugin()
  ]
}
