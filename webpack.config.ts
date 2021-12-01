import { Configuration } from 'webpack';
import GasPlugin from 'gas-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const configuration: Configuration = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@src': `${__dirname}/src`,
    },
    extensions: ['.ts'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets/html/index.html',
        },
      ],
    }),
    new GasPlugin(),
  ],
  stats: {
    children: true,
  },
};

export default configuration;
