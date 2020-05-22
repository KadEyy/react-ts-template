const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "bulid"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
            test: /\.tsx?$/
            }
        ]
    },
    plugins: [

    ]
}