import React, { Component } from 'react';
import CommentForm from "./comment-form.js";
import autoBind from "react-autobind";

import {connect} from "react-redux";
import * as actionCreators from "../../actions/";

class CommentFormContainer extends Component {
    
      constructor(props){
        super(props);
        this.state = {
            text: "",
            voteId: props.id   
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    keyPress(event) {
        if(event.key === "Enter"){
            this.props.addComment(this.props.currentPost._id, this.state)
            this.clearInputs();
        }
    }
    clearInputs() {
        this.setState({
            text: "",
        })
    }
    render() {      
        return (
            <div>
                <CommentForm
                    handleChange={this.handleChange}
                    keyPress={this.keyPress}
                    input={this.state}
                    addComment={this.props.addComment}
                    currentPost={this.props.currentPost}
                    clearInputs={this.clearInputs}
                     />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(CommentFormContainer);