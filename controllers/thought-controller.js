const { User, Thought, Reaction } = require("../models");

module.exports = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // get a single thought by its _id
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thought associated with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  
};
