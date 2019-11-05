import React, { Component } from 'react';
import { Tabs } from 'antd'
import ReaderComponent from './ReaderComponent'
import WriterComponent from './WriterComponent'
import NetworkAdminComponent from './NetworkAdminComponent'
import AdminAccountComponent from './AdminAccountComponent'
const { TabPane } = Tabs
class AdminAccount extends Component {
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
                <TabPane tab="Network Admin" key="5">
                    <NetworkAdminComponent />
                </TabPane>
                <TabPane tab="Account Admin" key="6">
                    <AdminAccountComponent />
                </TabPane>
            </Tabs>
        );
    }
}

export default AdminAccount;