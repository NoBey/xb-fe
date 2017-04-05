// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);
// webpackConfig.module={
//     loaders: [{
//       test: /\.js/,
//       exclude: /(node_modules|bower_components)/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['es2015', 'react', "stage-0"]
//       }
//     }]
//   }
  return webpackConfig;
};

//
// module.exports.devServer = {
//   contentBase: 'build/', //本地服务器所加载的页面所在的目录
//   port: 3001,
//   host: '127.0.0.1'
// }
