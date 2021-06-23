const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        trails: [ID]
    }
`;

module.exports = { typeDefs };