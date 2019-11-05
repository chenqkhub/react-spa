import React, { Component } from 'react';
import { Form, Input, Select, Collapse, InputNumber, Switch, Button } from 'antd';
import axios from 'axios'
import _ from "lodash"
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import TextArea from 'antd/lib/input/TextArea';
const { Panel } = Collapse
const { Option } = Select

class GuestGlobalConfigurationRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            batchCreation: false,
            accountPrefix: "Guest",
            periodUnit: "Day(s)",
            dataQuota: 1,
            rememberDevice: true,
            accountValidityPeriod: 90,
            deviceValidityPeriod: 30,
            maxDeviceNumberPerAccount: 10,
            enableServiceLevels: true,
            level1Name: "",
            level1ARPName: "",
            level1PLName: "",
            level1DataQuota: "",
            level1PeriodUnit: "Day(s)",
            level1RememberDevice: true,
            level1Description: "",
            level1AccountValidityPeriod: 90,
            level1DeviceValidityPeriod: 30,
            level1MaxDeviceNumberPerAccount: 10,
            level2Enabled: false,
            level2Name: "",
            level2ARPName: "",
            level2PLName: "",
            level2DataQuota: "",
            level2PeriodUnit: "Day(s)",
            level2RememberDevice: true,
            level2Description: "",
            level2AccountValidityPeriod: 90,
            level2DeviceValidityPeriod: 30,
            level2MaxDeviceNumberPerAccount: 10,
            level3Enabled: false,
            level3Name: "",
            level3ARPName: "",
            level3PLName: "",
            level3DataQuota: "",
            level3PeriodUnit: "Day(s)",
            level3RememberDevice: true,
            level3Description: "",
            level3AccountValidityPeriod: 90,
            level3DeviceValidityPeriod: 30,
            level3MaxDeviceNumberPerAccount: 10,
            level4Enabled: false,
            level4Name: "",
            level4ARPName: "",
            level4PLName: "",
            level4DataQuota: "",
            level4PeriodUnit: "Day(s)",
            level4RememberDevice: true,
            level4Description: "",
            level4AccountValidityPeriod: 90,
            level4DeviceValidityPeriod: 30,
            level4MaxDeviceNumberPerAccount: 10,
            level5Enabled: false,
            level5Name: "",
            level5ARPName: "",
            level5PLName: "",
            level5DataQuota: "",
            level5PeriodUnit: "Day(s)",
            level5RememberDevice: true,
            level5Description: "",
            level5AccountValidityPeriod: 90,
            level5DeviceValidityPeriod: 30,
            level5MaxDeviceNumberPerAccount: 10,
            periodUnitArry: ["Day(s)", "Hour(s)", "Minute(s)"],
            accountMin: 1,
            accountMax: 365,
            deviceMin: 1,
            deviceMax: 365,
            maxDeviceNumberPerAccountMin: 1,
            maxDeviceNumberPerAccountMax: 10,
            account1Min: 1,
            account1Max: 365,
            device1Min: 1,
            device1Max: 365,
            account2Min: 1,
            account2Max: 365,
            device2Min: 1,
            device2Max: 365,
            account3Min: 1,
            account3Max: 365,
            device3Min: 1,
            device3Max: 365,
            account4Min: 1,
            account4Max: 365,
            device4Min: 1,
            device4Max: 365,
            account5Min: 1,
            account5Max: 365,
            device5Min: 1,
            device5Max: 365
        }
    }

    componentDidMount() {
        //对于隐藏域的校验，目前还存在问题，先实现功能，后期优化打开初始化校验
        // this.props.form.validateFields();
        
    }
    //改变batch creation开关
    changeBatchCreation = (value) => {
        console.log(value)
        this.setState({ batchCreation: value })
    }
    //改变period unit 时改变account/device的有效期
    changePeriodUnit = (value) => {
        this.setState({ periodUnit: value })
        let min = 1, max = 365, initialAccount = 90, initialDevice = 30;
        if (value === "Day(s)") {
            min = 1
            max = 365
            initialAccount = 90
            initialDevice = 30
        } else if (value === "Hour(s)") {
            min = 1
            max = 72
            initialAccount = 36
            initialDevice = 24
        } else if (value === "Minute(s)") {
            min = 15
            max = 180
            initialAccount = 90
            initialDevice = 60
        }
        this.setState({ accountMin: min, accountMax: max, deviceMin: min, deviceMax: max, accountValidityPeriod: initialAccount, deviceValidityPeriod: initialDevice })
    }
    changePeriodUnitLv1 = (value) => {
        this.setState({ level1PeriodUnit: value })
        let min = 1, max = 365, initialAccount = 90, initialDevice = 30;
        if (value === "Day(s)") {
            min = 1
            max = 365
            initialAccount = 90
            initialDevice = 30
        } else if (value === "Hour(s)") {
            min = 1
            max = 72
            initialAccount = 36
            initialDevice = 24
        } else if (value === "Minute(s)") {
            min = 15
            max = 180
            initialAccount = 90
            initialDevice = 60
        }
        this.setState({ account1Min: min, account1Max: max, device1Min: min, device1Max: max, leve11AccountValidityPeriod: initialAccount, level1DeviceValidityPeriod: initialDevice })
    }
    changePeriodUnitLv2 = (value) => {
        this.setState({ level2PeriodUnit: value })
        let min = 1, max = 365, initialAccount = 90, initialDevice = 30;
        if (value === "Day(s)") {
            min = 1
            max = 365
            initialAccount = 90
            initialDevice = 30
        } else if (value === "Hour(s)") {
            min = 1
            max = 72
            initialAccount = 36
            initialDevice = 24
        } else if (value === "Minute(s)") {
            min = 15
            max = 180
            initialAccount = 90
            initialDevice = 60
        }
        this.setState({ account2Min: min, account2Max: max, device2Min: min, device2Max: max, level2AccountValidityPeriod: initialAccount, level2DeviceValidityPeriod: initialDevice })
    }
    changePeriodUnitLv3 = (value) => {
        this.setState({ level3PeriodUnit: value })
        let min = 1, max = 365, initialAccount = 90, initialDevice = 30;
        if (value === "Day(s)") {
            min = 1
            max = 365
            initialAccount = 90
            initialDevice = 30
        } else if (value === "Hour(s)") {
            min = 1
            max = 72
            initialAccount = 36
            initialDevice = 24
        } else if (value === "Minute(s)") {
            min = 15
            max = 180
            initialAccount = 90
            initialDevice = 60
        }
        this.setState({ account3Min: min, account3Max: max, device3Min: min, device3Max: max, level3AccountValidityPeriod: initialAccount, level3DeviceValidityPeriod: initialDevice })
    }
    changePeriodUnitLv4 = (value) => {
        this.setState({ level4PeriodUnit: value })
        let min = 1, max = 365, initialAccount = 90, initialDevice = 30;
        if (value === "Day(s)") {
            min = 1
            max = 365
            initialAccount = 90
            initialDevice = 30
        } else if (value === "Hour(s)") {
            min = 1
            max = 72
            initialAccount = 36
            initialDevice = 24
        } else if (value === "Minute(s)") {
            min = 15
            max = 180
            initialAccount = 90
            initialDevice = 60
        }
        this.setState({ account4Min: min, account4Max: max, device4Min: min, device4Max: max, leve14AccountValidityPeriod: initialAccount, level4DeviceValidityPeriod: initialDevice })
    }
    changePeriodUnitLv5 = (value) => {
        this.setState({ level5PeriodUnit: value })
        let min = 1, max = 365, initialAccount = 90, initialDevice = 30;
        if (value === "Day(s)") {
            min = 1
            max = 365
            initialAccount = 90
            initialDevice = 30
        } else if (value === "Hour(s)") {
            min = 1
            max = 72
            initialAccount = 36
            initialDevice = 24
        } else if (value === "Minute(s)") {
            min = 15
            max = 180
            initialAccount = 90
            initialDevice = 60
        }
        this.setState({ account5Min: min, account5Max: max, device5Min: min, device5Max: max, leve15AccountValidityPeriod: initialAccount, level5DeviceValidityPeriod: initialDevice })
    }
    //改变remember device
    changeRememberDevice = (value) => {
        this.setState({ rememberDevice: value })
    }
    changeLevel1RememberDevice = (value) => {
        this.setState({ level1RememberDevice: value })
    }
    changeLevel2RememberDevice = (value) => {
        this.setState({ level2RememberDevice: value })
    }
    changeLevel3RememberDevice = (value) => {
        this.setState({ level3RememberDevice: value })
    }
    changeLevel4RememberDevice = (value) => {
        this.setState({ level4RememberDevice: value })
    }
    changeLevel5RememberDevice = (value) => {
        this.setState({ level5RememberDevice: value })
    }
    //改变service level
    changeServiceLevel = (value, event) => {
        event.stopPropagation()
        this.setState({ enableServiceLevels: value })
    }
    changeLevel2Enabled = (value) => {
        this.setState({ level2Enabled: value })
    }
    changeLevel3Enabled = (value) => {
        this.setState({ level3Enabled: value })
    }
    changeLevel4Enabled = (value) => {
        this.setState({ level4Enabled: value })
    }
    changeLevel5Enabled = (value) => {
        this.setState({ level5Enabled: value })
    }


    render() {
        const genExtra = () => (
            <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" onChange={e => {
                // If you don't want click extra trigger collapse, you can prevent this:
                e.stopPropagation();
            }} />
        );
        const checkServiceLevel = () => {
            console.log("jiaoyan service level")
            if (this.state.enableServiceLevels) {
                var flag = true;
                if (this.state.level1RememberDevice  && this.state.level1AccountValidityPeriod < this.state.level1DeviceValidityPeriod) {
                    flag = false;
                }
                if (this.state.level2Enabled && this.state.level2RememberDevice && this.state.level2AccountValidityPeriod < this.state.level2DeviceValidityPeriod) {
                    flag = false;
                }
                if (this.state.level3Enabled && this.state.level3RememberDevice && this.state.level3AccountValidityPeriod < this.state.level3DeviceValidityPeriod) {
                    flag = false;
                }
                if (this.state.level4Enabled && this.state.level4RememberDevice && this.state.level4AccountValidityPeriod < this.state.level4DeviceValidityPeriod) {
                    flag = false;
                }
                if (this.state.level5Enabled && this.state.level5RememberDevice && this.state.level5AccountValidityPeriod < this.state.level5DeviceValidityPeriod) {
                    flag = false;
                }
                return flag;
            } else {
                return true;
            }
        }
        const { form } = this.props;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;
        const batchCreationError = isFieldTouched('batchCreation') && getFieldError('batchCreation');
        const accountPrefixError = isFieldTouched('accountPrefix') && getFieldError('accountPrefix');
        const accountValidityPeriodError = isFieldTouched('accountValidityPeriod') && getFieldError('accountValidityPeriod');
        const deviceValidityPeriodError = isFieldTouched('deviceValidityPeriod') && getFieldError('deviceValidityPeriod');
        const maxDeviceNumberPerAccountError = isFieldTouched('maxDeviceNumberPerAccount') && getFieldError('maxDeviceNumberPerAccount');
        const dataQuotaAccountError = isFieldTouched('dataQuota') && getFieldError('dataQuota');
        const level1NameError = isFieldTouched('level1Name') && getFieldError('level1Name');
        const level1AccountValidityPeriodError = isFieldTouched('level1AccountValidityPeriod') && getFieldError('level1AccountValidityPeriod');
        const level1DeviceValidityPeriodError = isFieldTouched('level1DeviceValidityPeriod') && getFieldError('level1DeviceValidityPeriod');
        const level1MaxDeviceNumberPerAccountError = isFieldTouched('level1MaxDeviceNumberPerAccount') && getFieldError('level1MaxDeviceNumberPerAccount');
        const level1DataQuotaAccountError = isFieldTouched('level1DataQuota') && getFieldError('level1DataQuota');
        const level2NameError = isFieldTouched('level2Name') && getFieldError('level2Name');
        const level2AccountValidityPeriodError = isFieldTouched('level2AccountValidityPeriod') && getFieldError('level2AccountValidityPeriod');
        const level2MaxDeviceNumberPerAccountError = isFieldTouched('level2MaxDeviceNumberPerAccount') && getFieldError('level2MaxDeviceNumberPerAccount');
        const level2DataQuotaAccountError = isFieldTouched('level2DataQuota') && getFieldError('level2DataQuota');
        const level3NameError = isFieldTouched('level3Name') && getFieldError('level3Name');
        const level3AccountValidityPeriodError = isFieldTouched('level3AccountValidityPeriod') && getFieldError('level3AccountValidityPeriod');
        const level3DeviceValidityPeriodError = isFieldTouched('level3DeviceValidityPeriod') && getFieldError('level3DeviceValidityPeriod');
        const level3MaxDeviceNumberPerAccountError = isFieldTouched('level3MaxDeviceNumberPerAccount') && getFieldError('level3MaxDeviceNumberPerAccount');
        const level3DataQuotaAccountError = isFieldTouched('level3DataQuota') && getFieldError('level3DataQuota');
        const level4NameError = isFieldTouched('level4Name') && getFieldError('level4Name');
        const level4AccountValidityPeriodError = isFieldTouched('level4AccountValidityPeriod') && getFieldError('level4AccountValidityPeriod');
        const level4DeviceValidityPeriodError = isFieldTouched('level4DeviceValidityPeriod') && getFieldError('level4DeviceValidityPeriod');
        const level4MaxDeviceNumberPerAccountError = isFieldTouched('level4MaxDeviceNumberPerAccount') && getFieldError('level4MaxDeviceNumberPerAccount');
        const level4DataQuotaAccountError = isFieldTouched('level4DataQuota') && getFieldError('level4DataQuota');
        const level5NameError = isFieldTouched('level5Name') && getFieldError('level5Name');
        const level5AccountValidityPeriodError = isFieldTouched('level5AccountValidityPeriod') && getFieldError('level5AccountValidityPeriod');
        const level5DeviceValidityPeriodError = isFieldTouched('level5DeviceValidityPeriod') && getFieldError('level5DeviceValidityPeriod');
        const level5MaxDeviceNumberPerAccountError = isFieldTouched('level5MaxDeviceNumberPerAccount') && getFieldError('level5MaxDeviceNumberPerAccount');
        const level5DataQuotaAccountError = isFieldTouched('level5DataQuota') && getFieldError('level5DataQuota');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const rules = {
            batchCreation: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            accountPrefix: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (_.size(value) >= 1 && _.size(value) <= 16) {
                            let reg = /^[-A-Za-z0-9.:_/@]*$/;
                            reg.test(value) ? callback() : callback("This field can only contain: 1-9 a-z A-Z /. - : _ @")
                        } else callback("The field must be in 1-16 characters.")
                    }
                }
            ],
            dataQuota: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            periodUnit: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            accountValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && form.getFieldValue('deviceValidityPeriod')) {
                            form.validateFields(['deviceValidityPeriod'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            deviceValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && value > form.getFieldValue('accountValidityPeriod')) {
                            callback('Device validity period value must be smaller than account validity period value.');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            rememberDevice: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            maxDeviceNumberPerAccount: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            level1Name: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 3 && _.size(value) <= 32 ? callback() : callback("The field must be in 3-32 characters.")
                    }
                }
            ],
            level1AccountValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && form.getFieldValue('level1DeviceValidityPeriod')) {
                            form.validateFields(['level1DeviceValidityPeriod'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            level1DeviceValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && value > form.getFieldValue('level1AccountValidityPeriod')) {
                            callback('Device validity period value must be smaller than account validity period value.');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            level2AccountValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && form.getFieldValue('level2DeviceValidityPeriod')) {
                            form.validateFields(['level2DeviceValidityPeriod'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            level2DeviceValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && value > form.getFieldValue('level2AccountValidityPeriod')) {
                            callback('Device validity period value must be smaller than account validity period value.');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            level3AccountValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && form.getFieldValue('level3DeviceValidityPeriod')) {
                            form.validateFields(['level3DeviceValidityPeriod'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            level3DeviceValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && value > form.getFieldValue('level3AccountValidityPeriod')) {
                            callback('Device validity period value must be smaller than account validity period value.');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            level4AccountValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && form.getFieldValue('level4DeviceValidityPeriod')) {
                            form.validateFields(['level4DeviceValidityPeriod'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            level4DeviceValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && value > form.getFieldValue('level4AccountValidityPeriod')) {
                            callback('Device validity period value must be smaller than account validity period value.');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            level5AccountValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && form.getFieldValue('level5DeviceValidityPeriod')) {
                            form.validateFields(['level5DeviceValidityPeriod'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            level5DeviceValidityPeriod: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && value > form.getFieldValue('level5AccountValidityPeriod')) {
                            callback('Device validity period value must be smaller than account validity period value.');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            description: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 255 ? callback() : callback("The field must be in 0-255 characters.")
                    }
                }
            ]
        }
        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        Guest Global Configuration
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Batch Accounts Creation" key="1" className="samp_collapse_panel_header">
                                <Form.Item label="Batch Account Creation" validateStatus={batchCreationError ? 'error' : ''} help={batchCreationError || ''}>
                                    {getFieldDecorator('batchCreation', { initialValue: this.state.batchCreation, rules: rules.batchCreation })(
                                        <Switch style={{ float: "left" }} checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.batchCreation} onChange={this.changeBatchCreation} />
                                    )}
                                </Form.Item>
                                <Form.Item label="Default Prefix For Account" validateStatus={accountPrefixError ? 'error' : ''} help={accountPrefixError || ''}>
                                    {getFieldDecorator('accountPrefix', { initialValue: this.state.accountPrefix, rules: rules.accountPrefix })(
                                        <Input disabled={!this.state.batchCreation} />
                                    )}
                                </Form.Item>
                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['2']} className="samp_collapse_style">
                            <Panel header="Registration Strategy" key="2" className="samp_collapse_panel_header">
                                <Form.Item label="Period Unit">
                                    {getFieldDecorator('periodUnit', { initialValue: this.state.periodUnit, rules: rules.periodUnit })(
                                        <Select
                                            placeholder="Please select"
                                            onChange={this.changePeriodUnit}
                                        >
                                            {this.state.periodUnitArry.map((item) => {
                                                return <Option key={item} value={item}>{item}</Option>
                                            })}
                                        </Select>)}
                                </Form.Item>
                                <Form.Item label="Account Validity Period" hasFeedback validateStatus={accountValidityPeriodError ? 'error' : ''} help={accountValidityPeriodError || ''}>
                                    {getFieldDecorator('accountValidityPeriod', { initialValue: this.state.accountValidityPeriod, rules: rules.accountValidityPeriod })(
                                        <InputNumber style={{ width: "100%" }} min={this.state.accountMin} max={this.state.accountMax} />
                                    )}
                                </Form.Item>
                                <Form.Item label="Remember Device">
                                    {getFieldDecorator('rememberDevice', { initialValue: this.state.rememberDevice, rules: rules.rememberDevice })(
                                        <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.rememberDevice} onChange={this.changeRememberDevice} />
                                    )}
                                </Form.Item>
                                {
                                    this.state.rememberDevice ?
                                        <div>
                                            <Form.Item label="Device Validity Period" hasFeedback validateStatus={deviceValidityPeriodError ? 'error' : ''} help={deviceValidityPeriodError || ''}>
                                                {getFieldDecorator('deviceValidityPeriod', { initialValue: this.state.deviceValidityPeriod, rules: rules.deviceValidityPeriod })(
                                                    <InputNumber style={{ width: "100%" }} min={this.state.deviceMin} max={this.state.deviceMax} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label="Max Device Number Per Account" hasFeedback validateStatus={maxDeviceNumberPerAccountError ? 'error' : ''} help={maxDeviceNumberPerAccountError || ''}>
                                                {getFieldDecorator('maxDeviceNumberPerAccount', { initialValue: this.state.maxDeviceNumberPerAccount, rules: rules.maxDeviceNumberPerAccount })(
                                                    <InputNumber style={{ width: "100%" }} min={this.state.maxDeviceNumberPerAccountMin} max={this.state.maxDeviceNumberPerAccountMax} onChange={this.changeMaxDeviceNumberPerAccount} />
                                                )}
                                            </Form.Item>
                                        </div> : ""
                                }
                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Data Quota" key="1" className="samp_collapse_panel_header">
                                <Form.Item label="Data Quota" validateStatus={dataQuotaAccountError ? 'error' : ''} help={dataQuotaAccountError || ''}>
                                    {getFieldDecorator('dataQuota', { initialValue: this.state.dataQuota, rules: rules.dataQuota })(
                                        <InputNumber style={{ width: "100%" }} min={1} max={2147483} />
                                    )}
                                </Form.Item>
                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" className="samp_collapse_style" accordion={this.state.enableServiceLevels}>
                            <Panel header="Service Level" className="samp_collapse_panel_header" extra={<Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.enableServiceLevels} onChange={this.changeServiceLevel} />}>
                                {
                                    this.state.enableServiceLevels ?
                                        <div>
                                            <div style={{ marginLeft: "10px" }}>
                                                Level 1
                                            </div>
                                            <hr />
                                            <Form.Item label="Service Name" validateStatus={level1NameError ? 'error' : ''} help={level1NameError || ''}>
                                                {getFieldDecorator('level1Name', { initialValue: this.state.level1Name, rules: rules.level1Name })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="Access Role Profile">
                                                {getFieldDecorator('level1ARPName', { initialValue: this.state.level1ARPName, rules: [] })(<Input/>)}
                                            </Form.Item>
                                            <Form.Item label="Policy List">
                                                {getFieldDecorator('level1PLName', { initialValue: this.state.level1PLName, rules: [] })(<Input/>)}
                                            </Form.Item>
                                            <Form.Item label="Data Quota" validateStatus={level1DataQuotaAccountError ? 'error' : ''} help={level1DataQuotaAccountError || ''}>
                                                {getFieldDecorator('level1DataQuota', { initialValue: this.state.level1DataQuota, rules: rules.dataQuota })(
                                                    <InputNumber style={{ width: "100%" }} min={1} max={2147483} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label="Period Unit">
                                                {getFieldDecorator('levelPeriodUnit', { initialValue: this.state.level1PeriodUnit, rules: rules.periodUnit })(
                                                    <Select
                                                        placeholder="Please select"
                                                        onChange={this.changePeriodUnitLv1}
                                                    >
                                                        {
                                                            this.state.periodUnitArry.map((item) => {
                                                                return <Option key={item} value={item}>{item}</Option>
                                                            })
                                                        }
                                                    </Select>)}
                                            </Form.Item>
                                            <Form.Item label="Account Validity Period" hasFeedback validateStatus={level1AccountValidityPeriodError ? 'error' : ''} help={level1AccountValidityPeriodError || ''}>
                                                {getFieldDecorator('level1AccountValidityPeriod', { initialValue: this.state.level1AccountValidityPeriod, rules: rules.level1AccountValidityPeriod })(
                                                    <InputNumber style={{ width: "100%" }} min={this.state.account1Min} max={this.state.account1Max} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label="Remember Device">
                                                {getFieldDecorator('level1RememberDevice', { initialValue: this.state.level1RememberDevice, rules: rules.rememberDevice })(
                                                    <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level1RememberDevice} onChange={this.changeLevel1RememberDevice} />
                                                )}
                                            </Form.Item>
                                            {
                                                this.state.level1RememberDevice ?
                                                    <div>
                                                        <Form.Item label="Device Validity Period" hasFeedback validateStatus={level1DeviceValidityPeriodError ? 'error' : ''} help={level1DeviceValidityPeriodError || ''}>
                                                            {getFieldDecorator('level1DeviceValidityPeriod', { initialValue: this.state.level1DeviceValidityPeriod, rules: rules.level1DeviceValidityPeriod })(
                                                                <InputNumber style={{ width: "100%" }} min={this.state.device1Min} max={this.state.device1Max} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Max Device Number Per Account" hasFeedback validateStatus={level1MaxDeviceNumberPerAccountError ? 'error' : ''} help={level1MaxDeviceNumberPerAccountError || ''}>
                                                            {getFieldDecorator('level1MaxDeviceNumberPerAccount', { initialValue: this.state.level1MaxDeviceNumberPerAccount, rules: rules.maxDeviceNumberPerAccount })(
                                                                <InputNumber style={{ width: "100%" }} min={this.state.maxDeviceNumberPerAccountMin} max={this.state.maxDeviceNumberPerAccountMax} />
                                                            )}
                                                        </Form.Item>
                                                    </div> : ""
                                            }
                                            <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                                                {getFieldDecorator('level1Description', { initialValue: this.state.level1Description, rules: rules.description })(
                                                    <TextArea />
                                                )}
                                            </Form.Item>
                                            <div style={{ marginLeft: "10px" }}>
                                                Level 2
                                            </div>
                                            <hr />
                                            <Form.Item label="Enable Service">
                                                {getFieldDecorator('level2Enabled', { initialValue: this.state.level2Enabled })(<Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level2Enabled} onChange={this.changeLevel2Enabled} />)}
                                            </Form.Item>
                                            {
                                                this.state.level2Enabled ?
                                                    <div>
                                                        <Form.Item label="Service Name" validateStatus={level2NameError ? 'error' : ''} help={level2NameError || ''}>
                                                            {getFieldDecorator('level2Name', { initialValue: this.state.level2Name, rules: rules.level1Name })(<Input />)}
                                                        </Form.Item>
                                                        <Form.Item label="Access Role Profile">
                                                            {getFieldDecorator('level2ARPName', { initialValue: this.state.level2ARPName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Policy List">
                                                            {getFieldDecorator('leve12PLName', { initialValue: this.state.level2PLName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Data Quota" validateStatus={level2DataQuotaAccountError ? 'error' : ''} help={level2DataQuotaAccountError || ''}>
                                                            {getFieldDecorator('leve2DataQuota', { initialValue: this.state.level2DataQuota, rules: rules.dataQuota })(
                                                                <InputNumber style={{ width: "100%" }} min={1} max={2147483} onChange={this.changeMaxDeviceNumberPerAccount} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Period Unit">
                                                            {getFieldDecorator('leve2PeriodUnit', { initialValue: this.state.level2PeriodUnit, rules: rules.periodUnit })(
                                                                <Select
                                                                    placeholder="Please select"
                                                                >
                                                                    {children}
                                                                </Select>)}
                                                        </Form.Item>
                                                        <Form.Item label="Account Validity Period" hasFeedback validateStatus={level2AccountValidityPeriodError ? 'error' : ''} help={level2AccountValidityPeriodError || ''}>
                                                            {getFieldDecorator('level2AccountValidityPeriod', { initialValue: this.state.level2AccountValidityPeriod, rules: rules.level2AccountValidityPeriod })(
                                                                <InputNumber style={{ width: "100%" }} min={this.state.account2Min} max={this.state.account2Max} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Remember Device">
                                                            {getFieldDecorator('leve2RememberDevice', { initialValue: this.state.level2RememberDevice, rules: rules.rememberDevice })(
                                                                <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level2RememberDevice} onChange={this.changeLevel2RememberDevice} />
                                                            )}
                                                        </Form.Item>
                                                        {
                                                            this.state.level2RememberDevice ?
                                                                <div>
                                                                    <Form.Item label="Device Validity Period" hasFeedback >
                                                                        {getFieldDecorator('leve2DeviceValidityPeriodd', { initialValue: this.state.level2DeviceValidityPeriod, rules: rules.level2DeviceValidityPeriod })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.device2Min} max={this.state.device3Max} />
                                                                        )}
                                                                    </Form.Item>
                                                                    <Form.Item label="Max Device Number Per Account" hasFeedback validateStatus={level2MaxDeviceNumberPerAccountError ? 'error' : ''} help={level2MaxDeviceNumberPerAccountError || ''}>
                                                                        {getFieldDecorator('leve2MaxDeviceNumberPerAccount', { initialValue: this.state.level2MaxDeviceNumberPerAccount, rules: rules.maxDeviceNumberPerAccount })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.maxDeviceNumberPerAccountMin} max={this.state.maxDeviceNumberPerAccountMax} />
                                                                        )}
                                                                    </Form.Item>
                                                                </div> : ""
                                                        }
                                                        <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                                                            {getFieldDecorator('level2Description', { initialValue: this.state.level2Description, rules: rules.description })(
                                                                <TextArea />
                                                            )}
                                                        </Form.Item>
                                                    </div> : ""
                                            }

                                            <div style={{ marginLeft: "10px" }}>
                                                Level 3
                                            </div>
                                            <hr />
                                            <Form.Item label="Enable Service">
                                                {getFieldDecorator('level3Enabled', { initialValue: this.state.level2Enabled })(<Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level3Enabled} onChange={this.changeLevel3Enabled} />)}
                                            </Form.Item>
                                            {
                                                this.state.level3Enabled ?
                                                    <div>
                                                        <Form.Item label="Service Name" validateStatus={level3NameError ? 'error' : ''} help={level3NameError || ''}>
                                                            {getFieldDecorator('level3Name', { initialValue: this.state.level3Name, rules: rules.level1Name })(<Input />)}
                                                        </Form.Item>
                                                        <Form.Item label="Access Role Profile">
                                                            {getFieldDecorator('level3ARPName', { initialValue: this.state.level3ARPName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Policy List">
                                                            {getFieldDecorator('leve13PLName', { initialValue: this.state.level3PLName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Data Quota" validateStatus={level3DataQuotaAccountError ? 'error' : ''} help={level3DataQuotaAccountError || ''}>
                                                            {getFieldDecorator('leve3DataQuota', { initialValue: this.state.level3DataQuota, rules: rules.dataQuota })(
                                                                <InputNumber style={{ width: "100%" }} min={1} max={2147483} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Period Unit">
                                                            {getFieldDecorator('leve2PeriodUnit', { initialValue: this.state.level3PeriodUnit, rules: rules.periodUnit })(
                                                                <Select
                                                                    placeholder="Please select"
                                                                >
                                                                    {children}
                                                                </Select>)}
                                                        </Form.Item>
                                                        <Form.Item label="Account Validity Period" hasFeedback validateStatus={level3AccountValidityPeriodError ? 'error' : ''} help={level3AccountValidityPeriodError || ''}>
                                                            {getFieldDecorator('level3AccountValidityPeriod', { initialValue: this.state.level3AccountValidityPeriod, rules: rules.level3AccountValidityPeriod })(
                                                                <InputNumber style={{ width: "100%" }} min={this.state.account3Min} max={this.state.account3Max} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Remember Device">
                                                            {getFieldDecorator('leve3RememberDevice', { initialValue: this.state.level3RememberDevice, rules: rules.rememberDevice })(
                                                                <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level3RememberDevice} onChange={this.changeLevel3RememberDevice} />
                                                            )}
                                                        </Form.Item>
                                                        {
                                                            this.state.level3RememberDevice ?
                                                                <div>
                                                                    <Form.Item label="Device Validity Period" hasFeedback validateStatus={level3DeviceValidityPeriodError ? 'error' : ''} help={level3DeviceValidityPeriodError || ''}>
                                                                        {getFieldDecorator('leve3DeviceValidityPeriodd', { initialValue: this.state.level3DeviceValidityPeriod, rules: rules.level3DeviceValidityPeriod })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.device3Min} max={this.state.device3Max} />
                                                                        )}
                                                                    </Form.Item>
                                                                    <Form.Item label="Max Device Number Per Account" hasFeedback validateStatus={level3MaxDeviceNumberPerAccountError ? 'error' : ''} help={level3MaxDeviceNumberPerAccountError || ''}>
                                                                        {getFieldDecorator('leve3MaxDeviceNumberPerAccount', { initialValue: this.state.level3MaxDeviceNumberPerAccount, rules: rules.maxDeviceNumberPerAccount })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.maxDeviceNumberPerAccountMin} max={this.state.maxDeviceNumberPerAccountMax} />
                                                                        )}
                                                                    </Form.Item>
                                                                </div> : ""
                                                        }
                                                        <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                                                            {getFieldDecorator('level3Description', { initialValue: this.state.level3Description, rules: rules.description })(
                                                                <TextArea />
                                                            )}
                                                        </Form.Item>

                                                    </div> : ""
                                            }
                                            <div style={{ marginLeft: "10px" }}>
                                                Level 4
                                            </div>
                                            <hr />
                                            <Form.Item label="Enable Service">
                                                {getFieldDecorator('level4Enabled', { initialValue: this.state.level2Enabled })(<Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level4Enabled} onChange={this.changeLevel4Enabled} />)}
                                            </Form.Item>
                                            {
                                                this.state.level4Enabled ?
                                                    <div>
                                                        <Form.Item label="Service Name" validateStatus={level4NameError ? 'error' : ''} help={level4NameError || ''}>
                                                            {getFieldDecorator('level4Name', { initialValue: this.state.level4Name, rules: rules.level4Name })(<Input />)}
                                                        </Form.Item>
                                                        <Form.Item label="Access Role Profile">
                                                            {getFieldDecorator('level4ARPName', { initialValue: this.state.level4ARPName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Policy List">
                                                            {getFieldDecorator('leve14PLName', { initialValue: this.state.level4PLName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Data Quota" validateStatus={level4DataQuotaAccountError ? 'error' : ''} help={level4DataQuotaAccountError || ''}>
                                                            {getFieldDecorator('leve4DataQuota', { initialValue: this.state.level4DataQuota, rules: rules.dataQuota })(
                                                                <InputNumber style={{ width: "100%" }} min={1} max={2147483} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Period Unit">
                                                            {getFieldDecorator('leve4PeriodUnit', { initialValue: this.state.level4PeriodUnit, rules: rules.periodUnit })(
                                                                <Select
                                                                    placeholder="Please select"
                                                                >
                                                                    {children}
                                                                </Select>)}
                                                        </Form.Item>
                                                        <Form.Item label="Account Validity Period" hasFeedback validateStatus={level4AccountValidityPeriodError ? 'error' : ''} help={level4AccountValidityPeriodError || ''}>
                                                            {getFieldDecorator('level2AccountValidityPeriod', { initialValue: this.state.level4AccountValidityPeriod, rules: rules.level4AccountValidityPeriod })(
                                                                <InputNumber style={{ width: "100%" }} min={this.state.account4Min} max={this.state.account4Max} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Remember Device">
                                                            {getFieldDecorator('leve4RememberDevice', { initialValue: this.state.level4RememberDevice, rules: rules.rememberDevice })(
                                                                <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level4RememberDevice} onChange={this.changeLevel4RememberDevice} />
                                                            )}
                                                        </Form.Item>
                                                        {
                                                            this.state.level4RememberDevice ?
                                                                <div>
                                                                    <Form.Item label="Device Validity Period" hasFeedback validateStatus={level4DeviceValidityPeriodError ? 'error' : ''} help={level4DeviceValidityPeriodError || ''}>
                                                                        {getFieldDecorator('level4DeviceValidityPeriodd', { initialValue: this.state.level4DeviceValidityPeriod, rules: rules.level4DeviceValidityPeriod })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.device4Min} max={this.state.device4Max} />
                                                                        )}
                                                                    </Form.Item>
                                                                    <Form.Item label="Max Device Number Per Account" hasFeedback validateStatus={level4MaxDeviceNumberPerAccountError ? 'error' : ''} help={level4MaxDeviceNumberPerAccountError || ''}>
                                                                        {getFieldDecorator('level4MaxDeviceNumberPerAccount', { initialValue: this.state.level4MaxDeviceNumberPerAccount, rules: rules.maxDeviceNumberPerAccount })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.maxDeviceNumberPerAccountMin} max={this.state.maxDeviceNumberPerAccountMax} />
                                                                        )}
                                                                    </Form.Item>
                                                                </div> : ""
                                                        }
                                                        <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                                                            {getFieldDecorator('level4Description', { initialValue: this.state.level4Description, rules: rules.description })(
                                                                <TextArea />
                                                            )}
                                                        </Form.Item>

                                                    </div> : ""
                                            }
                                            <div style={{ marginLeft: "10px" }}>
                                                Level 5
                                            </div>
                                            <hr />
                                            <Form.Item label="Enable Service">
                                                {getFieldDecorator('level5Enabled', { initialValue: this.state.level2Enabled })(<Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level5Enabled} onChange={this.changeLevel5Enabled} />)}
                                            </Form.Item>
                                            {
                                                this.state.level5Enabled ?
                                                    <div>
                                                        <Form.Item label="Service Name" validateStatus={level5NameError ? 'error' : ''} help={level5NameError || ''}>
                                                            {getFieldDecorator('level5Name', { initialValue: this.state.level5Name, rules: rules.level5Name })(<Input />)}
                                                        </Form.Item>
                                                        <Form.Item label="Access Role Profile">
                                                            {getFieldDecorator('level5ARPName', { initialValue: this.state.level5ARPName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Policy List">
                                                            {getFieldDecorator('leve15PLName', { initialValue: this.state.level5PLName, rules: [] })(<Input/>)}
                                                        </Form.Item>
                                                        <Form.Item label="Data Quota" validateStatus={level5DataQuotaAccountError ? 'error' : ''} help={level5DataQuotaAccountError || ''}>
                                                            {getFieldDecorator('level5DataQuota', { initialValue: this.state.level5DataQuota, rules: rules.dataQuota })(
                                                                <InputNumber style={{ width: "100%" }} min={1} max={2147483} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Period Unit">
                                                            {getFieldDecorator('level5PeriodUnit', { initialValue: this.state.level5PeriodUnit, rules: rules.periodUnit })(
                                                                <Select
                                                                    placeholder="Please select"
                                                                >
                                                                    {children}
                                                                </Select>)}
                                                        </Form.Item>
                                                        <Form.Item label="Account Validity Period" hasFeedback validateStatus={level5AccountValidityPeriodError ? 'error' : ''} help={level5AccountValidityPeriodError || ''}>
                                                            {getFieldDecorator('level5AccountValidityPeriod', { initialValue: this.state.level5AccountValidityPeriod, rules: rules.level5AccountValidityPeriod })(
                                                                <InputNumber style={{ width: "100%" }} min={this.state.account5Min} max={this.state.account5Max} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Remember Device">
                                                            {getFieldDecorator('level5RememberDevice', { initialValue: this.state.level5RememberDevice, rules: rules.rememberDevice })(
                                                                <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.level5RememberDevice} onChange={this.changeLevel5RememberDevice} />
                                                            )}
                                                        </Form.Item>
                                                        {
                                                            this.state.level5RememberDevice ?
                                                                <div>
                                                                    <Form.Item label="Device Validity Period" hasFeedback validateStatus={level5DeviceValidityPeriodError ? 'error' : ''} help={level5DeviceValidityPeriodError || ''}>
                                                                        {getFieldDecorator('level5DeviceValidityPeriodd', { initialValue: this.state.level5DeviceValidityPeriod, rules: rules.level5DeviceValidityPeriod })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.device3Min} max={this.state.device3Max} />
                                                                        )}
                                                                    </Form.Item>
                                                                    <Form.Item label="Max Device Number Per Account" hasFeedback validateStatus={level5MaxDeviceNumberPerAccountError ? 'error' : ''} help={level5MaxDeviceNumberPerAccountError || ''}>
                                                                        {getFieldDecorator('level5MaxDeviceNumberPerAccount', { initialValue: this.state.level5MaxDeviceNumberPerAccount, rules: rules.maxDeviceNumberPerAccount })(
                                                                            <InputNumber style={{ width: "100%" }} min={this.state.maxDeviceNumberPerAccountMin} max={this.state.maxDeviceNumberPerAccountMax} />
                                                                        )}
                                                                    </Form.Item>
                                                                </div> : ""
                                                        }
                                                        <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                                                            {getFieldDecorator('level5Description', { initialValue: this.state.level5Description, rules: rules.description })(
                                                                <TextArea />
                                                            )}
                                                        </Form.Item>

                                                    </div> : ""
                                            }

                                        </div> : ""
                                }
                            </Panel>
                        </Collapse>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" onClick={this.createPrintFunction} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                    Apply
                                </Button>
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}
const GuestGlobalConfiguration = Form.create()(GuestGlobalConfigurationRegister);
export default GuestGlobalConfiguration;