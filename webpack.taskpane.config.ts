import HtmlWebpackPlugin from 'html-webpack-plugin';
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
      filename: 'taskpane-html.html',
      template: './taskpane/assets/html/index.html',
    }),
  ],
};

export default configuration;
