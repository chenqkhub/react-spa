import React, { Component } from 'react';
import formatDate from '../../../components/utils/DateFormat'
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: true
    },
    {
        title: "Server File Name",
        dataIndex: "serverFileName",
        key: "serverFileName",
        sorter: true
    },
    {
        title: "Key File Name",
        dataIndex: "keyFileName",
        key: "keyFileName",
        sorter: true
    },
    {
        title: "Type",
        dataIndex: "type",
        key: "type",
        sorter: true
    },
    {
        title: "CA File Name",
        dataIndex: "caFileName",
        key: "caFileName",
        sorter: true
    },
    {
        title: "Validity Start Time",
        dataIndex: "validityStartTime",
        key: "validityStartTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Validity Stop Time",
        dataIndex: "validityStopTime",
        key: "validityStopTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Expiry Status",
        dataIndex: "fullName",
        key: "fullName",
        sorter: true
    },
    {
        title: "Using Status",
        dataIndex: "usingStatus",
        key: "usingStatus",
        sorter: true
    },
    {
        title: "Issued by",
        dataIndex: "from",
        key: "from",
        sorter: true
    },
    {
        title: "Issued to",
        dataIndex: "to",
        key: "to",
        sorter: true
    },

]
export default columns