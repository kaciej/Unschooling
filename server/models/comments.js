let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let commentsSchema = new Schema({
    voteId: {
        type: Schema.Types.ObjectId,
        ref: "voteItem"
    },
    text: String
})

module.exports = mongoose.model("comments", commentsSchema);