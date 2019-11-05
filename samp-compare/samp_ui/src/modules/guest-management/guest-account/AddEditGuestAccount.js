import React, { Component } from 'react';
import { Form, Input, Select, InputNumber, Switch, DatePicker, Button } from 'antd';
import moment from 'moment'
import axios from 'axios'
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import formatDate from '../../../components/utils/DateFormat'
const { TextArea } = Input

class AddGuestAccountRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.accountValidityPeriod = formatDate(parseInt(this.state.accountValidityPeriod))
            this.state.mode = "edit"
        } else {
            this.state = {
                username: "",
                password: "",
                dataQuota: true,
                dataQuotaAmount: 1,
                accountValidityPeriod: "2019-09-26 18:00:16",
                serviceLevel: "",
                fullName: "",
                company: "",
                telephone: "",
                email: "",
                onlineDevice: "",
                creator: "",
                description: "",
                rememberedTime: "",
                accountName: "",
                status: 1,
                startValue: null,
                endValue: null,
                endOpen: false,
                mode: "create"
            }
        }
        this.state.accountType = this.props.location.accountType
        console.log(this.state)

    }

    componentDidMount() {
        this.props.form.validateFields();
        // if(this.props.location.state.model == "edit"){
        //     this.props.form.setFieldsValue(
        //         this.props.location.state.item
        //     );
        // }


        //获取数据，判断global configuration中的时间设置，
        // if (global.periodUnit === "Day(s)") {
        //     //设置开始时间和结束时间
        // } else if (global.periodUnit === "Hour(s)") {
        //     //如果设置的时间超过24小时，应该将该时间转换为天数以及剩余的小时数，然后分别限制
        // }else if (global.periodUnit === "Minute(s)") {
        //     //如果设置的时间超过60分钟，应该将时间转换为小时
        // }
    }
    createGuestAccount = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/guest-management/guest-account")
            }
        });
    }
    returnList = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/guest-management/guest-account")
            }
        });
    }
    createPrintFunction = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/guest-management/guest-account")
            }
        });
    }
    editGuestAccount = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/guest-management/guest-account")
            }
        });
    }

    //校验日期是否可用
    disabledDate(time) {
        if (!time) {
            return false
        } else {
            return time < moment().subtract(0, "days") || time > moment().add(1, 'd')
        }
    }
    //校验日期是否可用
    disabledDateTime(time) {
        // if (!time) {
        //     return false
        // } else {
        //     return time < moment().subtract(7, "hours") || time > moment().add(7, 'h')
        // }
        let current = new Date().getHours()
        return {
            disabledHours: () => [0, 24].splice(4, 20),
            disabledMinutes: () => [30, 60],
            disabledSeconds: () => [55, 56],
        };
    }
    //改变data quota
    changeDataQuota = (value) => {
        this.setState({
            dataQuota: value
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const dataQuotaError = isFieldTouched('dataQuota') && getFieldError('dataQuota');
        const dataQuotaAmountError = isFieldTouched('dataQuotaAmount') && getFieldError('dataQuotaAmount');
        const accountValidityPeriodError = isFieldTouched('accountValidityPeriod') && getFieldError('accountValidityPeriod');
        const serviceLevelError = isFieldTouched('serviceLevel') && getFieldError('serviceLevel');
        const fullNameError = isFieldTouched('fullName') && getFieldError('fullName');
        const companyError = isFieldTouched('company') && getFieldError('company');
        const telephoneError = isFieldTouched('telephone') && getFieldError('telephone');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const children = [];
        //rules
        const rules = {
            username: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 6 && _.size(value) <= 64 ? callback() : callback("The field must be in 6-64 characters.")
                    }
                },
            ],
            dataQuota: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            dataQuotaAmount: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            accountValidityPeriod: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],

        }

        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {this.state.mode === "create" ? "Create Guest Account" : "Edit Guest Account"}
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        {
                            this.state.accountType === "ACCOUNT_NAME" ?
                                <div>
                                    <Form.Item label="Account Name" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                                        {getFieldDecorator('username', { initialValue: this.state.username, rules: rules.username })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                                        {getFieldDecorator('password', { initialValue: this.state.password, rules: rules.password })(<Input type="password" />)}
                                    </Form.Item>
                                    <Form.Item label="Repeat Password">
                                        {getFieldDecorator('repeatPassword', { initialValue: this.state.password, rules: rules.repeatPassword })(<Input type="password" />)}
                                    </Form.Item>
                                </div> :
                                <div>
                                    <Form.Item label="Access Code" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                                        {getFieldDecorator('username', { initialValue: this.state.username, rules: rules.username })(<Input />)}
                                    </Form.Item>
                                </div>
                        }


                        <Form.Item label="Service Level">
                            {getFieldDecorator('serviceLevel', {
                                rules: [],
                            })(<Select
                                placeholder="Please select"
                                onChange={this.handleChange}
                            >
                                {children}
                            </Select>)}
                        </Form.Item>
                        {
                            this.state.accountType === "ACCOUNT_NAME" ?
                                <div>
                                    <Form.Item label="Data Quota" hasFeedback validateStatus={dataQuotaError ? 'error' : ''} help={dataQuotaError || ''}>
                                        {getFieldDecorator('dataQuota', { initialValue: this.state.dataQuota, rules: rules.dataQuota  })(
                                            <Switch style={{ float: "left" }} checkedChildren="Enabled" unCheckedChildren="Disabled" defaultChecked onChange={this.changeDataQuota} />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Data Quota Amount" hasFeedback validateStatus={dataQuotaAmountError ? 'error' : ''} help={dataQuotaAmountError || ''}>
                                        {getFieldDecorator('dataQuotaAmount', { initialValue: this.state.dataQuotaAmount, rules: rules.dataQuotaAmount })(
                                            <InputNumber style={{ width: "100%" }} min={1} max={2147483} disabled={!this.state.dataQuota} />
                                        )}
                                    </Form.Item>
                                </div> : ""
                        }

                        <Form.Item label="Account Validity Period" hasFeedback hasFeedback validateStatus={accountValidityPeriodError ? 'error' : ''} help={accountValidityPeriodError || ''}>
                            {getFieldDecorator('accountValidityPeriod', { initialValue: moment(this.state.accountValidityPeriod), rules: rules.accountValidityPeriod })(
                                <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD HH:mm:ss" showTime disabledDate={this.disabledDate} disabledDateTime />
                            )}
                        </Form.Item>
                        {
                            this.state.accountType === "ACCOUNT_NAME" ?
                                <div>
                                    <Form.Item label="Full Name">
                                        {getFieldDecorator('fullName', { initialValue: this.state.fullName, rules: [] })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="Company">
                                        {getFieldDecorator('company', { initialValue: this.state.company, rules: [] })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="Telephone">
                                        {getFieldDecorator('telephone', { initialValue: this.state.telephone, rules: [] })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="Email">
                                        {getFieldDecorator('email', { initialValue: this.state.email, rules: rules.email })(<Input />)}
                                    </Form.Item>
                                </div> : ""
                        }
                        <Form.Item label="Description" hasFeedback >
                            {getFieldDecorator('description', { initialValue: this.state.description, rules: [] })(
                                <TextArea style={{ width: "100%" }} />
                            )}
                        </Form.Item>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                {
                                    this.state.mode === "create" ?
                                        <span>
                                            <Button type="primary" onClick={this.createPrintFunction} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                                Create&Print
                                            </Button>
                                            <Button type="primary" style={{ marginLeft: "10px" }} onClick={this.createGuestAccount} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                                Create
                                            </Button>
                                        </span>
                                        : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editGuestAccount} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Save
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}

const AddGuestAccount = Form.create()(AddGuestAccountRegister);
export default AddGuestAccount;