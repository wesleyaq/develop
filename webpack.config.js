const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = [
  'index',
  'documentacion'
];

var htmlPages = pages.map(function(page) {
  return new HtmlWebPackPlugin({
    template: `./src/${page}.html`,
    filename: `./${page}.html`
  })
});

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: './dist'/*,
    contentBase: path.join(__dirname, 'dist'),
    // port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.scss$/, ///\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
    ]
  },
  plugins: [
    /*new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      // favicon: "./img/favicon.png"
    }),
    new HtmlWebPackPlugin({
      template: "./src/documentacion.html",
      filename: "./documentacion.html"
    }), */
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "css/[id].css"
    })
  ].concat(htmlPages)
};