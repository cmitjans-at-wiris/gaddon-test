import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineWebpackPlugin from 'html-inline-script-webpack-plugin';
import { Configuration } from 'webpack';

const configuration: Configuration = {
  entry: {
    taskpane: './taskpane/src/main.ts',
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'taskpane.html',
      template: './taskpane/assets/html/index.html',
    }),
    new HtmlInlineWebpackPlugin(),
  ],
};

export default configuration;
