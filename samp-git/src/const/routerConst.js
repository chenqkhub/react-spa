export const menus = [
    {
        title: "samp.dashboard.title",
        icon: "home",
        key: "/home",
        breadcrumbName: "samp.dashboard.title",
        subs: [
            { title: "samp.dashboard.title", key: "/home", icon: "", breadcrumbName: "samp.dashboard.title" }
        ]
    },
    {
        title: "samp.policyEngine.title",
        icon: "wifi",
        key: "/policy-engine",
        breadcrumbName: "samp.policyEngine.title",
        subs: [
            { title: "samp.policyEngine.nasClients.title", key: "/policy-engine/nas-client", icon: "", breadcrumbName: "samp.policyEngine.nasClients.title" },
            { title: "samp.policyEngine.authenticationStrategy.title", key: "/policy-engine/authentication-strategy", icon: "", breadcrumbName: "samp.policyEngine.authenticationStrategy.title" },
            { title: "samp.policyEngine.roleMappingLdap.title", key: "/policy-engine/ldap-role-mapping", icon: "", breadcrumbName: "samp.policyEngine.roleMappingLdap.title" },
            { title: "samp.policyEngine.byodAccessStrategy.title", key: "/policy-engine/byod-strategy", icon: "", breadcrumbName: "samp.policyEngine.byodAccessStrategy.title" },
            { title: "samp.policyEngine.guestAccessStrategy.title", key: "/policy-engine/guest-strategy", icon: "", breadcrumbName: "samp.policyEngine.guestAccessStrategy.title" },
            { title: "samp.policyEngine.ldapAttribute.title", key: "/policy-engine/ldap-attribute", icon: "", breadcrumbName: "samp.policyEngine.ldapAttribute.title" },
            { title: "samp.policyEngine.ldapConfiguration.title", key: "/policy-engine/ldap-configuration", icon: "", breadcrumbName: "samp.policyEngine.ldapConfiguration.title" },
            { title: "samp.policyEngine.radiusDictionary.title", key: "/policy-engine/radius-dictionary", icon: "", breadcrumbName: "samp.policyEngine.radiusDictionary.title" },
            { title: "samp.policyEngine.externalRadius.title", key: "/policy-engine/external-radius", icon: "", breadcrumbName: "samp.policyEngine.externalRadius.title" },
            { title: "samp.policyEngine.authenticaitonRecord.title", key: "/policy-engine/authentication-record", icon: "", breadcrumbName: "samp.policyEngine.authenticaitonRecord.title" },
            { title: "samp.policyEngine.captivePortalAccessRecord.title", key: "/policy-engine/captive-portal-record", icon: "", breadcrumbName: "samp.policyEngine.captivePortalAccessRecord.title" },
        ]
    },
    {
        title: "samp.assetManagement.title",
        icon: "apartment",
        key: "/asset-management",
        breadcrumbName: "samp.assetManagement.title",
        subs: [
            { title: "samp.assetManagement.companyProperty.title", key: "/asset-management/company-property", icon: "", breadcrumbName: "samp.assetManagement.companyProperty.title" }
        ]
    },
    {
        title: "samp.byodManagement.title",
        icon: "user",
        key: "/byod-management",
        breadcrumbName: "samp.byodManagement.title",
        subs: [
            { title: "samp.byodManagement.byodGlobalConfiguration.title", key: "/byod-management/byod-global-congifuration", icon: "", breadcrumbName: "samp.byodManagement.byodGlobalConfiguration.title" },
        ]
    },
    {
        title: "samp.certificateManagement.title",
        icon: "safety-certificate",
        key: "/certificate-management",
        breadcrumbName: "samp.certificateManagement.title",
        subs: [
            { title: "samp.certificateManagement.certificateIssuanceTools.title", key: "/certificate-management/certificate-tools", icon: "", breadcrumbName: "samp.certificateManagement.certificateIssuanceTools.title" },
            { title: "samp.certificateManagement.freeRadiusCertificate.title", key: "/certificate-management/free-radius-certificate", icon: "", breadcrumbName: "samp.certificateManagement.freeRadiusCertificate.title" },
            { title: "samp.certificateManagement.ldapsCertificate.title", key: "/certificate-management/ldaps-certificate", icon: "", breadcrumbName: "samp.certificateManagement.ldapsCertificate.title" },
            { title: "samp.certificateManagement.portalServerCertificate.title", key: "/certificate-management/portal-certificate", icon: "", breadcrumbName: "samp.certificateManagement.portalServerCertificate.title" },
            { title: "samp.certificateManagement.tomcatCertificate.title", key: "/certificate-management/tomcat-certificate", icon: "", breadcrumbName: "samp.certificateManagement.tomcatCertificate.title" }

        ]
    },
    {
        title: "samp.deviceManagement.title",
        icon: "laptop",
        key: "/device-management",
        breadcrumbName: "samp.deviceManagement.title",
        subs: [
            { title: "samp.deviceManagement.onlineDevice.title", key: "/device-management/online-device", icon: "", breadcrumbName: "samp.deviceManagement.onlineDevice.title" },
            { title: "samp.deviceManagement.offlineDevice.title", key: "/device-management/offline-device", icon: "", breadcrumbName: "samp.deviceManagement.offlineDevice.title" },
            { title: "samp.deviceManagement.rememberedDevice.title", key: "/device-management/remembered-device", icon: "", breadcrumbName: "samp.deviceManagement.rememberedDevice.title" }
        ]
    },
    {
        title: "samp.guestManagement.title",
        key: "/guest-management",
        icon: "user-delete",
        breadcrumbName: "samp.guestManagement.title",
        subs: [
            { title: "samp.guestManagement.guestAccount.title", key: "/guest-management/guest-account", icon: "", breadcrumbName: "samp.guestManagement.guestAccount.title" },
            { title: "samp.guestManagement.guestGloablConfiguration.title", key: "/guest-management/guest-global-configuration", icon: "", breadcrumbName: "samp.guestManagement.guestGloablConfiguration.title" },
            { title: "samp.guestManagement.guestOperator.title", key: "/guest-management/guest-operator", icon: "", breadcrumbName: "samp.guestManagement.guestOperator.title" },
            { title: "samp.guestManagement.selfRegistrationRequest.title", key: "/guest-management/guest-self-registration", icon: "", breadcrumbName: "samp.guestManagement.selfRegistrationRequest.title" },
        ]
    },
    {
        title: "samp.licenseManagement.title",
        icon: "container",
        key: "/license-management",
        breadcrumbName: "samp.licenseManagement.title",
        subs: [
            { title: "samp.licenseManagement.licenseManagement.title", key: "/license-management/", icon: "", breadcrumbName: "samp.licenseManagement.licenseManagement.title" }
        ]
    },
    {
        title: "samp.logServer.title",
        icon: "exception",
        key: "/log-server",
        breadcrumbName: "samp.logServer.title",
        subs: [
            { title: "samp.logServer.logServer.title", key: "/log-server/log-server", icon: "", breadcrumbName: "samp.logServer.logServer.title" },
            { title: "samp.logServer.externalLogServer.title", key: "/log-server/external-log", icon: "", breadcrumbName: "samp.logServer.externalLogServer.title" }
        ]
    },
    {
        title: "samp.portalManagement.title",
        icon: "laptop",
        key: "/portal-management",
        breadcrumbName: "samp.portalManagement.title",
        subs: [
            { title: "samp.portalManagement.captivePortalPage.title", key: "/portal-management/portal-page", icon: "", breadcrumbName: "samp.portalManagement.captivePortalPage.title" }
        ]
    },
    {
        title: "samp.reports.title",
        icon: "dashboard",
        key: "/dashboard-reports",
        breadcrumbName: "samp.reports.title",
        subs: [
            { title: "samp.reports.auditReport.title", key: "/dashboard-reports/audit-report", icon: "", breadcrumbName: "samp.reports.auditReport.title" },
            { title: "samp.reports.systemReport.title", key: "/dashboard-reports/system-report", icon: "", breadcrumbName: "samp.reports.systemReport.title" },
            { title: "samp.reports.tenantReport.title", key: "/dashboard-reports/tenant-report", icon: "", breadcrumbName: "samp.reports.tenantReport.title" }
        ]
    },
    {
        title: "samp.schedule.title",
        icon: "clock-circle",
        key: "/schedule",
        breadcrumbName: "samp.schedule.title",
        subs: [
            { title: "samp.schedule.scheduleJobs.title", key: "/schedule/schedule-jobs", icon: "", breadcrumbName: "samp.schedule.scheduleJobs.title" },
            { title: "samp.schedule.scheduleHistory.title", key: "/schedule/schedule-history", icon: "", breadcrumbName: "samp.schedule.scheduleHistory.title" },
        ]
    },
    {
        title: "samp.setting.title",
        icon: "setting",
        key: "/setting",
        breadcrumbName: "samp.setting.title",
        subs: [
            { title: "samp.setting.emailServer.title", key: "/setting/email-server", icon: "", breadcrumbName: "samp.setting.emailServer.title" },
            { title: "samp.setting.tenantAdmin.title", key: "/setting/tenant-admin", icon: "", breadcrumbName: "samp.setting.tenantAdmin.title" }
        ]
    },
    {
        title: "samp.userCenter.title",
        icon: "usergroup-add",
        key: "/user-center",
        breadcrumbName: "samp.userCenter.title",
        subs: [
            { title: "samp.userCenter.userRole.title", key: "/user-center/user-role", icon: "", breadcrumbName: "samp.userCenter.userRole.title" },
            { title: "samp.userCenter.organizationStructure.title", key: "/user-center/tenant-structure", icon: "", breadcrumbName: "samp.userCenter.organizationStructure.title" },
            { title: "samp.userCenter.employeeAccount.title", key: "/user-center/employee-account", icon: "", breadcrumbName: "samp.userCenter.employeeAccount.title" },
        ]
    }
]


export const routes = [
    {
        title: "Dashboard",
        icon: "home",
        path: "/home",
        breadcrumbName: "Home",
        children: [
            { title: "Dashboard", path: "/home", icon: "", breadcrumbName: "Home" }
        ]
    },
    {
        title: "Policy Engine",
        icon: "wifi",
        path: "/policy-engine",
        breadcrumbName: "Policy Engine",
        children: [
            { title: "NAS Clients", path: "/policy-engine/nas-client", icon: "", breadcrumbName: "NAS Clients" },
            { title: "Access Policy", path: "/policy-engine/access-policy", icon: "", breadcrumbName: "Access Policy" },
            { title: "Authentication Strategy", path: "/policy-engine/authentication-strategy", icon: "", breadcrumbName: "Authentication Strategy" },
            {
                title: "Authorize Strategy",
                path: "/policy-engine/authorize-strategy",
                icon: "",
                breadcrumbName: "Authorize Strategy",
                children: [
                    { title: "Group Strategy", path: "/policy-engine/authorize-strategy/group-strategy", icon: "", breadcrumbName: "Group Strategy" },
                    { title: "Radius Strategy", path: "/policy-engine/authorize-strategy/radius-strategy", icon: "", breadcrumbName: "Radius Strategy" },
                    { title: "Role Mapping For LDAP/AD", path: "/policy-engine/authorize-strategy/ldap-role-mapping", icon: "", breadcrumbName: "Role Mapping For LDAP/AD" }
                ]
            },
            { title: "Blacklist Strategy", path: "/policy-engine/blacklist-strategy", icon: "", breadcrumbName: "Blacklist Strategy" },
            { title: "BYOD Access Strategy", path: "/policy-engine/byod-strategy", icon: "", breadcrumbName: "BYOD Access Strategy" },
            { title: "Guest Access Strategy", path: "/policy-engine/guest-strategy", icon: "", breadcrumbName: "Guest Access Strategy" },
            { title: "Authentication Record", path: "/policy-engine/authentication-record", icon: "", breadcrumbName: "Authentication Record" },
            { title: "Captive Portal Access Record", path: "/policy-engine/captive-portal-record", icon: "", breadcrumbName: "Captive Portal Access Record" },
            { title: "LDAP Attribute", path: "/policy-engine/ldap-attribute", icon: "", breadcrumbName: "LDAP Attribute" },
            { title: "LDAP/AD Configuration", path: "/policy-engine/ldap-configuration", icon: "", breadcrumbName: "LDAP/AD Configuration" },
            { title: "Radius Dictionary", path: "/policy-engine/radius-dictionary", icon: "", breadcrumbName: "Radius Dictionary" },

        ]
    },
    {
        title: "Asset Management",
        icon: "apartment",
        path: "/asset-management",
        breadcrumbName: "Asset Management",
        children: [
            { title: "Access Network Configuration", path: "/asset-management/access-network", icon: "", breadcrumbName: "Access Network Configuration" },
            { title: "Company Property", path: "/asset-management/company-property", icon: "", breadcrumbName: "Company Property" },
            { title: "Employee Account", path: "/asset-management/employee-account", icon: "", breadcrumbName: "Employee Account" },
            { title: "Topo Location", path: "/asset-management/topo-location", icon: "", breadcrumbName: "Topo Location" }
        ]
    },
    {
        title: "BYOD Management",
        icon: "user",
        path: "/byod-management",
        breadcrumbName: "BYOD Management",
        children: [
            { title: "BYOD Global Configuration", path: "/byod-management/byod-global-congifuration", icon: "", breadcrumbName: "BYOD Global Configuration" },
            { title: "BYOD Self Servive", path: "/byod-management/byod-self-service", icon: "", breadcrumbName: "BYOD Self Servive" }
        ]
    },
    {
        title: "Certificate Management",
        icon: "safety-certificate",
        path: "/certificate-management",
        breadcrumbName: "Certificate Management",
        children: [
            { title: "Certificate Issuance Tools", path: "/certificate-management/certificate-tools", icon: "", breadcrumbName: "Certificate Issuance Tools" },
            { title: "Free Radius Certificate", path: "/certificate-management/free-radius-certificate", icon: "", breadcrumbName: "Free Radius Certificate" },
            { title: "LDAPS Certificate", path: "/certificate-management/ldaps-certificate", icon: "", breadcrumbName: "LDAPS Certificate" },
            { title: "Portal Server Certificate", path: "/certificate-management/portal-certificate", icon: "", breadcrumbName: "Portal Server Certificate" },
            { title: "Tomcat Certificate", path: "/certificate-management/tomcat-certificate", icon: "", breadcrumbName: "Tomcat Certificate" }

        ]
    },
    {
        title: "Device Management",
        icon: "laptop",
        path: "/device-management",
        breadcrumbName: "Device Management",
        children: [
            { title: "Online Device", path: "/device-management/online-device", icon: "", breadcrumbName: "Online Device" },
            { title: "Offline Device", path: "/device-management/offline-device", icon: "", breadcrumbName: "Offline Device" },
            { title: "Remembered Device", path: "/device-management/remembered-device", icon: "", breadcrumbName: "Remembered Device" }
        ]
    },
    {
        title: "Guest Management",
        path: "/guest-management",
        icon: "user-delete",
        breadcrumbName: "Guest Management",
        children: [
            { title: "Guest Account", path: "/guest-management/guest-account", icon: "", breadcrumbName: "Guest Account" },
            { title: "Guest Global Configuration", path: "/guest-management/guest-global-configuration", icon: "", breadcrumbName: "Guest Global Configuration" },
            { title: "Guest Operator", path: "/guest-management/guest-operator", icon: "", breadcrumbName: "Guest Operator" },
            { title: "Guest Self Registration", path: "/guest-management/guest-self-registration", icon: "", breadcrumbName: "Guest Self Registration" },
            { title: "Guest Self Service", path: "/guest-management/guest-self-Service", icon: "", breadcrumbName: "Guest Self Service" },
        ]
    },
    {
        title: "License Management",
        icon: "container",
        path: "/license-management",
        breadcrumbName: "License Management",
        children: [
            { title: "License Management", path: "/license-management/", icon: "", breadcrumbName: "License Management" }
        ]
    },
    {
        title: "Log Server",
        icon: "exception",
        path: "/log-server",
        breadcrumbName: "Log Server",
        subs: [
            { title: "Log Server", path: "/log-server", icon: "", breadcrumbName: "Log Server" }
        ]
    },
    {
        title: "Portal Management",
        icon: "laptop",
        path: "/portal-management",
        breadcrumbName: "Portal Management",
        children: [
            { title: "Captive Portal Page", path: "/portal-management/portal-page", icon: "", breadcrumbName: "Portal Management" }
        ]
    },
    {
        title: "Dashboard & Reports",
        icon: "dashboard",
        path: "/dashboard-reports",
        breadcrumbName: "Dashboard & Reports",
        children: [
            { title: "Audit Report", path: "/dashboard-reports/audit-report", icon: "", breadcrumbName: "Audit Report" },
            { title: "System Report", path: "/dashboard-reports/system-report", icon: "", breadcrumbName: "System Report" },
            { title: "Tenant Report", path: "/dashboard-reports/tenant-report", icon: "", breadcrumbName: "Tenant Report" }
        ]
    },
    {
        title: "Timer Task",
        icon: "clock-circle",
        path: "/timer-task",
        breadcrumbName: "Timer Task",
        children: [
            { title: "Timer Task", path: "/timer-task", icon: "", breadcrumbName: "Timer Task" }
        ]
    },
    {
        title: "Setting",
        icon: "setting",
        path: "/setting",
        breadcrumbName: "Setting",
        children: [
            { title: "Email Server", path: "/setting/email-server", icon: "", breadcrumbName: "Email Server" },
            { title: "External Log Server", key: "/setting/external-log", icon: "", breadcrumbName: "External Log Server" }
        ]
    },
    {
        title: "Workflow",
        icon: "menu",
        path: "/workflow",
        breadcrumbName: "Workflow",
        children: [
            { title: "Workflow", path: "/workflow/byod-workflow", icon: "", breadcrumbName: "Workflow" }
        ]
    }
]