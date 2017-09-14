import React, { Component } from 'react';
import autoBind from "react-autobind";

import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "#FDFDF3",
            color: "black"
        }
        autoBind(this);
    }
    changeNav() {
        if(document.location.pathname === "/" && window.scrollY > 545) {
            this.setState({
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#FDFDF3"
            }) 
        } else if (document.location.pathname === "/" && window.scrollY < 540) {
            this.setState({
                backgroundColor: "#FDFDF3",
                color: "black"
            })
        }else {
            this.setState({
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#FDFDF3"
            }) 
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.changeNav);
    }
    render() {
        return (
            <div className="navbar" style={{backgroundColor:this.state.backgroundColor}}>
                <div className="nav-links">
                    <Link className="nav-home" style={{color:this.state.color}} to="/">HOME</Link>
                    <Link className="nav-post" style={{color:this.state.color}} to="/form/">SHARE IDEA</Link>
                    {/*<Link className="nav-post" style={{color:this.state.color}} to="/signin/">SIGN IN</Link>*/}
                </div>
                
            </div>
        );
    }
}

export default Navbar;