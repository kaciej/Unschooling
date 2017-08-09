import React, { Component } from 'react';

class CommentForm extends Component {
    render() {
        return (
            <div>
                <textarea
                    cols="50" rows="5"
                    className="post-comment-box"
                    placeholder="Write a Comment..."
                    onKeyPress={this.props.keyPress}
                    onChange={(event) => {this.props.handleChange("text", event)}}
                    value={this.props.input.text}></textarea>
            <div>
                <button
                    className="add-comment-btn btn btn-success" 
                    onClick={() => {
                    this.props.addComment(this.props.currentPost._id, this.props.input);
                    this.props.clearInputs();}}>Post
                </button>
            </div>
            </div>
        );
    }
}

export default CommentForm;