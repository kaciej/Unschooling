import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search-container container">
                <div className="row">
                    <button className="btn search-btn">Search</button>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span className="search-desc">Subject: </span>
                        <select className="home-dropdown" value={this.props.value}>
                            <option value="biology">Biology</option>
                            <option value="math">Math</option>
                            <option value="reading">Reading</option>
                            <option value="physics">Physics</option>
                            <option value="history">History</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <span className="search-desc">Age: </span>
                        <select className="home-dropdown">
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
            </div>
        );
    }
}

export default Search;