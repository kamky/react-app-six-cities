/* global __dirname */
const path = require(`path`);

module.exports = {
  devtool: `source-map`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    port: 1337,
    open: true,
    compress: false,
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`],
  },
};
