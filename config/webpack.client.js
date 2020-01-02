const fs = require('fs')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const env = process.env.NODE_ENV || 'development'
console.log(`编译 client...\n当前环境:${env}`)

if(env === 'production'){
  console.log('移除build内文件')
  try{
    let fileUrl = path.resolve(__dirname,'../static/js/build/')
    let files = fs.readdirSync(fileUrl) || []
    files.forEach(fileName => {
      fs.unlinkSync(path.resolve(fileUrl,fileName))
    })
  }catch(e){
    console.log(e)
  }
}

let output_path = ''
if(env == 'development'){
  output_path = path.resolve(__dirname,'../static/js/build/')
}
if(env == 'production'){
  output_path = path.resolve(__dirname,'../static/js/build/')
}


let config = {
  mode: env,
  entry: {
    'index':'./src/client/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkHash].js',
    publicPath:'/static/js/build/',
    path: output_path
  },
  externals:{
    'react':'React',
    'react-dom':'ReactDOM',
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