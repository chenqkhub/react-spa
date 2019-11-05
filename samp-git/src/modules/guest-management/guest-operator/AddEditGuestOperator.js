import React, { Component } from 'react';
import { Form, Input, Button, Tooltip, Icon } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
const { TextArea } = Input

class AddGuestOperatorRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.repeatPassword = this.state.password
            this.state.mode = "edit"
        } else {
            this.state = {
                username: "",
                fullName: "",
                password: "",
                repeatPassword: "",
                telephone: "",
                email: "",
                location: "",
                description: "",
                mode: "create"
            }
        }

    }

    componentDidMount() {
        this.props.form.validateFields();
        // if(this.props.location.state.model == "edit"){
        //     this.props.form.setFieldsValue(
        //         this.props.location.state.item
        //     );
        // }
    }
    createNasClient = () => {
        console.log("创建----");
        history.push("/guest-management/guest-operator")
    }
    returnList = () => {
        console.log("取消----");
        history.push("/guest-management/guest-operator")
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const repeatPasswordError = isFieldTouched('repeatPassword') && getFieldError('repeatPassword');
        const fullNameError = isFieldTouched('fullName') && getFieldError('fullName');
        const telephoneError = isFieldTouched('telephone') && getFieldError('telephone');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const locationError = isFieldTouched('location') && getFieldError('location');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const rules = {
            username: [
                {
                    required: true,
                    message: 'The field is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 1 && _.size(value) <= 32 ? callback() : callback("This field must be in 1-32 characters !")
                    }
                },
            ],
            fullName: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 32 ? callback() : callback("This field must be in 0-32 characters !")
                    }
                },
            ],
            password: [
                {
                    required: true,
                    message: 'The field is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        if (value.indexOf("ENC") == 0) {
                            callback()
                        } else {
                            _.size(value) <= 16 && _.size(value) >= 6 ? callback() : callback("This field must be in 6-128 characters.")
                        }
                    }
                },
                {
                    validator: (rule, value, callback) => {
                        const { form } = this.props;
                        if (value) {
                            form.validateFields(['repeatPassword'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            repeatPassword: [
                {
                    validator: (rule, value, callback) => {
                        const { form } = this.props;
                        if (value !== form.getFieldValue('password')) {
                            callback('Two passwords that you enter is inconsistent!');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            telephone: [

            ],
            email: [
                {
                    required: true,
                    message: "The field is required."
                },
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
            ],
            description: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 255 ? callback() : callback("This field must be in 0-255 characters.")
                    }
                }
            ],
            location: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 127 ? callback() : callback("This field must be in 0-127 characters.")
                    }
                }
            ]
        }
        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Guest Operator" : "Edit Guest Operator"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Username" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                            {getFieldDecorator('username', { initialValue: this.state.username, rules: rules.username })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Full Name" validateStatus={fullNameError ? 'error' : ''} help={fullNameError || ''}>
                            {getFieldDecorator('fullName', { initialValue: this.state.fullName, rules: rules.fullName })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                            {getFieldDecorator('password', { initialValue: this.state.password, rules: rules.password })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Repeat Password" validateStatus={repeatPasswordError ? 'error' : ''} help={repeatPasswordError || ''}>
                            {getFieldDecorator('repeatPassword', { initialValue: this.state.repeatPassword, rules: rules.repeatPassword })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label={
                            <span>
                                Telephone&nbsp;
                                <Tooltip title="Complete the telephone can help to recover the password when you forgot it.">
                                    <Icon type="info-circle" />
                                </Tooltip>
                            </span>
                        } validateStatus={telephoneError ? 'error' : ''} help={telephoneError || ''}>
                            {getFieldDecorator('telephone', { initialValue: this.state.telephone, rules: rules.telephone })(<Input />)}
                        </Form.Item>
                        <Form.Item label={
                            <span>
                                Email&nbsp;
                                <Tooltip title="The email can help you retrieve the password.">
                                    <Icon type="info-circle" />
                                </Tooltip>
                            </span>
                        } validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                            {getFieldDecorator('email', { initialValue: this.state.email, rules: rules.email })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Location" validateStatus={locationError ? 'error' : ''} help={locationError || ''}>
                            {getFieldDecorator('location', { initialValue: this.state.location, rules: rules.location })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Description" hasFeedback validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                            {getFieldDecorator('description', { initialValue: this.state.description, rules: rules.description })(
                                <TextArea style={{ width: "100%" }} />
                            )}
                        </Form.Item>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createAccessPolicyt} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editNasClient} htmlType="submit" disabled={hasErrors(getFieldsError())}>
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

const AddEditGuestOperator = Form.create()(AddGuestOperatorRegister);
export default AddEditGuestOperator;