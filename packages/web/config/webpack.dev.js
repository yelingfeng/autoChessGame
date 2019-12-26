const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const staticPath = path.resolve(__dirname, '../../../static/')
const appCssPath = path.resolve(__dirname, '../public/app.css')
const templatePath = path.resolve(__dirname, '../public/index.html')

module.exports = {
  entry: {
    game: './src/index.ts'
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 9000,
    contentBase: './build'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    pathinfo: false,
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: 'file-loader'
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  stats: true,
  plugins: [
    new webpack.DefinePlugin({
      'typeof SHADER_REQUIRE': JSON.stringify(false),
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new CopyWebpackPlugin([
      {
        from: staticPath,
        to: './static',
        force: true
      },
      {
        from: appCssPath,
        to: './app.css',
        force: true
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: templatePath
    })
  ]
}
