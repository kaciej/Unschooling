import React, { Component } from 'react';
import Post from "./post.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class PostContainer extends Component {
    componentWillMount() {
        this.props.loadDataById(this.props.match.params.id);
    }
    render() {
        return (
            <div className="container">
                <Post 
                    currentPost={this.props.currentPost}
                    updateUp={this.props.updateUp}
                    id={this.props.match.params.id}
                    updateDown={this.props.updateDown}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(PostContainer);