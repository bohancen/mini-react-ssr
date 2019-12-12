require('@babel/register')(
  {
    "presets": ['@babel/preset-typescript'],
    "plugins": [
      // "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread"
    ],
    extensions: ['.js', '.ts']
  }
)

require('./srcT/index.ts')