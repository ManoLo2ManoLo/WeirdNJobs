const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// create the review schema
const reviewSchema = new Schema(
    {
        reviewTitle: {
            type: String,
            required: true,
            maxlength: 50
        },

        reviewBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            reqiured: true
        },

        rating: {
            type: Number,
            required: true,
            enum: [ 1 , 2 , 3 , 4 , 5 ]
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

// create the review model
const Review = model('Review', reviewSchema);

module.exports = Review;