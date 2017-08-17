import React, { Component } from 'react';
import autoBind from "react-autobind";
import Form from "./form.js";
//Get the things that allow redux to connect
import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            description: "",
            img: "",
            subject: "",
            age: ""
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
            this.props.setData(this.state)
            this.clearInputs();
        }
    }
    clearInputs() {
        this.setState({
            title: "",
            description: "",
            img: "",
            subject: "",
            age: ""
        })
    }
    render() {
        return (
            <div className="container">
                <Form input={this.state}
                    handleChange={this.handleChange}
                    handleAdd={this.props.addData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(FormContainer);