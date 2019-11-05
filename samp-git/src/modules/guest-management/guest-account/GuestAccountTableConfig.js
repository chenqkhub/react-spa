import React, { Component } from 'react';
import formatDate from '../../../components/utils/DateFormat'
const columns = {
    accountNameAttr: [
        {
            title: "Guest Name",
            dataIndex: "username",
            key: "username",
            sorter: true
        },
        {
            title: "Data Quota",
            dataIndex: "dataQuota",
            key: "dataQuota",
            sorter: true
        },
        {
            title: "Data Quota Amount",
            dataIndex: "dataQuotaAmount",
            key: "dataQuotaAmount",
            sorter: true
        },
        {
            title: "Account Validity Period",
            dataIndex: "accountValidityPeriod",
            key: "accountValidityPeriod",
            sorter: true,
            render: (text) => (
                <span>
                    {formatDate(text)}
                </span>
            )
        },
        {
            title: "Service Level",
            dataIndex: "serviceLevel",
            key: "serviceLevel",
            sorter: true
        },
        {
            title: "Full Name",
            dataIndex: "fullName",
            key: "fullName",
            sorter: true
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
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
            title: "Online Devices",
            dataIndex: "onlineDevice",
            key: "onlineDevice",
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

    ],
    accessCodeAttr: [
        {
            title: "Guest Name",
            dataIndex: "username",
            key: "username",
            sorter: true
        },
        {
            title: "Account Validity Period",
            dataIndex: "accountValidityPeriod",
            key: "accountValidityPeriod",
            sorter: true,
            render: (text) => (
                <span>
                    {formatDate(text)}
                </span>
            )
        },
        {
            title: "Service Level",
            dataIndex: "serviceLevel",
            key: "serviceLevel",
            sorter: true
        },
        {
            title: "Online Devices",
            dataIndex: "onlineDevice",
            key: "onlineDevice",
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

    ]
}
export default columns