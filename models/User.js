const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {
    // toJSON is a mongoose middleware to define how the data is returned
    toJSON: {
        // virtuals is a mongoose option to include virtuals
        virtuals: true,
        // getters is a mongoose option to include getters
        getters: true
    },
    // prevent virtual from creating dublicate of _id as 'id'
    id: false
});

// virtual is a mongoose middleware to define virtuals
UserSchema.virtual('friendCount').get(function() {
    // returns the length of the friends array
    return this.friends.length;
})

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;