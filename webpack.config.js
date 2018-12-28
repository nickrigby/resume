const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: './index.css',
})

module.exports = {
  entry: [
    "./src/index.js",
    "./src/index.scss"
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            exclude: [
              path.resolve(__dirname, 'src/print.scss'),
            ],
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "postcss-loader",
              "sass-loader"
            ]
          },
          { 
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].css",
                  outputPath: "css"
                }
              },
              "extract-loader",
              "css-loader",
              "postcss-loader",
              "sass-loader"
            ]
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [htmlPlugin, miniCssPlugin]
}
