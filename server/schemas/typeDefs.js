const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        county: String
        profileImage: String
        description: String
        services: [Service]
        orders: [Order]
        reviewCount: Int
        reviews: [Review]
    }

    type Service {
        _id: ID
        serviceTitle: String
        serviceBody: String
        fee: Int
        username: String
        county: County
        reviewCount: Int
        reviews: [Review]
        createdAt: String
    }

    type Order {
        _id: ID
        purchaseDate: String
        services: [Service]
    }

    type Review {
        _id: ID
        reviewTitle: String
        reviewBody: String
        username: String
        rating: Int
        createdAt: String
    }

    type County {
        _id: ID
        name: String
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User 
    }

    type Query {
        me: User

        
        counties: [County]
        county(name: String!): County
        services(username: String!): [Service]
        service(_id: ID!): Service
        users: [User]
        user(username: String!): User
        allusers: [User]
        allservices: [Service]
        order(_id: ID!): Order
        checkout(services: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, county: String!): Auth
        addOrder(services: [ID]!): Order
        updateUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, county: String!, profileImage: String!, description: String!) : User
        login(email: String!, password: String!): Auth
        addService(serviceTitle: String!, serviceBody: String!, fee: Int!) : Service
        addUserReview(userId: ID!, reviewTitle: String!, reviewBody: String!, rating: Int!) : User
        addServiceReview(serviceId: ID!, reviewTitle: String!, reviewBody: String!, rating: Int!) : Service
    }
`;

module.exports = typeDefs;