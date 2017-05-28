import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import webpackConfig, { outputPath } from './webpack.config'


const configMaker = webpackConfig
const config = configMaker()
const compiler = webpack(config)


const server = new WebpackDevServer(compiler, {
  contentBase: outputPath,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
})

server.listen(8080, '0.0.0.0', () => {})
