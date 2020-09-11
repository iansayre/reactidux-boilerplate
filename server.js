const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    COUNTRY: String,
    COUNTRY_CODE: String,
    COMMODITY: String,
    FIXED_OVERHEAD: String,
    VARIABLE_COST: String
  }
`);

// root provides a resolver function for each API endpoint

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

// run the graphql query '{ hello }' and print the response
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
