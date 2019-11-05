import React, { Component } from 'react';
import formatDate from '../../../components/utils/DateFormat'
const columns = [
    {
        title: "Device Mac",
        dataIndex: "deviceMac",
        key: "deviceMac",
        sorter: true
    },
    {
        title: "Device Name",
        dataIndex: "deviceName",
        key: "deviceName",
        sorter: true
    },
    {
        title: "Employee Account",
        dataIndex: "account",
        key: "account",
        sorter: true
    },
    {
        title: "Device Category",
        dataIndex: "deviceCategory",
        key: "deviceCategory",
        sorter: true
    },
    {
        title: "Device Family",
        dataIndex: "deviceFamily",
        key: "deviceFamily",
        sorter: true
    },
    {
        title: "Device OS",
        dataIndex: "deviceOS",
        key: "deviceOS",
        sorter: true
    },
    {
        title: "Access Role Profile",
        dataIndex: "accessRoleProfile",
        key: "accessRoleProfile",
        sorter: true
    },
    {
        title: "Policy List",
        dataIndex: "policyList",
        key: "policyList",
        sorter: true
    },
    {
        title: "Effective Date",
        dataIndex: "dateOfEffective",
        key: "dateOfEffective",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Last Access Location",
        dataIndex: "lastAccessLocation",
        key: "lastAccessLocation",
        sorter: true
    },
    {
        title: "Last Authentication Time",
        dataIndex: "lastAuthenticationTime",
        key: "lastAuthenticationTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        sorter: true
    },

]
export default columns