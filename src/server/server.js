/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const express = require('express');
const webpack = require('webpack');

const app = express();

const { PORT, ENV } = process.env;

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=z, initial-scale=1.0" />
      <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>Platzi Video</title>
    </head>
    <body>
      <div id="app"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>
  
  `);
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server running at http://localhost:${PORT}`);
});
