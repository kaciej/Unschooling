import React, { Component } from 'react';
import BodyList from "./body-list.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class BodyListContainer extends Component {
    componentWillMount() {
        this.props.loadData()
    }
    render() {
        return (
            <div>
                <BodyList updateDown={this.props.updateDown}
                    updateUp={this.props.updateUp}
                    posts={this.props.posts}
                    removePost={this.props.deleteData}
                     />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BodyListContainer);