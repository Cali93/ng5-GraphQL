const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require ('graphql');

// Customer Type

const CustomerType = new GraphQLObjectType({
  name:'Customer',
  fields: ()=>({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    age: {type:GraphQLInt}
  })
})

// Hardcoded data 

const customers = [
  {id:'1',name:"John Doe", email:"jdoa@gmail.com",age:35},
  {id:'2',name:"Yann Dae", email:"yanndoa@gmail.com",age:22},
  {id:'3',name:"Janette Pae", email:"janettedoa@gmail.com",age:33}
]

// Root Query
const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    customer:{
      type:CustomerType,
      args:{
        id:{type:GraphQLString}
      },
      resolve(parentValue, args){
        for(let i = 0; i < customers.length; i++){
          if(customers[i].id == args.id){
            return customers[i];
          }
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})