import React, { Component } from 'react';
import formatDate from '../../../components/utils/DateFormat'
const columns = [
    {
        title: "Approver Name",
        dataIndex: "approver",
        key: "approver",
        sorter: true
    },
    {
        title: "Company",
        dataIndex: "visitorCompany",
        key: "visitorCompany",
        sorter: true
    },
    {
        title: "Register Time",
        dataIndex: "registerTime",
        key: "registerTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
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
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: true
    },
    {
        title: "Approval Time",
        dataIndex: "approvalTime",
        key: "approvalTime",
        sorter: true,
        render: (text) => (
            <span>
                {formatDate(text)}
            </span>
        )
    },
    {
        title: "Visited Reason",
        dataIndex: "visitReason",
        key: "visitReason",
        sorter: true
    },
    {
        title: "Guest Access Strategy",
        dataIndex: "guestAccessStrategy",
        key: "guestAccessStrategy",
        sorter: true
    },
    {
        title: "Full Name",
        dataIndex: "visitorName",
        key: "visitorName",
        sorter: true
    },
    {
        title: "Employee Email",
        dataIndex: "visitEmployeeEmail",
        key: "visitEmployeeEmail",
        sorter: true
    },
    {
        title: "Employee Phone Number",
        dataIndex: "employeePhoneNumber",
        key: "employeePhoneNumber",
        sorter: true
    },
    {
        title: "Employee Visited",
        dataIndex: "employeeVisited",
        key: "employeeVisited",
        sorter: true
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        sorter: true
    },
   
]
export default columns