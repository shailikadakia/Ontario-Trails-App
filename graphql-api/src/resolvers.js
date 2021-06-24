const fetch = require("node-fetch");

const API_URL = `http://localhost:4000/api/v1`;

const resolvers = {
    Query: {
        trails: async (parent, args, context, info) => {
            const res = await fetch(`${API_URL}/trails`);
            const data = await res.json();
            return data.map(d => d.properties);
        },
        trail: async (parent, args, context, info) => {
            const { OGF_ID } = args;
            const res = await fetch(`${API_URL}/trails/${OGF_ID}`);
            if (res.ok) {
                const data = await res.json();
                return data.properties;
            } else {
                return { error: "No such trail exists" };
            }
        }
    },
    Mutation: {
        createTrail: async (parent, args, context, info) => {
            const res = await fetch(`${API_URL}/trails`, {
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify(args.input),
            });
            return {
                trail: args.input
            }
        }
    }
}

module.exports = { resolvers };