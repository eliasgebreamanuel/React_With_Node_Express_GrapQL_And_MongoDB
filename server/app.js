const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

// this is used to connect to the mongodb database
mongoose.connect('mongodb+srv://eliasgebreamanuelhailu:23687930@gql-react.glejirf.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected To Database');
});

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});