const express = require('express');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleWare(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallBack: true,
}));

const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address.port;
    console.log('Bla bla');
});