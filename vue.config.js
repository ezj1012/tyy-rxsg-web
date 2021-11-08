module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      '/sanguo': {
        target: 'http://127.0.0.1/sanguo',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/sanguo': ''
        }
      }
    }
  }
}