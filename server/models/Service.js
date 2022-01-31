const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Review = require('./Review');

// create the service schema
const serviceSchema = new Schema(
    {
        serviceTitle: {
            type: String,
            required: true,
            maxlength: 50
        },

        serviceBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        fee: {
            type: Number,
            required: true
        },

        username: {
            type: String,
            reqiured: true
        },

        county: {
            type: Schema.Types.ObjectId,
            ref: 'County',
            required: true
        },

        reviews: [Review.schema],

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },

    },
    {
        toJSON: {
            virtuals: true
        }
    
    }
)

// adds a virtual for review count length
serviceSchema.virtual('reviewCount').get(function() {
    return this.reviews.length;
});

// create the service model
const Service = model('Service', serviceSchema);

module.exports = Service;