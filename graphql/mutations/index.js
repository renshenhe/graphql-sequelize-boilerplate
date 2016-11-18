const { GraphQLObjectType } = require('graphql');

const Mutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Mutates data',
  fields: () => ({

  })
});

module.exports = Mutation;