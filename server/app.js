const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/Schema');

app.use(cors());

mongoose.connect('',{useUnifiedTopology:true,useNewUrlParser:true}).then((result)=>{
    app.listen(4000,()=>{
        console.log('Server is running with the database...')
    });
});
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


