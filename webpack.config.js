module.exports = {
  entry: './app/main.js',
  output: {
    filename: './build/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader',
        ]
      },
    ]
  },
};