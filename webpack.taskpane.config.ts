import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineWebpackPlugin from 'html-inline-script-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';

const configuration: Configuration = {
  entry: {
    taskpane: './taskpane/src/main.ts',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'taskpane.html',
      template: './taskpane/assets/html/index.html',
      inject: 'body',
    }),
    new HtmlInlineWebpackPlugin(),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};

export default configuration;
