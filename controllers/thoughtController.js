const Thought = require('../models/');

module.exports = {
  async getThoughts(req, res) {
    console.log("get route")
    //const thoughts = await Thought.find();
    //console.log(thoughts)
    try {
      const thoughts = await Thought.find();
      console.log(thoughts);
      res.status(200).json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res){
    try {
        const thought = await Thought.findByIdAndUpdate( req.params.thoughtId, req.body )
        
        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
          res.status(200).json(thought)

    
    }   catch (err) {
        res.status(500).json(err);
    }
  },
  async deleteThought(req, res){
    try {
        const thought = await Thought.findByIdAndRemove( req.params.thoughtId, )
        
        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
          res.status(200).json(thought)

    
    }   catch (err) {
        res.status(500).json(err);
    }
},

async createReaction(req, res) {
    try {
      const data = await Thought.findByIdAndUpdate( req.params.thoughtId, {$push:{reactions:req.body.reactionId}} )
      
      if (!data) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
        res.status(200).json(data)
  
  
  }   catch (err) {
      res.status(500).json(err);
  }  
  
  },
  
  async deleteReaction(req, res) {
    try {
      const data = await Thought.findByIdAndUpdate( req.params.thoughtId, {$pull:{reactions:req.body.reactionId}} )
      
      if (!data) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
        res.status(200).json(data)
  
  
  }   catch (err) {
      res.status(500).json(err);
  }  
  
  },

};
