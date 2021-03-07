import * as webpack from "webpack";
import path = require("path");

const r = (file: string) => path.resolve(__dirname, file);

module.exports = {
    entry: {
        viewer: r("./src/index.ts"),
    },
    output: {
        path: r("dist"),
        filename: "index.js",
        chunkFilename: "[name]-[fullhash].js",
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    devtool: "source-map",
    module: {
        rules: [
            {
				test: /\.ts|\.js$/,
                exclude: /(node_modules)/,
				loader: "ts-loader",
				options: {  },
			},
        ],
    }
} as webpack.Configuration;
