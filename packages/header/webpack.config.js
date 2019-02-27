const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
    plugins: [
        new CleanWebpackPlugin("public")
    ],
    mode: "development",
    devtool: "inline-source-map"
};
