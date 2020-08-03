const path = require('path')
const nodeExternals = require('webpack-node-externals')
const env = process.env.NODE_ENV || 'development'
console.log(`编译 server...\n当前环境:${env}`)

const serverConfig = {
  mode: env,
  target: 'node',
  entry: './src/reactComponents/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../build_server'),
    libraryTarget: 'commonjs',
  },
  externals:[nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
						[require.resolve('@babel/preset-react')],
          ],
          plugins: [
						// [require.resolve('@babel/plugin-transform-runtime')],
            [require.resolve('@babel/plugin-syntax-dynamic-import')],
					]
        }
      }
    ]
  }
}

// development 与 production 不同的配置
if(env == 'development'){
  serverConfig.devtool = 'inline-source-map'
}else{
  serverConfig.devtool = 'source-map'
}

module.exports = serverConfig