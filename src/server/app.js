require('@babel/register')(
  {
    // presets: ['@babel/preset-react'],
    presets: ['@babel/preset-env','@babel/preset-react']
  }
)

module.exports = require('../reactComponents/app')