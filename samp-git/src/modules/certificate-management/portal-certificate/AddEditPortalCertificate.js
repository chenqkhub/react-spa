import React, { Component } from 'react';
import { Form, Input, Icon, Button, Upload, Row, Col, message, Select } from 'antd';
import axios from 'axios'
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'

class AddPortalCertificateRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.mode = "edit"
        } else {
            this.state = {
                name: "",
                serverFileName: "",
                caFileName: "",
                keyFileName: "",
                keyPasswd: "",
                repeatKeyPasswd: "",
                fileList: [],
                serverFileList: [],
                keyFileList: [],
                uploading: false,
                caFlag: false,
                serverFlag: false,
                keyFlag: false,
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
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/certificate-management/portal-certificate")
            }
        });
    }
    returnList = () => {
        console.log("取消----");
        history.push("/certificate-management/portal-certificate")
    }
    //处理上传操作
    uploadCAFile = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });
        console.log(fileList)
        // You can use any AJAX library you like
        axios({
            url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                //设置caFileName
                this.setState({
                    fileList: [],
                    uploading: false,
                    caFlag: true
                });
                message.success('upload successfully.');
            },
            error: () => {
                this.setState({
                    uploading: false,
                    caFlag: false
                });
                message.error('upload failed.');
            },
        });
    };
    //处理上传操作
    uploadServerFile = () => {
        const { serverFileList } = this.state;
        const formData = new FormData();
        serverFileList.forEach(file => {
            formData.append('files[]', file);
        });
        console.log(serverFileList)
        // You can use any AJAX library you like
        axios({
            url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                //设置caFileName
                this.setState({
                    serverFileList: [],
                    uploading: false,
                    serverFlag: true
                });
                message.success('upload successfully.');
            },
            error: () => {
                this.setState({
                    uploading: false,
                    serverFlag: false
                });
                message.error('upload failed.');
            },
        });
    };
    //处理上传操作
    uploadKeyFile = () => {
        const { keyFileList } = this.state;
        const formData = new FormData();
        keyFileList.forEach(file => {
            formData.append('files[]', file);
        });
        console.log(keyFileList)
        // You can use any AJAX library you like
        axios({
            url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                //设置caFileName
                this.setState({
                    keyFileList: [],
                    uploading: false,
                    keyFlag: true
                });
                message.success('upload successfully.');
            },
            error: () => {
                this.setState({
                    uploading: false,
                    keyFlag: false
                });
                message.error('upload failed.');
            },
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const nameError = isFieldTouched('name') && getFieldError('name');
        const keyPasswordError = isFieldTouched('keyPassword') && getFieldError('keyPassword');
        const repeatPasswordError = isFieldTouched('repeatPassword') && getFieldError('repeatPassword');
        const relateFQDNError = isFieldTouched('relateFQDN') && getFieldError('relateFQDN');
        //rules
        const rules = {
            name: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 6 && _.size(value) <= 64 ? callback() : callback("The field must be in 6-64 characters !")
                    }
                },
            ],
            keyPasswd: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 6 && _.size(value) <= 64 ? callback() : callback("The field must be in 6-64 characters !")
                    }
                },
                {
                    validator: (rule, value, callback) => {
                        if (value && this.props.form.getFieldValue('repeatKeyPasswd')) {
                            this.props.form.validateFields(['repeatKeyPasswd'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            repeatKeyPasswd: [
                {
                    validator: (rule, value, callback) => {
                        if (value && value !== this.props.form.getFieldValue('keyPasswd')) {
                            callback('Two passwords that you enter is inconsistent!');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            relateFQDN: [
                {
                    required: true,
                    message: "The filed is required !"
                }
            ]
        }
        const { uploading, fileList, serverFileList, keyFileList } = this.state;
        const props = {
            multiple: true,
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,
        };
        const server_props = {
            multiple: true,
            onRemove: file => {
                this.setState(state => {
                    const index = state.serverFileList.indexOf(file);
                    const newFileList = state.serverFileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        serverFileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    serverFileList: [...state.serverFileList, file],
                }));
                return false;
            },
            serverFileList,
        };
        const key_props = {
            multiple: true,
            onRemove: file => {
                this.setState(state => {
                    const index = state.keyFileList.indexOf(file);
                    const newFileList = state.keyFileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        keyFileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    keyFileList: [...state.keyFileList, file],
                }));
                return false;
            },
            keyFileList,
        };
        return (
            <div>
                <div className="samp_panle_form">
                    <div className="samp_panel_form_header">
                        <span style={{ paddingLeft: "20px" }}>
                            {this.state.mode === "create" ? "Create Captive Portal Certificates" : "Edit Captive Portal Certificates"}
                        </span>
                    </div>
                    <div className="samp_panel_form_body">
                        <Row>
                            <Col span={8} style={{ textAlign: "right" }}>*Upload CA File:</Col>
                            <Col span={12} style={{ textAlign: "left", marginLeft: "10px" }}>
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Select File
                                </Button>
                                </Upload>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={8} style={{ textAlign: "right" }}></Col>
                            <Col span={12} style={{ textAlign: "left" }}>
                                *The Certificate file only supports .pem .cer .der .crt.
                        </Col>
                        </Row>
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" style={{ marginRight: "10px" }} onClick={this.uploadCAFile} htmlType="submit" disabled={fileList.length === 0}>
                                    Import
                        </Button>
                            </div>
                        </div>
                        <br />
                        <Row>
                            <Col span={8} style={{ textAlign: "right" }}>*Upload Server File:</Col>
                            <Col span={12} style={{ textAlign: "left", marginLeft: "10px" }}>
                                <Upload {...server_props}>
                                    <Button>
                                        <Icon type="upload" /> Select File
                                </Button>
                                </Upload>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={8} style={{ textAlign: "right" }}></Col>
                            <Col span={12} style={{ textAlign: "left" }}>
                                *The Certificate file only supports .pem .cer .der .crt.
                    </Col>
                        </Row>
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" style={{ marginRight: "10px" }} onClick={this.uploadServerFile} htmlType="submit" disabled={serverFileList.length === 0}>
                                    Import
                        </Button>
                            </div>
                        </div>
                        <br />
                        <Row>
                            <Col span={8} style={{ textAlign: "right" }}>*Upload Server Key File:</Col>
                            <Col span={12} style={{ textAlign: "left", marginLeft: "10px" }}>
                                <Upload {...key_props}>
                                    <Button>
                                        <Icon type="upload" /> Select File
                                </Button>
                                </Upload>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col span={8} style={{ textAlign: "right" }}></Col>
                            <Col span={12} style={{ textAlign: "left" }}>
                                *The Certificate file only supports .pem .cer .der .crt.
                    </Col>
                        </Row>
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" style={{ marginRight: "10px" }} onClick={this.uploadKeyFile} htmlType="submit" disabled={keyFileList.length === 0}>
                                    Import
                        </Button>
                            </div>
                        </div>
                        <br />
                        <Form {...formItemLayout} labelAlign="right">
                            <Form.Item label="Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                                {getFieldDecorator('name', { initialValue: this.state.name, rules: rules.name })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Private Key Password" hasFeedback validateStatus={keyPasswordError ? 'error' : ''} help={keyPasswordError || ''}>
                                {getFieldDecorator('keyPasswd', { initialValue: this.state.keyPasswd, rules: rules.keyPasswd })(<Input />)}
                            </Form.Item>
                            <Form.Item label="Repeat Private Key Password" validateStatus={repeatPasswordError ? 'error' : ''} help={repeatPasswordError || ''}>
                                {getFieldDecorator('repeatPassword', { initialValue: this.state.repeatKeyPasswd, rules: rules.repeatKeyPasswd })(
                                    <Input />
                                )}
                            </Form.Item>
                            <Form.Item label="Selected FQDN" validateStatus={relateFQDNError ? 'error' : ''} help={relateFQDNError || ''}>
                                {getFieldDecorator('relateFQDN', { initialValue: this.state.relateFQDN, rules: rules.relateFQDN })(
                                    <Select placeholder="Please Select"></Select>
                                )}
                            </Form.Item>
                            <div className="samp_panel_from_footer">
                                <div className="samp_panel_from_footer_button">
                                    <Button type="primary" onClick={this.createRadiusCertificate} htmlType="submit" disabled={hasErrors(getFieldsError()) || !this.state.caFlag || !this.state.serverFlag || !this.state.keyFlag}>
                                        Create
                                    </Button>
                                    <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const AddPortalCertificate = Form.create()(AddPortalCertificateRegister);
export default AddPortalCertificate;