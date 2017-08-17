let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");
//allows you to resolve file paths
const path = require("path");

const PORT = process.env.PORT || 8080;

let voteRouter = require("./routes/vote-route.js");
let commentsRouter = require("./routes/comments-route.js");

const settings = require("./config/settings.js");

mongoose.connect(settings.db);

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/vote", voteRouter);
app.use("/comment", commentsRouter);

//setup static files
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Sever has started on port ${PORT}`);
});