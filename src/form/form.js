import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Form extends Component {
    render() {
        return (
            <div className="form">
                <h1 className="form-header">Share your ideas for unschooling...</h1>
                <div className="row">
                    <div className="col-md-3 col-md-offset-2">
                    <h3>Subject</h3>
                    <select value={this.props.value}>
                        <option value="biology">Biology</option>
                        <option value="math">Math</option>
                        <option value="reading">Reading</option>
                        <option value="physics">Physics</option>
                        <option value="history">History</option>
                        <option value="exploring">Exploring</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div className="col-md-3 col-md-offset-2">
                    <h3>Age</h3>
                    <select>
                        <option>0-3</option>
                        <option>3-5</option>
                        <option>5-7</option>
                        <option>7-9</option>
                        <option>9-11</option>
                        <option>11-13</option>
                        <option>13-15</option>
                        <option>15-18</option>
                    </select>
                </div>
                </div>
                
                
                <input className="form-inputs form-control" type="text" placeholder="Title"
                    value={this.props.input.title}
                    onChange={(event) => {this.props.handleChange("title", event)}}/>
                <textarea rows="16" className="form-inputs form-control form-desc" type="text" placeholder="Description" 
                    value={this.props.input.description}
                    onChange={(event) => {this.props.handleChange("description", event)}}/>
                <input className="form-inputs form-control" type="text" placeholder="Image (url)" 
                    value={this.props.input.img}
                    onChange={(event) => {this.props.handleChange("img", event)}}/>
                <div className="text-center">
                    <Link to="/"><button onClick={() => {this.props.handleAdd(this.props.input)}}
                    className="form-btn btn btn-success">Post It</button>
                    </Link>
                </div>
                
            </div>
        );
    }
};

export default Form;