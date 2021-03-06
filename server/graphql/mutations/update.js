const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const UserType = require('../types/user');
const UserModel = require('../../models/user');

exports.update = {
  type: UserType.userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    return UserModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name, email: params.email } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}