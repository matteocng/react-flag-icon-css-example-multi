import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'


const port = 8080
const JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/
const CSS_REGEX = /\.css$|\.scss$/
const context = path.join(__dirname, '../src/js')
export const outputPath = 'www'


const getRules = options => {
  const useCssModules = JSON.parse(process.env.USE_CSS_MODULES)

  return [
    {
      test: JS_REGEX,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: CSS_REGEX,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: [
          { loader: 'css-loader', query: {
            modules: useCssModules,
            importLoaders: useCssModules ? 2 : '',
            localIdentName: useCssModules ? '[name]__[local]__[hash:base64:5]' : ''
          } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader', options: {} }
        ]
      }),
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    },
    {
      test: /\.json$/,
      loader: "json-loader"
    }
 ]
}


const config = options => {
  return {
    context: context,
    entry: [
      `webpack-dev-server/client?http://0.0.0.0:${port}/`,
      path.join(context, 'index.js'),
    ],
    output: {
      path: path.join(__dirname, outputPath),
      filename: 'bundle.js',
      publicPath: '/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        title: 'React Flag Icon Css - Webpack Example Multi',
        devServerScript: `http://0.0.0.0:${port}/webpack-dev-server.js`,
        template: path.join(__dirname, 'templates/index.ejs'),
        githubRepositoryUrl: 'https://github.com/matteocng/react-flag-icon-css'
      }),
      new ExtractTextPlugin('bundle.css'),
      new webpack.DefinePlugin({
        __USE_CSS_MODULES__: JSON.stringify(JSON.parse(process.env.USE_CSS_MODULES || 'true'))
      })
    ],
    node: {
      fs: "empty"
    },
    module: {
      rules: getRules(options)
   }
 }
}

export default config
