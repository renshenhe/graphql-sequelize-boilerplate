const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const path = require('path');
const Schema = require('../graphql');
const cors = require('cors');
const app = express();
const db = require('../sequelize').sequelize;
const { server: { host, port } } = require('../config');

app.use(bodyParser.json());

app.use('/graphql', cors(), graphqlHttp((request, response) => {
  let body = {
    schema: Schema,
    graphiql: true,
    context: request.body, 
  };
  return body;
}))

db.sync()
  .then(() => {
    app.listen(port, host, () => {
      console.log(`Graphql server listening on ${host}:${port}!`);
    });
  })