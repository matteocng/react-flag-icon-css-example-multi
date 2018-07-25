// @flow
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; // eslint-disable-line import/no-extraneous-dependencies
import autoprefixer from 'autoprefixer'; // eslint-disable-line import/no-extraneous-dependencies
import getPort from './port';

const port = getPort();
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
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        query: {
          modules: useCssModules,
          importLoaders: useCssModules ? 2 : '',
          localIdentName: useCssModules ? '[name]__[local]__[hash:base64:5]' : ''
        }
      },
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

type OptionsType = {
  useCssModules?: boolean,
  moduleVersionReactFlagIconCss: string,
  moduleVersionWebpack: string
}

type MakeConfigReturnType = {
  output: {
    publicPath: string,
    filename: string
  }
}

const makeConfig = (options: OptionsType): MakeConfigReturnType => {
  const useCssModules = JSON.parse(process.env.USE_CSS_MODULES || 'false');
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
      new MiniCssExtractPlugin({ filename: 'bundle.css' }),
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

export default makeConfig;
