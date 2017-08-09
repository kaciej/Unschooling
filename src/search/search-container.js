import React, { Component } from 'react';
import Search from "./search.js";
import autoBind from "react-autobind";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            subject: "",
            Age: ""
        }
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <Search handleChange={this.handleChange}
                    handleSubject={this.props.loadDataByQuery} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(SearchContainer);