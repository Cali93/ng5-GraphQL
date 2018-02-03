const express = require('express');
const expressGraphQL = require ('express-graphql');
const mongoose = require('./config/mongoose');
const cors = require('cors');
const db = mongoose();
const app = express();

app.use('*', cors())

const userSchema = require ('./graphql/index').userSchema;

app.use('/graphql', cors(), expressGraphQL({
  schema:userSchema,
  rootValue:global,
  graphiql:true
}));

const port = process.env.PORT || 4000

app.listen(port, ()=>{
  console.log('Server is running on port' + port)
})