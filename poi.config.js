const path = require('path');

const aliases = {
  '@': path.resolve(__dirname, './src')
};

module.exports = () => ({
  entry: './src/main.js',
  extendWebpack(config) {
    config.resolve.alias.merge(aliases);
  },
  port: 8081
});
