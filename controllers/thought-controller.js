const { User, Thought, Reaction } = require('../models');

module.exports = {
    // get all thoughts
    getAllThoughts(req, res){
        Thought.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    
}