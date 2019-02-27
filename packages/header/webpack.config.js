const path = require("path");

module.exports = {
    entry: "./src/component/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    mode: "development",
    devtool: "cheap-module-source-map"
};
