import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

class Comment extends Component {
    
    render() {
        return (
            <div className="comment-container">
                    <button onClick={() => {this.props.toggleEdit()}}
                        style={{display:this.props.input.edit ? "none": "inherit"}} 
                        className="comment-btns">
                        <FontAwesome name="pencil-square-o" size="lg"></FontAwesome>
                    </button>

                    <div style={{display:this.props.input.edit ? "none": "inherit"}} 
                        className="comments">{this.props.comments.text}</div>

                    <input className="edit-input" value={this.props.input.text}
                        onChange={(event) => {this.props.handleChange("text", event)}}
                        style={{display:this.props.input.edit ? "inherit": "none"}} />
                    
                    <button style={{display:this.props.input.edit ? "inherit": "none"}} 
                        className="comment-btns"
                        onClick={() => {this.props.deleteComment(this.props.input._id, this.props.currentPost._id)}}>
                        <FontAwesome name="trash" size="lg"></FontAwesome>
                    </button>
                              
                    <button onClick={() => {this.props.updateComment(this.props.currentPost._id, this.props.input._id, this.props.input),this.props.toggleEdit()}} 
                        style={{display:this.props.input.edit ? "inherit": "none"}} 
                        className="comment-btns">
                        <FontAwesome name="floppy-o" size="lg"></FontAwesome>
                    </button>              
            </div>
        );
    }
}

export default Comment;