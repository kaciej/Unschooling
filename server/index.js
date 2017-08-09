let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

let voteRouter = require("./routes/vote-route.js");
let commentsRouter = require("./routes/comments-route.js");

mongoose.connect("mongodb://localhost:27017/vote");

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/vote", voteRouter);
app.use("/comment", commentsRouter);

app.listen(PORT, () => {
    console.log(`Sever has started on port ${PORT}`);
});