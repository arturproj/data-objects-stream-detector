const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    js: ["babel-polyfill", "./src/index.js"],
    vendor: ["react"],
  },
  module: {
    rules: [
      {
        test: /node_modules[/\\]createjs/,
        use: [
          {
            loader: "exports-loader",
            options: {
              type: "commonjs",
              exports: "single window.createjs",
            },
          },
        ],
      },
      {
        test: /node_modules[/\\]createjs/,
        use: [
          {
            loader: "imports-loader",
            options: {
              wrapper: "window",
            },
          },
        ],
      },
      {
        test: /.(mov|mp4)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      createjs: "createjs/builds/1.0.0/createjs.min.js",
    },
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
