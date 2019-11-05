import React, { Component } from 'react';
class NasClientDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props)
    }
    render() {
        return (
            <div style={{border:"1px"}}>
                INFO-DiscoveryUpDownUpdating prepare to be handled<br/>
                INFO-Start execute job DiscoveryUpDownUpdating<br/>
                INFO-Send EXECUTE request to service<br/>
                INFO-Send message to OVPollerRequestServiceQueue<br/>
                INFO-Build timeout checking for job DiscoveryUpDownUpdating<br/>
                INFO-<br/>
                INFO-<br/>
                Previously succeeded ids :<br/>
                Last succeeded ids :<br/>
                Failed ids :<br/>
                Poller request's source units are not available.<br/>
                For more information, refer to /opt/OmniVista_2500_NMS/logs/masterpoller/ and /opt/OmniVista_2500_NMS/logs/workerpoller/<br/>
                INFO-Job DiscoveryUpDownUpdating executed success. Delete timeout checking job<br/>
            </div>
        );
    }
}

export default NasClientDetail;