const mongoose = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,  // Minimum length for the name
        maxlength: 100 // Maximum length for the name
    },
    email: {
        type: String,
        required: true,
        unique: true,   // Ensure that email addresses are unique
        lowercase: true, // Convert email to lowercase
        validate: {
            validator: function(v) {
                // Basic regex for email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for the password
        select: false // Exclude from queries by default
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt timestamps
});

// Export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
