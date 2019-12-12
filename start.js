require('@babel/register')(
  {
    presets: ['@babel/preset-env','@babel/preset-react','@babel/preset-typescript']
  }
)

module.exports = require('./src/index.js')