import React, { Component } from 'react';
import formatDate from '../../../components/utils/DateFormat'
const columns = [
    {
        title: "Username",
        dataIndex: "username",
        key: "username",
        sorter: true
    },
    {
        title: "Full Name",
        dataIndex: "fullName",
        key: "fullName",
        sorter: true
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: true
    },
    {
        title: "Telephone",
        dataIndex: "telephone",
        key: "telephone",
        sorter: true
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
        sorter: true
    },
    {
        title: "Last Login Time",
        dataIndex: "lastLoginTime",
        key: "lastLoginTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Login URL",
        dataIndex: "loginURL",
        key: "loginURL",
        sorter: true
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "location",
        sorter: true
    },
    {
        title: "Last Login Time",
        dataIndex: "effectiveTime",
        key: "effectiveTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
   
]
export default columns