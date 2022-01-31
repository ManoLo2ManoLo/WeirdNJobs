const { AuthenticationError } = require('apollo-server-express');
const { User, Service, Order, County } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ id: context.user._id })
                    .select('-__v -password')
                    .populate('services')
                    .populate('orders')
                    .populate('reviews')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

        counties: async () => {
            return await County.find();
        },
        services: async (parent, { county, name }) => {
            const params = {};

            if (category) {
                params.county = county;
            }

            if (name) {
                params.name = {
                    $regex: name
                }
            }

            return await Service.find(params).populate('county');
        },
        service: async (parent, { _id }) => {
            return await Service.findById(_id).populate('county');
        },
        users: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.services',
                    populate: 'county'
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        allusers: async () => {
            return User.find()
                .select('-__v -password')
                .populate('services')
                .populate('orders')
                .populate('reviews')
        },
        allservices: async () => {
            return Service.find()
                .populate('county')
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.services',
                    populate: 'county'
                });

                return user.orders.id(_id);
            }

            throw new AuthenticationError('Not logged in');
        },

        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ services: args.services });
            const line_items = [];

            const { services } = await order.populate('services').execPopulate();

            for (let i = 0; i < services.length; i++) {
                const service = await stripe.products.create({
                    serviceTitle: services[i].serviceTitle,
                    serviceBody: services[i].serviceBody
                });

                const price = await stripe.prices.create({
                    service: service.id,
                    unit_amount: sercives[i].fee,
                    currency: 'usd'
                });

                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            })

            return { session: session.id };
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addOrder: async (parent, { services }, context) => {
            if (context.user) {
                const order = new Order({ services });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } } );

                return order;
            }

            throw new AuthenticationError('Not logged in')
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in')
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        addService: async (parent, args, context) => {
            if (context.user) {
                const county = await County.find();
                
                let countyId = ''

                for (let i = 0; i < county.length; i++) {
                    if (county[i].name === context.user.county) {
                        countyId = county[i].id
                    }
                }

                const service = await Service.create({ ...args, username: context.user.username, county: countyId});


                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { services: service._id } },
                    { new: true }
                );

                return service;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addUserReview: async (parent, {userId, reviewTitle, reviewBody, rating}, context) => {
            if (context.user) {
                const updateUser = await User.findOneAndUpdate(
                    { _id: userId },
                    { $push: { reviews: {reviewTitle, reviewBody, rating, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updateUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        addServiceReview: async (parent, {serviceId, reviewTitle, reviewBody, rating}, context) => {
            if (context.user) {
                const updateService = await Service.findOneAndUpdate(
                    { _id: serviceId },
                    { $push: { reviews: {reviewTitle, reviewBody, rating, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updateService;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;