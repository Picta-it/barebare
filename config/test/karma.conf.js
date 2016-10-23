const argv = require('yargs').argv;
const path = require('path');
const config = require('config');
const webpackConfig = require('../build');
const winston = require('winston');

winston.info('Creating karma configuration ...');

const karmaConfig = {
  failOnEmptyTestSuite: false,
  basePath            : '../../', // project root in relation to bin/karma.js
  files               : [
    {
      pattern : `./tests/preprocessor.js`,
      watched : false,
      served  : true,
      included: true
    }
  ],
  singleRun    : !argv.watch,
  frameworks   : ['mocha'],
  reporters    : ['mocha'],
  preprocessors: {
    [`./tests/preprocessor.js`]: ['webpack']
  },
  browsers: ['PhantomJS'], // <=== Issue
  webpack : {
    devtool: 'cheap-module-source-map',
    resolve: Object.assign({}, webpackConfig.resolve, {
      alias: Object.assign({}, webpackConfig.resolve.alias, {
        sinon: 'sinon/pkg/sinon.js'
      })
    }),
    plugins: webpackConfig.plugins,
    module : {
      noParse: [
        /\/sinon\.js/
      ],
      loaders: webpackConfig.module.loaders.concat([{
        test  : path.join('sinon', 'pkg', 'sinon.js'),
        loader: 'imports?define=>false,require=>false'
      }])
    },
    // Enzyme fix, see:
    // https://github.com/airbnb/enzyme/issues/47
    externals: Object.assign({}, webpackConfig.externals, {
      'react/addons'                  : true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext'        : 'window'
    }),
    sassLoader: webpackConfig.sassLoader
  },
  webpackMiddleware: {
    noInfo: true
  },
  coverageReporter: {
    reporters: config.test.reporters
  }
};

if (false) {
  karmaConfig.reporters.push('coverage');
  karmaConfig.webpack.module.preLoaders = [{
    test   : /\.(js|jsx)$/,
    include: new RegExp('app'),
    loader : 'babel',
    query  : Object.assign({}, config.compiler.babel, {
      plugins: (config.compiler.babel.plugins || []).concat('istanbul')
    })
  }];
}

module.exports = (config) => config.set(karmaConfig);
