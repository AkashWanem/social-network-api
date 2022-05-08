const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => timeSince(date),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ReactionSchema],
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        id: false,
    }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;