import React, { Component } from 'react';
import Comment from "./comment.js";
import autoBind from "react-autobind";

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            ...props.comments,
            edit: false
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }
    toggleEdit() {
        this.setState({
            edit: !this.state.edit
        })
    }
    render() {
        return (
            <div>
                <Comment
                    comments={this.props.comments}
                    updateComment={this.props.updateComment}
                    handleChange={this.handleChange}
                    input={this.state}
                    addComment={this.props.addComment}
                    currentPost={this.props.currentPost}
                    toggleEdit={this.toggleEdit} 
                    deleteComment={this.props.deleteComment}
                    />
            </div>
        );
    }
}

export default CommentContainer;