const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        trails: [Trail]
        trail(OGF_ID: ID!): Trail
    }

    type Trail {
        X: Float
        Y: Float
        OGF_ID: ID
        TRAIL_NAME: String
        TRAIL_GROUPING: String
        TRAIL_ASSOCIATION: String
        TRAIL_ASSOCIATION_WEBSITE: String
        ACTIVITY: String
        LENGTH_KMS: Float
        DESCRIPTION: String
        TRILLIUM_TRAIL_NETWORK_TYPE: String
        OFSC_TRAIL_DESIGNATION: String
        ORCKA_SWIFTWATER_CLASS: String
        UNESCO_WORLD_HERITAGE_SITE_IND: String
        SIGNAGE_IND: String
        ENVIRONMENTAL_CONCERNS: String
        HAZARD_COMMENT: String
        MIN_WIDTH_CLEARANCE_METERS: Float
        MIN_VERTICAL_CLEARANCE_METERS: Float
        MAX_GRADE: Float
        MAX_CROSS_SLOPE: Float
        OTC_TRAIL_CHALLENGE: String
        STRUCTURE_DESCR: String
        MAX_POSTED_SPEED_LIMIT_KMH: String
        LOCATION_ACCURACY: String
        LOCATION_DESCR: String
        GEOMETRY_UPDATE_DATETIME: String
        EFFECTIVE_DATETIME: String
        SYSTEM_DATETIME: String
        OBJECTID: String
    }

    type Mutation {
        createTrail(input: CreateTrailRequest): CreateTrailResponse
    }

    input CreateTrailRequest {
        X: Float
        Y: Float
        OGF_ID: ID
        TRAIL_NAME: String
        TRAIL_GROUPING: String
        TRAIL_ASSOCIATION: String
        TRAIL_ASSOCIATION_WEBSITE: String
        ACTIVITY: String
        LENGTH_KMS: Float
        DESCRIPTION: String
        TRILLIUM_TRAIL_NETWORK_TYPE: String
        OFSC_TRAIL_DESIGNATION: String
        ORCKA_SWIFTWATER_CLASS: String
        UNESCO_WORLD_HERITAGE_SITE_IND: String
        SIGNAGE_IND: String
        ENVIRONMENTAL_CONCERNS: String
        HAZARD_COMMENT: String
        MIN_WIDTH_CLEARANCE_METERS: Float
        MIN_VERTICAL_CLEARANCE_METERS: Float
        MAX_GRADE: Float
        MAX_CROSS_SLOPE: Float
        OTC_TRAIL_CHALLENGE: String
        STRUCTURE_DESCR: String
        MAX_POSTED_SPEED_LIMIT_KMH: String
        LOCATION_ACCURACY: String
        LOCATION_DESCR: String
        GEOMETRY_UPDATE_DATETIME: String
        EFFECTIVE_DATETIME: String
        SYSTEM_DATETIME: String
        OBJECTID: String
    }

    type CreateTrailResponse {
        trail: Trail
    }
`;

module.exports = { typeDefs };