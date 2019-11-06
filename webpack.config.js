const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  devServer: {
    port: 6868
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
            {
              loader: 'html-loader'
            }
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js"
    }),
  ],
};