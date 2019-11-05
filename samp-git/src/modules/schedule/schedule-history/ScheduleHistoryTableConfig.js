import React, { Component } from 'react';
import formatDate from '../../../components/utils/DateFormat'
const columns = [
    {
        title: "Group",
        dataIndex: "group",
        key: "group",
        sorter: true
    },
    {
        title: "Service",
        dataIndex: "handler",
        key: "handler",
        sorter: true
    },
    {
        title: "Start Time",
        dataIndex: "startTime",
        key: "startTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "End Time",
        dataIndex: "endTime",
        key: "endTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Result",
        dataIndex: "result",
        key: "result",
        sorter: true
    }
];
export default columns