import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' // eslint-disable-line import/no-extraneous-dependencies
import ExtractTextPlugin from 'extract-text-webpack-plugin'  // eslint-disable-line import/no-extraneous-dependencies
import autoprefixer from 'autoprefixer' // eslint-disable-line import/no-extraneous-dependencies

const port = 8080
const JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/
const CSS_REGEX = /\.css$|\.scss$/
const context = path.join(__dirname, '../src/js')
export const outputPath = 'www'

const makeExtractTextLoader = ({ useCssModules }: { useCssModules: boolean }): string =>
  ExtractTextPlugin.extract(
    'style-loader!',
    [`css-loader?importLoaders=1${useCssModules ? '&modules=2&localIdentName=[name]__[local]__[hash:base64:5]' : ''}`,
      'postcss-loader',
      'sass-loader'
    ].join('!')
  )

const getLoaders = (options: {}): {}[] => [
  {
    test: JS_REGEX,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
      cacheDirectory: true
    }
  },
  {
    test: CSS_REGEX,
    loader: makeExtractTextLoader(options),
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
]

const config = (options: {}): {} => {
  const useCssModules = JSON.parse(process.env.USE_CSS_MODULES)
  const computedOptions = { useCssModules, ...options }

  return {
    context,
    entry: [
      `webpack-dev-server/client?http://0.0.0.0:${port}/`,
      path.join(context, 'index.js'),
    ],
    output: {
      path: path.join(__dirname, outputPath),
      filename: 'bundle.js',
      publicPath: '/',
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    module: {
      loaders: getLoaders(computedOptions),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        inject: 'body',
        title: 'React Flag Icon Css - Webpack 1 Example Multi',
        devServerScript: `http://0.0.0.0:${port}/webpack-dev-server.js`,
        template: path.join(__dirname, 'templates/index.ejs'),
        githubRepositoryUrl: 'https://github.com/matteocng/react-flag-icon-css'
      }),
      new ExtractTextPlugin('bundle.css'),
      new webpack.DefinePlugin({
        __USE_CSS_MODULES__: JSON.stringify(JSON.parse(process.env.USE_CSS_MODULES || 'true'))
      })
    ],
    postcss: (): [] => ([
      autoprefixer({ browsers: ['last 4 versions'] })
    ])
  }
}

export default config
