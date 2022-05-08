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
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
    .then((Thought) => {
        User.findOneAndUpdate(
            { _id: body.userId },
            { $push: { thoughts: Thought._id } },
            { new: true }
        )
        .then((User) => {
            console.log(`Thought for user id: ${User._id} is added`);
          });
          return res.json(Thought);
    })
    .catch((err) => res.status(500).json(err));
  },
};
