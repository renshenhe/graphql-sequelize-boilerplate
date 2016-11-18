const { GraphQLSchema } = require('graphql');
const Query = require('./queries');
const Mutation = require('./mutations');

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = Schema;
