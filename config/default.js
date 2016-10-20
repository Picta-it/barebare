/* eslint key-spacing:0 spaced-comment:0 */
const path = require('path');
const ip = require('ip');

const projectBase = path.resolve(__dirname, '..');

/************************************************
/* Default configuration
*************************************************/
module.exports = {
  env : process.env.NODE_ENV || 'development',

  log : {
    level : 'debug'
  },

  /*************************************************
  /* Project Structure
  *************************************************/
  structure : {
    client : path.join(projectBase, 'app'),
    build  : path.join(projectBase, 'build'),
    server : path.join(projectBase, 'server'),
    config : path.join(projectBase, 'config'),
    test   : path.join(projectBase, 'tests')
  },

  /*************************************************
  /* Server configuration
  *************************************************/
  server : {
    host : ip.address(), // use string 'localhost' to prevent exposure on local network
    port : process.env.PORT || 3000
  },

  /*************************************************
  /* Compiler configuration
  *************************************************/
  compiler : {
    babel : {
      cache_directory : true,
      plugins        : ['transform-runtime'],
      presets        : ['es2015', 'react', 'stage-0']
    },
    devtool         : 'source-map',
    hash_type       : 'hash',
    fail_on_warning : false,
    quiet           : false,
    public_path     : '/',
    stats           : {
      chunks : false,
      chunkModules : false,
      colors : true
    }
  },

  /*************************************************
  /* Build configuration
  *************************************************/
  build : {},

  /*************************************************
  /* Test configuration
  *************************************************/
  test : {}
};
