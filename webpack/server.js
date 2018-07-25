// eslint-disable-next-line import/no-extraneous-dependencies
import WebpackDevServer from 'webpack-dev-server';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
import configMaker, { outputPath } from './webpack.config';
import getPort from './port';
import packageJson from '../package.json';

const {
  dependencies,
  devDependencies: { webpack: moduleVersionWebpack }
} = packageJson;
const moduleVersionReactFlagIconCss = dependencies['react-flag-icon-css'];

const config = configMaker({ moduleVersionReactFlagIconCss, moduleVersionWebpack });
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: outputPath,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

const port = getPort();
server.listen(port, '0.0.0.0', () => {});
