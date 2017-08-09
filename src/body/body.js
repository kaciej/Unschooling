import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

import { Link } from "react-router-dom";

class Body extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-6 col-xs-6 posts">
                <button onClick={() => {this.props.deletePost(this.props.post._id)}} 
                    className="delete">X</button>
                <Link to={`/${this.props.post._id}`}>
                    <div className="home-imgs" 
                        style={{backgroundImage:`url("${this.props.post.img}")`}}>
                    </div>
                </Link>
                    
                <div className="body-title">{this.props.post.title}</div>

                <button onClick={() => {this.props.updateUp(this.props.post._id)}}
                     className="vote-btn">
                    <FontAwesome name="heart" size="lg"/>
                </button>

                <div className="body-current-vote">{this.props.post.upVotes}</div>
            
            </div>
        );
    }
}

export default Body;