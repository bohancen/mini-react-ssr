const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const env = process.env.NODE_ENV || 'development'
console.log(`编译 client...\n当前环境:${env}`)

let output_path = ''
if(env == 'development'){
  output_path = path.resolve(__dirname,'../static/js/')
}
if(env == 'production'){
  output_path = path.resolve(__dirname,'../static/js/')
}


let config = {
  mode: env,
  entry: {
    'index':'./src/client/index.js',
  },
  output: {
    filename: '[name].js',
    path: output_path
  },
  optimization: {
    minimizer: [new TerserPlugin({parallel: false})]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
						[require.resolve('@babel/preset-env'), {
							targets: {
								browsers: ['last 2 versions', 'IE >= 9']
							},
							modules: false,
							loose: true
						}],
						[require.resolve('@babel/preset-react')],
          ],
          // plugins: [
					// 	[require.resolve('@babel/plugin-transform-runtime')],
					// ]
        }
      }
    ]
  }
}
if(env == 'development'){
  config.devtool= 'cheap-module-source-map'
}else{
  config.devtool= 'nosources-source-map'
}
module.exports = config