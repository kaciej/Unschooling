import React, { Component } from 'react';

import Header from "./header.js";
import BodyListContainer from "./body/body-list-container.js";


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <BodyListContainer />
            </div>
        );
    }
}

export default Home;