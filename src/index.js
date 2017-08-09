import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./index.css";

//router
import  { Route, BrowserRouter, Switch } from "react-router-dom";

//import components
import FormContainer from "./form/form-container.js";
import PostContainer from "./individual-post/post-container.js";
import Home from "./home.js"
import Navbar from "./navbar.js";
import Scroll from "./scroll.js";

//the thing that provides store to your app
import { Provider } from "react-redux";

//get the thing that makes the store
//and apply middleWare
import { createStore, applyMiddleware } from "redux";

//get thunk
import thunk from "redux-thunk";

//get the reduce to handle state
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <Scroll>
                <div className="app-wrapper">
                    <Navbar />
                        <Switch>
                            <Route exact path= "/" component={Home} />
                            <Route exact path= "/form" component={FormContainer}/>
                            <Route exact path= "/:id" component={PostContainer}/>
                        </Switch>
                </div>
            </Scroll>  
        </BrowserRouter> 
        );
    }
}

//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));