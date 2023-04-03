const {Schema, model, Types} = require('mongoose');
const moment = require('moment');

const thoughtsSchema = newSchema({
    thoughtId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },



    });

    const reactionsSchema = newSchema({
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
    });

    thoughtsSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
    });

    const Thoughts = model('Thoughts', ThoughtsSchema);

    module.exports = Thoughts;
    
    

