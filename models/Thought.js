


// const to create thoughtText


// const to created createdAt date w/ current timestamp as default AND use a getter method to format the timestamp on query

// const for "username" who crated thought in a string with a "required" attribute

// const for "reactions" with array of nested documents created within the reactionSchema

// Schema settings  create a virtual called reactionCount that retrieves the legth of the thoughts's "reactions" aray field

const { Schema, model } = require('mongoose');


// Schema to create User model
const thoughtSchema = new Schema(
  {
    _id:{
        type:Schema.ObjectId
    },
    username: {
        type:String, 
        required: true 
    },
    thoughtText: {type:String, required: true, maxLen:280 },
   
    createdAt:{
        type: Date,default:Date.now
    },

    reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'reaction',
        },
      ],
  },

  
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length ;
  })
  // Setter to set the first and last name
  

// Initialize our User model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
