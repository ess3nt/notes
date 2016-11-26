/**
 * Created by Igor on 13.11.2016.
 */
import requestsSettings from './server/app';
import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from  './webpack.dev.config';

import * as db from './server/DataBase/mongodb';
import { serverPort } from './server/config.json';


const port = (process.env.PORT || serverPort);
const app = requestsSettings();

// Set up connection of database
db.setUpConnection();

if (process.env.NODE_ENV !== 'production') {
    console.log('<<<<<<<<<<<<<<<development build>>>>>>>>>>>>>>>');

    const compiler = webpack(config);

    app.use(webpackHotMiddleware(compiler));
    app.use(webpackDevMiddleware(compiler, {
        hot: true,
        noInfo: true,
        publicPath: config.output.publicPath
    }))
} else {
    console.log('<<<<<<<<<<<<<<<production build>>>>>>>>>>>>>>>');
}

const indexPath = __dirname + '/index.html';
const publicPath = express.static(__dirname + '/public');

app.use('/public', publicPath);
app.get('/*',(_, res) => { res.sendFile(indexPath) });

app.listen(port);
console.log(`Listening at http://localhost:${port}`);