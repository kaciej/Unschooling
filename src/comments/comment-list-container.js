import React, { Component } from 'react';
import CommentList from "./comment-list";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class CommentListContainer extends Component {
    componentWillMount(){
        this.props.loadCommentsById(this.props.id);
    }
    render() {
        return (
            <div>
               <CommentList
                    deleteComment={this.props.deleteCommentById}
                    comments={this.props.comments}
                    addComment={this.props.addComment}
                    updateComment={this.props.updateComment}
                    currentPost={this.props.currentPost}
                    /> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(CommentListContainer);