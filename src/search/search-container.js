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
            age: ""
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        });
    }
    handleSubmit() {
        let queryobj = {};
        if(this.state.subject) {
            queryobj.subject = this.state.subject;
        }
        if(this.state.age) {
            queryobj.age = this.state.age;
        }
        this.props.loadDataByQuery(queryobj);
    }
    render() {
        return (
            <div>
                <Search handleSubmit={this.handleSubmit}
                    input={this.state}
                    handleChange={this.handleChange}
                    handleSubject={this.props.loadDataByQuery} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(SearchContainer);