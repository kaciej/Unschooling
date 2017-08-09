let express = require("express");
let commentsRouter = express.Router();

let Comment = require("../models/comments.js");

commentsRouter.use((req, res, next) => {
    for(let key in req.query) {
        if(typeof req.query[key] === "string") {
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});

//GET
commentsRouter.get("/", (req ,res) => {
    Comment.find(req.query, (error, data) => {
        if(error){
          res.status(500).send({"message": "Error within server", error}) ;
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
         } else {
          res.status(200).send({"message": "Success here is your data", data});
        }
    });
});

//GET BY ID
commentsRouter.get("/:id", (req, res) => {
    Comment.findOne({"_id": req.params.id }, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within server", error});
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
         } else {
          res.status(200).send({"message": "Success here is your data", data});
        }
    });
});

//POST
commentsRouter.post("/", (req, res) => {
    let newComment = new Comment(req.body);
    newComment.save((error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within Server"});
        } else {
            res.status(201).send({"message": "It was Created", data});
        }
    });
});

//DELETE
commentsRouter.delete("/:id", (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within server", error});
        } else if (data === null) {
            res.status(404).send({"error": "Not found"});
        } else {
            res.status(200).send({"message": "Delete Successful", data});
      } 
    });
});

//UPDATE PUT
commentsRouter.put("/:id", (req, res ) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data) => {
         if(error){
          res.status(500).send({"message": "Error within server", error}) ;
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
        } else {
        res.status(200).send({"message": "Update Successful", data});
      } 
  });
});



module.exports = commentsRouter;