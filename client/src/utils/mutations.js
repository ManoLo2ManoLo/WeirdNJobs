import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $county: String!) {
        addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, county: $county) {
            token
            user {
                _id
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $county: String!, $profileImage: String!, $description: String!) {
        updateUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, county: $county, profileImage: $profileImage, description: $description) {
            _id
        }
    }
`
export const ADD_SERVICE = gql`
    mutation addService($serviceTitle: String!, $serviceBody: String!, $fee: Int!) {
        addService(serviceTitle: $serviceTitle, serviceBody: $serviceBody, fee: $fee) {
            _id
        }
    }
`

export const ADD_USER_REVIEW = gql`
    mutation addUserReview($username: String!, $reviewTitle: String!, $reviewBody: String!, $rating: Int!) {
        addUserReview(username: $username, reviewTitle: $reviewTitle, reviewBody: $reviewBody, rating: $rating) {
            _id
        }
    }
`

export const ADD_SERVICE_REVIEW = gql`
    mutation addServiceReview($serviceId: ID!, $reviewTitle: String!, $reviewBody: String!, $rating: Int!) {
        addServiceReview(serviceId: $serviceId, reviewTitle: $reviewTitle, reviewBody: $reviewBody, rating: $rating) {
            _id
        }
    }
`

export const ADD_ORDER = gql`
    mutation addOrder($services: [ID]!) {
        addOrder(services: $services) {
            _id
            purchaseDate
            services {
                _id
            }
        }
    }
`