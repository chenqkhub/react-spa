import React, { Component } from 'react';
import formatDate from '../../components/utils/DateFormat'
const columns = [
    {
        title: "License",
        dataIndex: "license",
        key: "license",
        sorter: true
    },
    {
        title: "Activate Time",
        dataIndex: "activateTime",
        key: "activateTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Expiration date",
        dataIndex: "expirationDate",
        key: "expirationDate",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    }
]
export default columns