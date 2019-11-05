import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Input, Tooltip, Icon, Select, Radio, Cascader, Button, List, InputNumber, Switch, DatePicker } from 'antd';
import moment from 'moment'
import axios from 'axios'
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import formatDate from '../../../components/utils/DateFormat'
const { TextArea } = Input

class BatchCreationAccountRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountPrefix: "Guest",
            clientNumber: 8,
            serviceLevel: "",
            dataQuota: true,
            dataQuotaAmount: 1,
            accountValidityPeriod: "2019-09-26 18:00:16",
            description: ""
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
        history.push("/guest-management/guest-account")
    }
    //改变data quota
    changeDataQuota = (value) => {
        this.setState({
            dataQuota: value
        })
    }
    //校验日期是否可用
    disabledDate(time) {
        if (!time) {
            return false
        } else {
            return time < moment().subtract(0, "days") || time > moment().add(1, 'd')
        }
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const accountPrefixError = isFieldTouched('accountPrefix') && getFieldError('accountPrefix');
        const clientNumberError = isFieldTouched('clientNumber') && getFieldError('clientNumber');
        const dataQuotaError = isFieldTouched('dataQuota') && getFieldError('dataQuota');
        const dataQuotaAmountError = isFieldTouched('dataQuotaAmount') && getFieldError('dataQuotaAmount');
        const accountValidityPeriodError = isFieldTouched('accountValidityPeriod') && getFieldError('accountValidityPeriod');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        //rules
        const rules = {
            accountPrefix: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 1 && _.size(value) <= 16 ? callback() : callback("The field must be in 1-16 characters.")
                    }
                },
            ],
            clientNumber: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
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
            description: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 255 ? callback() : callback("The field must be in 0-255 characters.")
                    }
                }
            ],

        }
        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {this.state.accountType === "ACCOUNT_NAME" ? "Batch Account Creation By Account Name" : "Batch Account Creation By Access Code"}
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        {
                            this.state.accountType === "ACCOUNT_NAME" ?
                                <Form.Item label="Guest Account Name Prefix" validateStatus={accountPrefixError ? 'error' : ''} help={accountPrefixError || ''}>
                                    {getFieldDecorator('accountPrefix', { initialValue: this.state.accountPrefix, rules: rules.accountPrefix })(<Input />)}
                                </Form.Item> : ""
                        }

                        <Form.Item label="Number of Client to Create" hasFeedback validateStatus={clientNumberError ? 'error' : ''} help={clientNumberError || ''}>
                            {getFieldDecorator('clientNumber', { initialValue: this.state.clientNumber, rules: rules.clientNumber })(
                                <InputNumber style={{ width: "100%" }} min={1} max={99} />
                            )}
                        </Form.Item>
                        <Form.Item label="Service Level">
                            {getFieldDecorator('serviceLevel', { initialValue: this.state.serviceLevel, rules: [] })(<Select
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
                                        {getFieldDecorator('dataQuota', { initialValue: this.state.dataQuota, rules: rules.dataQuota })(
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
                        <Form.Item label="Account Validity Period" hasFeedback validateStatus={accountValidityPeriodError ? 'error' : ''} help={accountValidityPeriodError || ''}>
                            {getFieldDecorator('accountValidityPeriod', { initialValue: moment(this.state.accountValidityPeriod), rules: rules.accountValidityPeriod })(
                                <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD HH:mm:ss" showTime disabledDate={this.disabledDate} />
                            )}
                        </Form.Item>
                        <Form.Item label="Description" hasFeedback validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                            {getFieldDecorator('description', { initialValue: this.state.description, rules: rules.description })(
                                <TextArea style={{ width: "100%" }} />
                            )}
                        </Form.Item>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" style={{ marginLeft: "10px" }} onClick={this.createGuestAccount} htmlType="submit" disabled={hasErrors(getFieldsError())}>Create</Button>
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}

const BatchCreationAccount = Form.create()(BatchCreationAccountRegister);
export default BatchCreationAccount;