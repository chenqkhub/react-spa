import React, { Component } from 'react';
import { Tabs } from 'antd'
import ReaderComponent from './ReaderComponent'
import WriterComponent from './WriterComponent'
import NetworkAdminComponent from './NetworkAdminComponent'
const { TabPane } = Tabs
class NetworkAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Tabs>
                    <TabPane tab="Write" key="3">
                        <WriterComponent />
                    </TabPane>
                    <TabPane tab="Read" key="4">
                        <ReaderComponent />
                    </TabPane>
                    <TabPane tab="Network Admin" key="5">
                        <NetworkAdminComponent />
                    </TabPane>
                </Tabs>
            </div>


        );
    }
}

export default NetworkAdmin;