const columns = [
    {
        title: "Condition",
        dataIndex: "condition",
        key: "condition",
        sorter: true
    },
    {
        title: "Policy Name",
        dataIndex: "policyName",
        key: "policyName",
        sorter: true
    },
    {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
        sorter: true
    },
    {
        title: "Strategy Name",
        dataIndex: "strategyName",
        key: "strategyName",
        sorter: true
    },
    {
        title: "Authentication Source",
        dataIndex: "authenticationAgainst",
        key: "authenticationAgainst",
        sorter: true
    },
    {
        title: "Default Access Role Profile",
        dataIndex: "defaultARPName",
        key: "defaultARPName",
        sorter: true
    },
    {
        title: "Default Policy List",
        dataIndex: "defaultPLName",
        key: "defaultPLName",
        sorter: true
    },
    // {
    //     title: "Other Attributes",
    //     dataIndex: "otherAttributesVOs",
    //     key: "otherAttributesVOs",
    //     sorter: true
    // },
    {
        title: "Web Authentication",
        dataIndex: "webAuthentication",
        key: "webAuthentication",
        sorter: true
    },
    {
        title: "Guest Access Strategy",
        dataIndex: "guestStrategy",
        key: "guestStrategy",
        sorter: true
    },
    {
        title: "BYOD Access Strategy",
        dataIndex: "employeeStrategy",
        key: "employeeStrategy",
        sorter: true
    },
    {
        title: "New Enforcement Policy",
        dataIndex: "reloadARP",
        key: "reloadARP",
        sorter: true
    },
    {
        title: "Remember New Enforcement Policy",
        dataIndex: "overwriteARP",
        key: "overwriteARP",
        sorter: true
    }
];
export default columns