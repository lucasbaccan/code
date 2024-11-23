module.exports = function (context, options) {
  return {
    name: "custom-docusaurus-plugin",
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          // alias: {
          //   path: require.resolve("path-browserify"),
          // },
          fallback: {
            fs: false,
            path: false,
            crypto: false,
          },
        },
      };
    },
  };
};
