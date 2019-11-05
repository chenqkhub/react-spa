import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import LoignLayout from './LoginLayout'
import IndexLayout from './IndexLayout'
class Layouts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Switch>
                <Route  path="/login" component={LoignLayout} />
                <Route  path="/" component={IndexLayout} />
            </Switch>
        );
    }
}

export default Layouts;