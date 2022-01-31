const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Order = require('./Order');
const Review = require('./Review');

// create the user schema
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minlength: 4,
            maxlength: 16
        },

        email: {
            type: String,
            required: true,
            trim: true,
            match: [/.+@.+\..+/, 'Enter a valid email.']
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 24
        },

        county: {
            type: String,
            enum: [
                'Atlantic', 'Bergen', 'Burlington', 'Camden', 'Cape May', 'Cumberland', 'Essex', 'Gloucester',
                'Hudson', 'Hunterdon', 'Mercer', 'Middlesex', 'Monmouth', 'Morris', 'Ocean', 'Passaic', 'Salem',
                'Somerset', 'Sussex', 'Union', 'Warren'
            ]
        },

        profileImage: {
            type: String,
            default: 'default.png'
        },

        description: {
            type: String,
            maxlength: 200
        },

        services: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Service'
            }
        ],

        orders: [Order.schema],
        reviews: [Review.schema]
    }, 
    {
        toJSON: {
            virtuals: true
        }
    }
);

// bcrypt the password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// verify the password is correct
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.virtual('reviewCount').get(function() {
    return this.reviews.length;
});

// create the user model
const User = model('User', userSchema);

module.exports = User;