import React, { Component } from 'react';
import { Transfer } from 'antd';
class FetchLdapAttibute extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mockData: [],
            targetKeys: [],
        };
    }
    

    componentDidMount() {
        this.getMock();
    }

    //这里会去后台获取LDAP的属性，同时获取当前数据库中的属性，并从LDAP属性中移除已经在数据库中的属性值，然后显示在穿梭框中
    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: `content${i + 1}`,
            };
            // if (data.chosen) {
            //     targetKeys.push(data.name);
            // }
            mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    };

    handleChange = (targetKeys, direction, moveKeys) => {
        this.setState({ targetKeys:targetKeys });
        this.props.getLdapAttribute(targetKeys)
    };

    renderItem = item => {
        const customLabel = (
            <span className="custom-item">
                {item.key}
            </span>
        );

        return {
            label: customLabel, // for displayed item
            value: item.title, // for title and filter matching
        };
    };

    render() {
        return (
            <Transfer
                dataSource={this.state.mockData}
                listStyle={{
                    width: 350,
                    height: 300,
                }}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={this.renderItem}
            />
        );
    }
}
export default FetchLdapAttibute