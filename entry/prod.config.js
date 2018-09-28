const path = require('path');
module.config = {
	mode: "production",//development|production|none
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'my-first-webpack.bundle.js'
	}
};