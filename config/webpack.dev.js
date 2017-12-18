const path = require("path")

const ROOT = path.resolve(__dirname, "..")

module.exports = {
  devtool: "inline-cheap-module-source-map",

  entry: {
    "react-sass": path.resolve(ROOT, "src", "react-sass", "index.js"),
    "styled-components": path.resolve(ROOT, "src", "styled-components", "index.js"),
  },

  output: {
    filename: "[name].js",
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

  devServer: {
    port: 8080,
    host: "0.0.0.0",
    contentBase: path.resolve(ROOT, "public"),
    stats: true,
  },
}
