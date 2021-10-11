const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const NotifierWebpackPlugin = require('webpack-notifier');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const isDevTool = isDev ? 'source-map' : false;
const EXCLUDED_FOLDER = /(node_modules|bower_components)/;

const getFilename = (extension) => {
  return isProd ? `[name].[hash].${extension}` : `[name].${extension}`;
};

const getPostCssLoader = () => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: ['autoprefixer'],
    },
  },
});

const cssLoaders = (loaderExtra) => {
  const postCssLoader = getPostCssLoader();

  const loaders = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    postCssLoader,
  ];

  if (loaderExtra) {
    loaders.push(loaderExtra)
  }

  return loaders;
};

const getBabelOptions = (presetExtra) => {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: [],
  };

  if (presetExtra) {
    options.presets.push(...presetExtra);
  }

  return options;
};

const jsLoaders = (...loaderExtra) => ({
  loader: 'babel-loader',
  options: getBabelOptions(loaderExtra),
});

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './js/index.tsx',
  output: {
    filename: getFilename('js'),
    path: path.resolve(__dirname, 'build'),
    publicPath : '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    watchContentBase: true,
    port: 8082,
    open: true,
    writeToDisk: isProd,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: getFilename('css'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'build/img'),
        },
        // {
        //   from: path.resolve(__dirname, 'src/fonts'),
        //   to: path.resolve(__dirname, 'build/fonts'),
        // },
      ],
    }),
    new NotifierWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.js$/,
        exclude: EXCLUDED_FOLDER,
        use: jsLoaders(),
      },
      {
        test: /\.jsx$/,
        exclude: EXCLUDED_FOLDER,
        use: jsLoaders('@babel/preset-react'),
      },
      {
        test: /\.ts$/,
        exclude: EXCLUDED_FOLDER,
        use: jsLoaders('@babel/preset-typescript'),
      },
      {
        test: /\.tsx$/,
        exclude: EXCLUDED_FOLDER,
        use: jsLoaders('@babel/preset-react', '@babel/preset-typescript'),
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  devtool: isDevTool,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  performance: {
    assetFilter(assetFilename) {
      return !/\.(map|png|jpe?g|webp)$/.test(assetFilename);
    },
  },
};
