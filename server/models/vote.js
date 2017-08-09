let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let voteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    img: {
        type: String,
        required: true
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    subject: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("voteItem", voteSchema);