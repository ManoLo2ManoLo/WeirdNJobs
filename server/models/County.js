const { Schema, model } = require('mongoose');

// create the county schema
const countySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        }
    }
);

// create the county model
const County = model('County', countySchema);

module.exports = County;