let express = require("express");
let voteRouter = express.Router();

let Vote = require("../models/vote.js");

voteRouter.use((req, res, next) => {
    for(let key in req.query) {
        if(typeof req.query[key] === "string") {
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});

//GET
voteRouter.get("/", (req ,res) => {
    Vote.find(req.query, (error, data) => {
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
voteRouter.get("/:id", (req,res) => {
    Vote.findOne({"_id": req.params.id }, (error, data) => {
        if(error){
          res.status(500).send({"message": "Error within server", error});
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
        } else {
        res.status(200).send({"message": "Success", data});
        }
    });
});

//POST
voteRouter.post("/", (req, res) => {
    let newVote = new Vote(req.body);
    newVote.save((error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within Server"});
        } else {
            res.status(201).send({"message": "It was Created", data});
        }
    });
});

//DELETE
voteRouter.delete("/:id", (req, res) => {
    Vote.findByIdAndRemove(req.params.id, (error, data) => {
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
voteRouter.put("/:id", (req, res ) => {
  Vote.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, data) => {
         if(error){
          res.status(500).send({"message": "Error within server", error}) ;
        } else if (data === null) {
          res.status(404).send({"error": "Not found"});
        } else {
        res.status(200).send({"message": "Update Successful", data});
      } 
  });
});

voteRouter.put("/upVote/:id", (req, res) => {
    Vote.findOne({"_id": req.params.id}, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within server"});
        } else if (data === null) {
            res.send(404).send({"message": `Item with id of ${req.params.id} was not found`});
        } else {
            data.upVotes += 1;
            data.save((error, data) => {
                if(error) {
                    res.status(500).send({"message": "Error within server"});
                } else {
                    res.status(200).send({"message": "Item was updated", data});
                }
            });
        }
    });
});


voteRouter.put("/downVote/:id", (req, res) => {
    Vote.findOne({"_id": req.params.id}, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within server"});
        } else if (data === null) {
            res.send(404).send({"message": `Item with id of ${req.params.id} was not found`});
        } else {
            data.downVotes += 1;
            data.save((error, data) => {
                if(error) {
                    res.status(500).send({"message": "Error within server", error});
                } else {
                    res.status(200).send({"message": "Item was updated", data});
                }
            });
        }
    });
});

voteRouter.put("/comment/:id", (req, res) => {
    Vote.findOne({"_id": req.params.id}, (error, data) => {
        if(error) {
            res.status(500).send({"message": "Error within server", error});
        } else if (data === null) {
            res.send(404).send({"message": `Item with id of ${req.params.id} was not found`});
        } else {
            data.comments.push(req.body.comment);
            data.save((error) => {
                if(error) {
                   res.status(500).send({"message": "Error within server", error}); 
                } else {
                    res.status(200).send({"message": "Comment was sent"});
                }
            })
        }
    });
});

module.exports = voteRouter;