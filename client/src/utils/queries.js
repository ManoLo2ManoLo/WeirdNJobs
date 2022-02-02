import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            firstName
            lastName
            username
            county
            email
            profileImage
            description
            services {
                _id
                serviceTitle
                serviceBody
                fee
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

export const QUERY_SERVICES = gql`
    query services($username: String) {
        services(username: $username) {
            _id
            serviceTitle
            serviceBody
            fee
            username
            createdAt
        }
    }     
`
export const QUERY_SERVICE = gql`
    query service($id: ID!) {
        service(_id: $id) {
            _id
            serviceTitle
            serviceBody
            fee
            username
            createdAt
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
`

export const QUERY_ALL_SERVICES = gql`
    query allservices {
        allservices {
        _id
        serviceTitle
        serviceBody
        fee
        username
        county {
            _id
            name
        }
        reviewCount
        createdAt
        }
    }  
`

export const QUERY_COUNTIES = gql`
    query counties {
        counties {
            _id
            name
        }
    }
`

export const QUERY_COUNTY = gql`
    query County($name: String!) {
        county(name: $name) {
            _id
        }
    }
`