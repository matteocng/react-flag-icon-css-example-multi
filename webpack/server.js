import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import path from 'path'

import configMaker, { outputPath } from './webpack.config.js'

const config = configMaker()
var compiler = webpack(config)



const server = new WebpackDevServer(compiler, {
  contentBase: outputPath,
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
})

server.listen(8080, '0.0.0.0', () => {})
