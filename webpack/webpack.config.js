import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import ExtractTextPlugin from 'extract-text-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import autoprefixer from 'autoprefixer'; // eslint-disable-line import/no-extraneous-dependencies

const port = 8080;
const JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/;
const CSS_REGEX = /\.css$|\.scss$/;
const context = path.join(__dirname, '../src/js');
export const outputPath = 'www';

type GetRulesInputType = { useCssModules: boolean }

const getRules = ({ useCssModules }: GetRulesInputType): {}[] => [
  {
    test: JS_REGEX,
    loaders: ['babel-loader'],
    exclude: /node_modules/
  },
  {
    test: CSS_REGEX,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          query: {
            modules: useCssModules,
            importLoaders: useCssModules ? 2 : '',
            localIdentName: useCssModules ? '[name]__[local]__[hash:base64:5]' : ''
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [autoprefixer({ browsers: ['last 4 versions'] })]
          }
        },
        { loader: 'sass-loader', options: {} }
      ]
    })
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
];

const config = (options: {}): {} => {
  const useCssModules = JSON.parse(process.env.USE_CSS_MODULES);
  const computedOptions = { useCssModules, ...options };
  const { moduleVersionReactFlagIconCss, moduleVersionWebpack } = computedOptions;

  return {
    context,
    entry: [`webpack-dev-server/client?http://0.0.0.0:${port}/`, path.join(context, 'index.js')],
    output: {
      path: path.join(__dirname, outputPath),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        title: 'React Flag Icon Css - Webpack 2 Example Multi',
        devServerScript: `http://0.0.0.0:${port}/webpack-dev-server.js`,
        template: path.join(__dirname, 'templates/index.ejs'),
        githubRepositoryUrl: 'https://github.com/matteocng/react-flag-icon-css'
      }),
      new ExtractTextPlugin('bundle.css'),
      new webpack.DefinePlugin({
        __USE_CSS_MODULES__: JSON.stringify(JSON.parse(process.env.USE_CSS_MODULES || 'true')),
        MODULE_VERSION_REACT_FLAG_ICON_CSS: JSON.stringify(moduleVersionReactFlagIconCss),
        MODULE_VERSION_WEBPACK: JSON.stringify(moduleVersionWebpack)
      })
    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    module: {
      rules: getRules(computedOptions)
    }
  };
};

export default config;
