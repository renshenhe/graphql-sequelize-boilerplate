const { GraphQLObjectType } = require('graphql');

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({

  })
});

module.exports = Query;
