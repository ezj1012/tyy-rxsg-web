module.exports = {
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