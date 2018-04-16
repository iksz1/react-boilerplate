const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "public/index.html",
  // favicon: "public/favicon.ico",
  // filename: "index.html",
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    useShortDoctype: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
});

const extractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: ["./config/polyfills.js", "./src/index.js"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/"
    },
    devtool: isProduction ? false : "eval-source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true, //set to false if you don't want to use css modules
                camelCase: true,
                sourceMap: true,
                minimize: true, //in production only?
                localIdentName: "[name]_[local]_[hash:base64:5]"
                // importLoaders: 2
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: [
                  autoprefixer({
                    browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 11"]
                  })
                ]
              }
            },
            //this can be removed if you don't use sass
            "sass-loader"
          ]
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          loader: "url-loader",
          options: { limit: 4096, name: "[name].[hash:8].[ext]" }
        }
      ]
    },
    devServer: {
      compress: true,
      overlay: true,
      historyApiFallback: true,
      stats: "minimal"
    },
    stats: { children: false, modules: false },
    plugins: [htmlPlugin, extractPlugin]
  };
};
