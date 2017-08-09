import React, {Component} from 'react';
import FontAwesome from "react-fontawesome";

import CommentFormContainer from "../comments/comment-form/comment-form-container";
import CommentListContainer from "../comments/comment-list-container.js";
import Footer from "../footer.js";

class Post extends Component {
    render() {
        return (
            <div>
            <div className="post-wrapper text-center">
                <h1 className="post-title">{this.props.currentPost.title}</h1>
                <div className="row">
                    <div className="post-img"style={{backgroundImage: `url("${this.props.currentPost.img}")`}}>
                        <div className="overlay">
                        <button onClick={() => {this.props.updateUp(this.props.currentPost._id)}}
                            className="post-heart-btn">
                            <FontAwesome name="heart" size="3x"/>
                        </button>
                        <div className="post-current-vote">{this.props.currentPost.upVotes}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 post-desc">{this.props.currentPost.description}</div>
                </div>
                <CommentFormContainer id={this.props.id}/>
                </div>
                <CommentListContainer id={this.props.id}/>
                <Footer />
        </div>
        );
    }
}

export default Post;