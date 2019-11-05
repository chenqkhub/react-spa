import React, { Component } from 'react';
import {Tag} from 'antd'
const columns = [

    {
        title: "Role Name",
        dataIndex: "roleName",
        key: "roleName",
        sorter: true
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: true
    },
    {
        title: "System-Defined",
        dataIndex: "systemDefined",
        key: "systemDefined",
        sorter: true,
        render: (text) => (
            <span>
                <Tag color="#108ee9">
                    {text}
                </Tag>
            </span>
        ),
    }
];
export default columns