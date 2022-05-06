const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: 
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: ,
        }
    },
    {
        toJSON: {
            getters: true,
        },
        _id: false,
    }
);

module.exports = ReactionSchema;