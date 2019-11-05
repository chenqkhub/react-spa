import React, { Component } from 'react';
import {Tag} from 'antd'
class UserPanelHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {this.props.title} <Tag color="#108ee9" style={{marginLeft:"5px"}}>{this.props.competence}</Tag>
            </div>
         );
    }
}
 
export default UserPanelHeader;