const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
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
            get: (date) => timeSince(date),
        }
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
    }
);

module.exports = ReactionSchema;