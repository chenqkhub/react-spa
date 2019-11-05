import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'



/***Dashboard */
import Dashboard from '../../modules/dashboard/Dashboard'

/***Policy Engine */
import NasClients from '../../modules/policy-engine/nas-client/NasClients'
import AddEditNasClient from '../../modules/policy-engine/nas-client/AddEditNasClient'
// import AccessPolicy from '../../modules/policy-engine/access-policy/AccessPolicy'
// import AddEditAccessPolicy from '../../modules/policy-engine/access-policy/AddEditAccessPolicy';
import AuthenticationRecord from '../../modules/policy-engine/authentication-record/AuthenticationRecord'
import AuthenticationStrategy from '../../modules/policy-engine/authentication-strategy/AuthenticationStrategy'
import AddEditAuthenticationStrategy from '../../modules/policy-engine/authentication-strategy/AddEditAuthenticationStrategy'
import CaptivePortalAccessRecord from '../../modules/policy-engine/captive-portal-access-record/CaptivePortalAccessRecord'
// import GroupStrategy from '../../modules/policy-engine/authorize-strategy/group-strategy/GroupStrategy'
import LdapRoleMapping from '../../modules/policy-engine/ldap-role-mapping/LdapRoleMapping'
import AddEditLdapRoleMapping from '../../modules/policy-engine/ldap-role-mapping/AddEditLdapRoleMapping'
// import RadiusStrategy from '../../modules/policy-engine/authorize-strategy/radius-strategy/RadiusStrategy'
import BlacklistStrategy from '../../modules/policy-engine/blacklist-strategy/BlacklistStrategy'
import ByodStrategy from '../../modules/policy-engine/byod-strategy/ByodStrategy'
import AddEditByodStrategy from '../../modules/policy-engine/byod-strategy/AddEditByodStrategy'
import GuestStrategy from '../../modules/policy-engine/guest-strategy/GuestStrategy'
import AddEditGuestStrategy from '../../modules/policy-engine/guest-strategy/AddEditGuestStrategy'
import LdapAdConfiguration from '../../modules/policy-engine/ldap-ad-configuration/LdapAdConfiguration'
import LdapAttribute from '../../modules/policy-engine/ldap-attribute/LdapAttribute'
import AddEditLdapAttribute from '../../modules/policy-engine/ldap-attribute/AddEditLdapAttribute'
import RadiusDictionary from '../../modules/policy-engine/radius-dictioanry/RadiusDictionary'
import AddEditRadiusDictionary from '../../modules/policy-engine/radius-dictioanry/AddEditRadiusDictionary'
import ExternalRadius from '../../modules/policy-engine/external-radius/ExternalRadius'
import AddEditExternalRadius from '../../modules/policy-engine/external-radius/AddEditExternalRadius'

/***Asset Management */
import CompanyProperty from '../../modules/asset-management/company-property/CompanyProperty'
import AddEditCompanyProperty from '../../modules/asset-management/company-property/AddEditCompanyProperty'

/***BYOD Management */
import ByodGlobalConfiguration from '../../modules/byod-management/ByodGlobalConfiguration'
import ByodSelfService from '../../modules/byod-management/ByodSelfService'

/***Certificate Management */
import CertificateIssuanceTools from '../../modules/certificate-management/certificate-tools/CertificateIssuanceTools'
import RadiusCertificate from '../../modules/certificate-management/radius-certificate/RadiusCertificate'
import AddRadiusCertificate from '../../modules/certificate-management/radius-certificate/AddRadiusCertificate'
import LdapsCertificate from '../../modules/certificate-management/ldaps-certificate/LdapsCertificate'
import PortalCertificate from '../../modules/certificate-management/portal-certificate/PortalCertificate'
import AddEditPortalCertificate from '../../modules/certificate-management/portal-certificate/AddEditPortalCertificate'
import TomcatCertificate from '../../modules/certificate-management/tomcat-certificate/TomcatCertificate'

/***Device Management */
import OfflineDevice from '../../modules/device-management/offline-device/OfflineDevice'
import OnlineDevice from '../../modules/device-management/online-device/OnlineDevice'
import RememberDevice from '../../modules/device-management/remember-device/RememberDevice'

/***Guest Management */
import GuestAccount from '../../modules/guest-management/guest-account/GuestAccount'
import AddEditGuestAccount from '../../modules/guest-management/guest-account/AddEditGuestAccount'
import BatchCreationAccount from '../../modules/guest-management/guest-account/BatchCreationAccount'
import GuestGlobalConfiguration from '../../modules/guest-management/guest-global/GuestGlobalConfiguration'
import GuestOperator from '../../modules/guest-management/guest-operator/GuestOperator'
import AddEditGuestOperator from '../../modules/guest-management/guest-operator/AddEditGuestOperator'
import SelfRegistration from '../../modules/guest-management/self-registration/SelfRegistration'

/***License Management */
import LicenseManagement from '../../modules/license-management/LicenseManagement'

/***Log Server */
import LogServer from '../../modules/log-server/log-server/LogServer'
import ExternalLogServer from '../../modules/log-server/external-log/ExternalLogServer'

/***Portal Management */
import PortalPage from '../../modules/portal-management/PortalPage'
import AddEditPortalPage from '../../modules/portal-management/AddEditPortalPage'
import CustomizationPortal from '../../modules/portal-management/CustomizationPortal'

/***Report Dashboard */
import AuditReport from '../../modules/report-dashboard/AuditReport'
import SystemReport from '../../modules/report-dashboard/SystemReport'
import TenantReport from '../../modules/report-dashboard/TenantReport'

/***Timer Task */
import ScheduleJobs from '../../modules/schedule/schedule-jobs/ScheduleJobs'
import ScheduleHistory from '../../modules/schedule/schedule-history/ScheduleHistory'

/***Setting */
import EmailServer from '../../modules/setting/EmailServer'
import TenantAdmin from '../../modules/setting/tenant-admin/TenantAdmin'
import AddEditTenantAdmin from '../../modules/setting/tenant-admin/AddEditTenantAdmin'


/***User Center */
import EmployeeAccount from '../../modules/user-center/employee-account/EmployeeAccount'
import AddEditEmployeeAccount from '../../modules/user-center/employee-account/AddEditEmployeeAccount'
import TenantStructure from '../../modules/user-center/tenant-structure/TenantStructure'
import AddEditTenantStructure from '../../modules/user-center/tenant-structure/AddEditTenantStructure'
import UserRole from '../../modules/user-center/user-role/UserRole'
import AddEditUserRole from '../../modules/user-center/user-role/AddEditUserRole'

class ContentRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/home" component={Dashboard} />
                <Route exact path="/policy-engine" component={NasClients} />
                <Route exact path="/policy-engine/nas-client" component={NasClients} />
                <Route exact path="/policy-engine/nas-client/mode" component={AddEditNasClient} />
                {/* <Route exact path="/policy-engine/access-policy" component={AccessPolicy} /> */}
                {/* <Route exact path="/policy-engine/access-policy/mode" component={AddEditAccessPolicy} /> */}
                <Route exact path="/policy-engine/authentication-strategy" component={AuthenticationStrategy} />
                <Route exact path="/policy-engine/authentication-strategy/mode" component={AddEditAuthenticationStrategy} />
                {/* <Route exact path="/policy-engine/authorize-strategy/group-strategy" component={GroupStrategy} /> */}
                {/* <Route exact path="/policy-engine/authorize-strategy/radius-strategy" component={RadiusStrategy} /> */}
                <Route exact path="/policy-engine/ldap-role-mapping" component={LdapRoleMapping} />
                <Route exact path="/policy-engine/ldap-role-mapping/mode" component={AddEditLdapRoleMapping} />
                <Route exact path="/policy-engine/blacklist-strategy" component={BlacklistStrategy} />
                <Route exact path="/policy-engine/byod-strategy" component={ByodStrategy} />
                <Route exact path="/policy-engine/byod-strategy/mode" component={AddEditByodStrategy} />
                <Route exact path="/policy-engine/guest-strategy" component={GuestStrategy} />
                <Route exact path="/policy-engine/guest-strategy/mode" component={AddEditGuestStrategy} />
                <Route exact path="/policy-engine/authentication-record" component={AuthenticationRecord} />
                <Route exact path="/policy-engine/captive-portal-record" component={CaptivePortalAccessRecord} />
                <Route exact path="/policy-engine/ldap-attribute" component={LdapAttribute} />
                <Route exact path="/policy-engine/ldap-attribute/mode" component={AddEditLdapAttribute} />
                <Route exact path="/policy-engine/ldap-configuration" component={LdapAdConfiguration} />
                <Route exact path="/policy-engine/radius-dictionary" component={RadiusDictionary} />
                <Route exact path="/policy-engine/radius-dictionary/mode" component={AddEditRadiusDictionary} />
                <Route exact path="/policy-engine/external-radius" component={ExternalRadius} />
                <Route exact path="/policy-engine/external-radius/mode" component={AddEditExternalRadius} />

                <Route exact path="/asset-management" component={CompanyProperty} />
                <Route exact path="/asset-management/company-property" component={CompanyProperty} />
                <Route exact path="/asset-management/company-property/mode" component={AddEditCompanyProperty} />

                <Route exact path="/byod-management" component={ByodGlobalConfiguration} />
                <Route exact path="/byod-management/byod-global-congifuration" component={ByodGlobalConfiguration} />
                <Route exact path="/byod-management/byod-self-service" component={ByodSelfService} />

                <Route exact path="/certificate-management" component={CertificateIssuanceTools} />
                <Route exact path="/certificate-management/certificate-tools" component={CertificateIssuanceTools} />
                <Route exact path="/certificate-management/free-radius-certificate" component={RadiusCertificate} />
                <Route exact path="/certificate-management/free-radius-certificate/add" component={AddRadiusCertificate} />
                <Route exact path="/certificate-management/ldaps-certificate" component={LdapsCertificate} />
                <Route exact path="/certificate-management/portal-certificate" component={PortalCertificate} />
                <Route exact path="/certificate-management/portal-certificate/mode" component={AddEditPortalCertificate} />
                <Route exact path="/certificate-management/tomcat-certificate" component={TomcatCertificate} />

                <Route exact path="/setting" component={EmailServer} />
                <Route exact path="/setting/email-server" component={EmailServer} /> 
                <Route exact path="/setting/tenant-admin" component={TenantAdmin} />
                <Route exact path="/setting/tenant-admin/mode" component={AddEditTenantAdmin} />               

                <Route exact path="/device-management" component={OnlineDevice} />
                <Route exact path="/device-management/online-device" component={OnlineDevice} />
                <Route exact path="/device-management/offline-device" component={OfflineDevice} />
                <Route exact path="/device-management/remembered-device" component={RememberDevice} />

                <Route exact path="/guest-management" component={GuestAccount} />
                <Route exact path="/guest-management/guest-account" component={GuestAccount} />
                <Route exact path="/guest-management/guest-account/mode" component={AddEditGuestAccount} />
                <Route exact path="/guest-management/guest-account/batch-creation" component={BatchCreationAccount} />
                <Route exact path="/guest-management/guest-global-configuration" component={GuestGlobalConfiguration} />
                <Route exact path="/guest-management/guest-operator" component={GuestOperator} />
                <Route exact path="/guest-management/guest-operator/mode" component={AddEditGuestOperator} />
                <Route exact path="/guest-management/guest-self-registration" component={SelfRegistration} />

                <Route exact path="/log-server/" component={LogServer} />
                <Route exact path="/log-server/external-log" component={ExternalLogServer} />
                <Route exact path="/log-server/log-server" component={LogServer} />

                <Route exact path="/license-management/" component={LicenseManagement} />

                <Route exact path="/portal-management/portal-page" component={PortalPage} />
                <Route exact path="/portal-management/portal-page/mode" component={AddEditPortalPage} />
                <Route exact path="/portal-management/portal-page/custom" component={CustomizationPortal} />

                <Route exact path="/dashboard-reports" component={AuditReport} />
                <Route exact path="/dashboard-reports/audit-report" component={AuditReport} />
                <Route exact path="/dashboard-reports/system-report" component={SystemReport} />
                <Route exact path="/dashboard-reports/tenant-report" component={TenantReport} />

                <Route exact path="/schedule" component={ScheduleJobs} />
                <Route exact path="/schedule/schedule-jobs" component={ScheduleJobs} />
                <Route exact path="/schedule/schedule-history" component={ScheduleHistory} />

                <Route exact path="/user-center"/>
                <Route exact path="/user-center/user-role" component={UserRole}/>
                <Route exact path="/user-center/user-role/mode" component={AddEditUserRole}/>
                <Route exact path="/user-center/employee-account" component={EmployeeAccount}/>
                <Route exact path="/user-center/employee-account/mode" component={AddEditEmployeeAccount} />
                <Route exact path="/user-center/tenant-structure" component={TenantStructure} />
                <Route exact path="/user-center/tenant-structure/mode" component={AddEditTenantStructure} />
            </div>
        );
    }
}

export default ContentRouter;