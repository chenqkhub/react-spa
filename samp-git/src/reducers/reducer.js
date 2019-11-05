import {combineReducers} from 'redux';
import nasClientsReducer from './nasClientsReducer';
import loginReducer from './loginReducer';
import accessPolicyReducer from './accessPolicyReducer';
import authenticationStrategyReducer from './authenticationStrategyReducer';
import ldapRoleMappingReducer from './ldapRoleMappingReducer';
import byodStrategyReducer from './byodStrategyReducer';
import guestStrategyReducer from './guestStrategyReducer';
import authenticationRecordReducer from './authenticationRecordReducer';
import captiveAccessRecordReducer from './captiveAccessRecordReducer';
import ldapAttributeReducer from './ldapAttributeReducer';
import radiusDictionaryReducer from './radiusDictionaryReducer';
import companyPropertyReducer from './companyPropertyReducer';
import radiusCertificateReducer from './radiusCertificateReducer';
import portalCertificateReducer from './portalCertificateReducer';
import onlineDeviceReducer from './onlineDeviceReducer';
import offlineDeviceReducer from './offlineDeviceReducer';
import rememberDeviceReducer from './rememberDeviceReducer';
import guestAccountReducer from './guestAccountReducer';
import guestOperatorReducer from './guestOperatorReducer';
import selfRegistrationReducer from './selfRegistrationReducer';
import captivePortalReducer from './captivePortalReducer';
import userRoleReducer from './userRoleReducer';
import tenantAdminReducer from './tenantAdminReducer';
import tenantStructureReducer from './tenantStructureReducer';
import employeeAccountReducer from './employeeAccountReducer';
import externalRadiusReducer from './externalRadiusReducer';
import licenseManagementReducer from './licenseManagementReducer';
import scheduleJobsReducer from './scheduleJobsReducer';
import scheduleHistoryReducer from './scheduleHistoryReducer';
import logServerReducer from './logServerReducer';
 
const appReducer = combineReducers({
    loginReducer,
    nasClientsReducer,
    accessPolicyReducer,
    authenticationStrategyReducer,
    ldapRoleMappingReducer,
    byodStrategyReducer,
    guestStrategyReducer,
    authenticationRecordReducer,
    captiveAccessRecordReducer,
    ldapAttributeReducer,
    radiusDictionaryReducer,
    companyPropertyReducer,
    radiusCertificateReducer,
    portalCertificateReducer,
    onlineDeviceReducer,
    offlineDeviceReducer,
    rememberDeviceReducer,
    guestAccountReducer,
    guestOperatorReducer,
    selfRegistrationReducer,
    captivePortalReducer,
    userRoleReducer,
    tenantAdminReducer,
    tenantStructureReducer,
    employeeAccountReducer,
    externalRadiusReducer,
    licenseManagementReducer,
    scheduleJobsReducer,
    scheduleHistoryReducer,
    logServerReducer
});
export default appReducer;