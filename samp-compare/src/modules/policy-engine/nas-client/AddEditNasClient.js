import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import _ from "lodash"
import intl from 'react-intl-universal';
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import compareIp from '../../../components/utils/IpChecked'
import ipRules from '../../../components/utils/IpRules'
const { Option } = Select;
const { TextArea } = Input;

class AddEditNasClientRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.mode = "edit"
        } else {
            this.state = {
                nasName: "",
                nasStartIp: "",
                nasEndIp: "",
                password: "",
                descrition: "",
                dm_attributes: ["User-Name", "Calling-Station-Id"],
                coa_attribute: ["User-Name", "Calling-Station-Id"],
                mode: "create"
            }
        }
    }
    //render函数执行之后执行，一般用于获取数据
    componentDidMount() {
        this.props.form.validateFields();
        // if(this.props.location.state.model == "edit"){
        //     this.props.form.setFieldsValue(
        //         this.props.location.state.item
        //     );
        // }
    }
    //创建
    createNasClient = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/policy-engine/nas-client")
            }
        });
    }
    //编辑
    editNasClient = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/policy-engine/nas-client")
            }
        });
    }
    //取消
    returnList = () => {
        history.push("/policy-engine/nas-client")
    }
    //
    handleChange = () => {

    }
    //必须每一个语句中最后都要有callback语句，不然会一直转圈
    checkIpAddress = (rule, value, callback) => {

        if (!value) {
            callback()
        } else if (!ipRules.test(value)) {
            callback(intl.get("samp.policyEngine.nasClients.msg.ipAddress"))
        } else {
            callback()
        }
    }
    //校验start ip和end ip的大小关系
    largeThanStartIp = (rule, value, callback) => {
        console.log(rule)
        const { form } = this.props;
        let startNASIp = form.getFieldValue('startNASIp');
        if (ipRules.test(startNASIp) && ipRules.test(value)) {
            if (compareIp(startNASIp, value) < 0) {
                callback(intl.get("samp.policyEngine.nasClients.msg.largeIpAddress"));
            } else {
                callback();
            }
        } else {
            callback()
        }
    }
    //校验start ip和end ip的大小关系
    smallThanEndIp = (rule, value, callback) => {
        const { form } = this.props;
        if (value) {
            form.validateFields(['endNASIp'], { force: true });
        }
        callback();
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const nasNameError = isFieldTouched('nasName') && getFieldError('nasName');
        const startNASIpError = isFieldTouched('startNASIp') && getFieldError('startNASIp');
        const endNASIpError = isFieldTouched('endNASIp') && getFieldError('endNASIp');
        const shareSecurityError = isFieldTouched('shareSecurity') && getFieldError('shareSecurity');
        const dm_attributesError = isFieldTouched('dm_attributes') && getFieldError('dm_attributes');
        const coa_attributeError = isFieldTouched('coa_attribute') && getFieldError('coa_attribute');
        const descriptionError = isFieldTouched('description') && getFieldError('description');

        //rules
        const rules = {
            nasName: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.nasClients.msg.required"),
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 6 && _.size(value) <= 64 ? callback() : callback(intl.get("samp.policyEngine.nasClients.msg.nasNameLength"))
                    }
                },
            ],
            startNASIp: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.nasClients.msg.required"),
                },
                {
                    validator: this.checkIpAddress
                },
                {
                    validator: this.smallThanEndIp
                }
            ],
            endNASIp: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.nasClients.msg.required"),
                },
                {
                    validator: this.checkIpAddress
                },
                {
                    validator: this.largeThanStartIp
                }
            ],

            dm_attributes: [
                {
                    required: true,
                    type: 'array',
                    message: intl.get("samp.policyEngine.nasClients.msg.required"),
                },
            ],

            coa_attribute: [
                {
                    required: true,
                    type: 'array',
                    message: intl.get("samp.policyEngine.nasClients.msg.required"),
                },
            ],

            sharedPassword: [
                {
                    required: true,
                    whitespace: true,
                    message: intl.get("samp.policyEngine.nasClients.msg.required"),
                },
                {
                    validator: (rule, value, callback) => {
                        value.length >= 6 && value.length <= 128 ? callback() : callback(intl.get("samp.policyEngine.nasClients.msg.passwordLength"))
                    }
                },
            ],
            description: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 255 ? callback() : callback(intl.get("samp.policyEngine.nasClients.msg.descriptionLength"))
                    }
                }
            ]
        }
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? intl.get("samp.policyEngine.nasClients.create") : intl.get("samp.policyEngine.nasClients.edit")
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout}>
                        <Form.Item label={intl.get("samp.policyEngine.nasClients.item.nasName")} validateStatus={nasNameError ? 'error' : ''} help={nasNameError || ''}>
                            {getFieldDecorator('nasName', { initialValue: this.state.nasName, rules: rules.nasName })(<Input />)}
                        </Form.Item>
                        <Form.Item label={intl.get("samp.policyEngine.nasClients.item.startNASIp")} hasFeedback validateStatus={startNASIpError ? 'error' : ''} help={startNASIpError || ''} >
                            {getFieldDecorator('startNASIp', { initialValue: this.state.startNASIp, rules: rules.startNASIp })(<Input />)}
                        </Form.Item>
                        <Form.Item label={intl.get("samp.policyEngine.nasClients.item.endNASIp")} hasFeedback validateStatus={endNASIpError ? 'error' : ''} help={endNASIpError || ''} >
                            {getFieldDecorator('endNASIp', { initialValue: this.state.endNASIp, rules: rules.endNASIp })(<Input />)}
                        </Form.Item>
                        <Form.Item label={intl.get("samp.policyEngine.nasClients.item.shareSecurity")} validateStatus={shareSecurityError ? 'error' : ''} help={shareSecurityError || ''}>
                            {getFieldDecorator('shareSecurity', { initialValue: this.state.shareSecurity, rules: rules.sharedPassword })(<Input type="password" />)}
                        </Form.Item>
                        <Form.Item label={intl.get("samp.policyEngine.nasClients.item.description")} validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                            {getFieldDecorator('descrition', { initialValue: this.state.description, rules: rules.description })(<TextArea />)}
                        </Form.Item>
                        <Form.Item label={intl.get("samp.policyEngine.nasClients.item.dm_attributes")} hasFeedback validateStatus={dm_attributesError ? 'error' : ''} help={dm_attributesError || ''}>
                            {getFieldDecorator('dm_attributes', { initialValue: this.state.dm_attributes, rules: rules.dm_attributes })(<Select
                                mode="multiple"
                                placeholder="Please select"
                                initialValue={["User-Name", "Calling-Station-Id"]}
                                onChange={this.handleChange}
                                style={{ width: '100%' }}
                            >
                                {
                                    this.state.dm_attributes.map((item) => {
                                        return <Option key={item}>{item}</Option>
                                    })
                                }
                            </Select>)}
                        </Form.Item>
                        <Form.Item label={intl.get("samp.policyEngine.nasClients.item.coa_attributes")} hasFeedback validateStatus={coa_attributeError ? 'error' : ''} help={coa_attributeError || ''}>
                            {getFieldDecorator('coa_attribute', { initialValue: this.state.coa_attribute, rules: rules.coa_attribute })(<Select
                                mode="multiple"
                                placeholder="Please select"
                                initialValue={["User-Name", "Calling-Station-Id"]}
                                onChange={this.handleChange}
                                style={{ width: '100%' }}
                            >
                                {
                                    this.state.coa_attribute.map((item) => {
                                        return <Option key={item}>{item}</Option>
                                    })
                                }
                            </Select>)}
                        </Form.Item>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createNasClient} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            {intl.get("samp.button.create")}
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editNasClient} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            {intl.get("samp.button.apply")}
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">{intl.get("samp.button.cancel")}</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}

const AddEditNasClient = Form.create()(AddEditNasClientRegister);
export default AddEditNasClient;