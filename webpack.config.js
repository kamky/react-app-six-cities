/* global __dirname */

// Core
const path = require(`path`);

// Plugins
const {DefinePlugin} = require(`webpack`);

// Webpack config function
module.exports = (_env, argv) => {
  return {
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
    plugins: [
      new DefinePlugin({
        __DEV__: JSON.stringify(argv.mode === `development`),
        __PROD__: JSON.stringify(argv.mode === `production`),
      }),
    ],
  };
};
