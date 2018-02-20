var path = require("path");

module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.handlebars$/,
            loader: __dirname + "/../../"
        }]
    }
};
