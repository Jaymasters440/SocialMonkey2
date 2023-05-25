const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {userData,thoughtData} = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  
  await User.collection.insertMany(userData);
  await Thought.collection.insertMany(thoughtData);
  console.log(userData);
  process.exit(0);
});
