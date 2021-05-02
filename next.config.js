module.exports = {
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    },
    images: {
      loader: "imgix",
      path: "",
    },
    future: {
      webpack5: true,
    },
    webpack: function (config, options) {
      config.experiments = {};
      return config;
    }
};