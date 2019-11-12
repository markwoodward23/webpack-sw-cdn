const HtmlWebPackPlugin = require("html-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const workbox = new workboxPlugin.GenerateSW({
  swDest: 'build.sw.js',
  importWorkboxFrom: 'local',
  exclude: [
    /index\.html$/,
  ],
  runtimeCaching: [
    {
      urlPattern: /index\.html/,
      handler: 'networkFirst',
    },
    {
      urlPattern: /\.(js|css|png|jpg|gif)/,
      handler: 'staleWhileRevalidate',
    },
    {
      urlPattern: new RegExp('^https://unpkg\.com/*'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }
  ]
});

module.exports = {
  externals: {
    'react': 'React', 
    'react-dom' : 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    workbox
  ]
};

