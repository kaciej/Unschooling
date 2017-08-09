import React, { Component } from 'react';
import Body from "./body.js";

class BodyContainer extends Component {
    render() {
        return (
            <div>
                <Body post={this.props.post}
                    deletePost={this.props.removePost}
                    updateUp={this.props.updateUp}
                    updateDown={this.props.updateDown}/>
            </div>
        );
    }
}

export default BodyContainer;