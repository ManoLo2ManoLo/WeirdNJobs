import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            firstName
            lastName
            username
            county
            profileImage
            description
            services {
                _id
                serviceTitle
                serviceBody
                fee
                reviews {
                    _id
                    reviewTitle
                    reviewBody
                    username
                    rating
                    createdAt
                }
                createdAt
            }
            orders {
                _id
                purchaseDate
                services {
                    _id
                    serviceTitle
                    serviceBody
                    fee
                    username
                    createdAt
                }
            }
            reviewCount
            reviews {
                _id
                reviewTitle
                reviewBody
                username
                rating
                createdAt
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            firstName
            lastName
            username
            county
            profileImage
            description
            services {
                _id
                serviceTitle
                serviceBody
                fee
                reviews {
                    _id
                    reviewTitle
                    reviewBody
                    username
                    rating
                    createdAt
                }
                createdAt
            }
            orders {
                _id
                purchaseDate
                services {
                    _id
                    serviceTitle
                    serviceBody
                    fee
                    username
                    createdAt
                }
            }
            reviewCount
            reviews {
                _id
                reviewTitle
                reviewBody
                username
                rating
                createdAt
            }
        }
    }
`;
