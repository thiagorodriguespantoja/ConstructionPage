const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinifierPlugin = require("html-minifier-terser");

module.exports = {
    // Outras configurações do webpack...
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
    ],
};
