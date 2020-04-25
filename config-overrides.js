const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias, adjustStyleLoaders } = require('customize-cra');
const path = require('path');
const { getThemeVariables } = require('antd/dist/theme');

const rewiredMap = () => config => {
  console.log('mode:::', config.mode);
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      ...getThemeVariables({
        dark: true, // 开启暗黑模式
        compact: true, // 开启紧凑模式
      }),
      '@primary-color': '#F5222D',
    },
    localIdentName: '[local]--[hash:base64:5]',
  }),
  rewiredMap(), // 关闭mapSource
  addDecoratorsLegacy(), // 支持装饰器
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
  adjustStyleLoaders((rules) => {
    if (rules.test.toString().includes('less')) {
      rules.use.push({
        loader: 'style-resources-loader',
        options: {
          patterns: path.resolve(__dirname, './src/common/css/mixins.less'),
        },
      });
    }
  }),
);
