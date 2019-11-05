import React, { Component } from 'react';
import { Tabs } from 'antd'
import ReaderComponent from './ReaderComponent'
import WriterComponent from './WriterComponent'
const { TabPane } = Tabs
class Writer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Tabs>
                <TabPane tab="Write" key="3">
                    <WriterComponent />
                </TabPane>
                <TabPane tab="Read" key="4">
                    <ReaderComponent />
                </TabPane>
            </Tabs>
        );
    }
}

export default Writer;