module.exports = (api) => {
  const env = api.env();

  api.cache.using(() => env === `development`);

  const presets = [
    [
      `@babel/preset-env`,
      {
        targets: {
          node: `current`,
        },
      },
    ],
    `@babel/preset-react`,
  ];

  const plugins = [];

  // if (env === `development`) {}

  return {
    presets,
    plugins,
  };
};
