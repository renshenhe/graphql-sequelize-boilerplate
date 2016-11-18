const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const { config: { database } } = require('../config');

const sequelize = new Sequelize(
  database.name,
  database.user,
  database.password,
  {
    dialect: database.dialect,
    host: database.host,
  }
);
// const sequelize = new Sequelize('postgres://postgres:vanilla@192.168.1.27:5432/vanilla');

let db = {};

const modelsDir = path.join(__dirname, 'models');


fs
  .readdirSync(modelsDir)
  .filter(file => {
    return (file.slice(-3) == '.js') && (file !== 'index.js');
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, 'models', file));

    db[model.name] = model;
  })

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate()
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
