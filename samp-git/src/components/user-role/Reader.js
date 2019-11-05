import React, { Component } from 'react';
import {Tabs} from 'antd'
import ReaderComponent from './ReaderComponent'
const {TabPane} = Tabs
class Reader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Tabs>
                <TabPane tab="Read" key="4">
                    <ReaderComponent />
                </TabPane>
            </Tabs>
        );
    }
}

export default Reader;