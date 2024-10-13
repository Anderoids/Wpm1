const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        minlength: 1,
        maxlength: 100
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: () => Date.now()
    }
});

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    address: String,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {
        type: [Number],
        index: '2dsphere',
        validate: {
            validator: function(v) {
                return v.length === 2 && v[0] >= -180 && v[0] <= 180 && v[1] >= -90 && v[1] <= 90;
            },
            message: 'Coordinates must be [longitude, latitude].'
        }
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);
