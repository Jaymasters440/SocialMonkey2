// Reaction Schema only
// reactionId 

//Default value set to new ObjectID

// reaction Body
//string
//required
//280 character maximum

// username
//string
//required

// createdAt
// Date
// default value to current timestamp
// use a getter method to format the timestamp on query



const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');


// Schema to create User model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.ObjectId,
            default: function () {
                return new Schema.ObjectId();
            }
        },
        username: { type: String, required: true },
        reactionBody: { type: String, required: true, maxLen: 280 },

        createdAt: {
            type: Date, default: Date.now
        },


    },


    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        // id: false,
    }
);

// Create a virtual property `fullName` that gets and sets the user's full name
reactionSchema
    .virtual('formatedDate')
    // Getter
    .get(function () {
        const template = { year: 'numeric', month: 'long', day: 'numeric' }
        return this.createdAt.toLocaleDateString(undefined, template);
    })
// Setter to set the first and last name


// Initialize our User model
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
