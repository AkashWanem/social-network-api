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
          ? res
              .status(404)
              .json({ message: "No thought associated with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        ).then((user) => {
          console.log(`Thought for user id: ${user._id} is added`);
        });
        return res.json(thought);
      })
      .catch((err) => res.status(500).json(err));
  },
  // update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought associated with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // remove a thought by its _id
  deleteThought(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then(() => res.json({ message: "thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // reaction stored in a single thought's reactions array field
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought associated with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // pull and remove a reaction by the reaction's reactionId value
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: body.reactionId } } },
      { new: true, runValidators: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No user associated with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
