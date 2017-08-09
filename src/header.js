import React, { Component } from 'react';
import WOW from "wowjs";

import { Link } from "react-router-dom";

class Header extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="header-img">
                <div className=" header text-center">
                    <div className="text-center">
                    <h1 className="header-title wow fadeInUp" data-wow-iteration="1" data-wow-duration="2s">Unschooling Nook</h1>
                    <h3 className="header-quote">"Teach them how to learn, not what to learn."</h3>
                    <Link to="form"><button className="header-btn btn">Share an Idea</button></Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;