// Hopefully this configuration can go back soon into webpack.config.js.
// SEE: https://github.com/postcss/postcss-loader/issues/92#issuecomment-267206639
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['last 4 versions']
    },
  },
};
