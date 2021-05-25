module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://tyy/rxsg',
        ws: true,
        changeOrigin: true
      }
    }
  }
}