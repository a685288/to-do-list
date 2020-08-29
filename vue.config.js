module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "https://8f9d8c69a5e8.ngrok.io/todo",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    }
}