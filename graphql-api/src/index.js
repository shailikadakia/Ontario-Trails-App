const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const PORT = process.env.PORT || 3030;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(PORT).then(({ url }) => console.log(`🚀 GraphQL Server running at ${url}`));
