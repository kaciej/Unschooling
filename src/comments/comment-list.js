import React, { Component } from 'react';
import CommentContainer from "./comment-container.js";

class CommentList extends Component {
       genComments() {
        return this.props.comments.map((item, index) => {
                return (
                    <CommentContainer key={item._id}
                        comments={item}
                        currentPost={this.props.currentPost} 
                        updateComment={this.props.updateComment}
                        addComment={this.props.addComment} 
                        deleteComment={this.props.deleteComment}/>
                )
            });
    }
    render() {
        return (
            <div>
               {this.genComments()}
            </div>
        );
    }
}

export default CommentList;