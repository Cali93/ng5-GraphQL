const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphNonNull = require('graphql').GraphNonNull;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;

// User Type

exports.userType = new GraphQLObjectType({
  name:'user',
  fields: function(){
    return{
      id:{
        type: new GraphQLNonNull(GraphQLID)
      },
      name:{
        type: GraphQLString
      }
    }
  }
});