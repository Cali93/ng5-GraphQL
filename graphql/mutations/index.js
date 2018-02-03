// const GraphQLSchema = require('graphql').GraphQLSchema;
// const GraphQLObjectType = require('graphql').GraphQLObjectType;
// const queryType = require('../queries/user').queryType;
// const mutation = require('../mutations/index');

// exports.userSchema = new GraphQLSchema({
//   query: queryType,
//   mutation: new GraphQLObjectType({
//     name: 'Mutation',
//     fields: mutation
//   })
// })

const addUser = require('./add').add;
const removeUser = require('./remove').remove;
const updateUser = require('./update').update;

module.exports = {
  addUser,
  removeUser,
  updateUser
}