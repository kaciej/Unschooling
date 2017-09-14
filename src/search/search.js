import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search-container container">
                
                <div className="row search-type">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <span className="search-desc">Subject: </span>
                        <select onChange={(event) => {this.props.handleChange("subject", event)}}
                                 className="home-dropdown" value={this.props.input.subject}>
                            <option value="" disabled selected>Select One</option>
                            <option value="biology">Biology</option>
                            <option value="math">Math</option>
                            <option value="reading">Reading</option>
                            <option value="physics">Physics</option>
                            <option value="history">History</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <span className="search-desc">Age: </span>
                        <select onChange={(event) => {this.props.handleChange("age", event)}}
                                value={this.props.input.age} className="home-dropdown">
                            <option value="" disabled selected>Select One</option>
                            <option value="0-3">0-3</option>
                            <option value="3-5">3-5</option>
                            <option value="5-7">5-7</option>
                            <option value="7-9">7-9</option>
                            <option value="9-11">9-11</option>
                            <option value="11-13">11-13</option>
                            <option value="13-15">13-15</option>
                            <option value="15-18">15-18</option>
                        </select>
                    </div>
                </div>
                <div className="row search-btn-row">
                    <button onClick={this.props.handleSubmit} className="btn search-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default Search;