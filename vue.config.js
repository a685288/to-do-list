module.exports = {
	devServer: {
		proxy: {
			'/api':{
				target: 'https://f664068fc91e.ngrok.io/todo',
				changeOrigin: true,
				pathRewrite: {
					"^/api": '/' 
				}
			}
		}
	}
}