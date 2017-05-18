require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router');
const ServerRouter = ReactRouter.ServerRouter;
const _ = require('lodash');
const fs = require('fs');
const PORT = 5050;

const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const App = require('./src/app').default; // from es6 to es5

const server = express();
server.use('/dist', express.static('./dist'));
server.use((req, res) => {
    const context = ReactRouter.createServerRenderContext();
    const body = ReactDOMServer.renderToString(
        React.createElement(ServerRouter, { location: req.url, context: context },
            React.createElement(App))
    )

    res.write(template({ body: body }));
    res.end();
});

console.log('listening on port',PORT);
server.listen(PORT);