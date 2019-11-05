import React, { Component } from 'react';
import  formatDate from '../../../components/utils/DateFormat'
const columns = [
    {
        title: "Username",
        dataIndex: "username",
        key: "username",
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
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: true
    },
    {
        title: "Effective Date",
        dataIndex: "dateOfEffective",
        key: "dateOfEffective",
        sorter: true,
        render:(text) => (
            <span>
                    {formatDate(text)}
            </span>
        )
    },
    {
        title: "Full Name",
        dataIndex: "fullName",
        key: "fullName",
        sorter: true
    },
    {
        title: "Department",
        dataIndex: "department",
        key: "department",
        sorter: true
    },
    {
        title: "Position",
        dataIndex: "position",
        key: "position",
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