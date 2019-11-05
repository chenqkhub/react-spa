import React, { Component } from 'react';
import { Form, Input, Select, Row, Col, Button } from 'antd';
import _ from "lodash"
import history from '../../history/History'
import hasErrors from '../../components/form-component/FormChecked'
import formItemLayout from '../../components/form-component/FormItemLayout'
import layout_welcome_1 from '../../assets/images/portal-img/layout1/layout_welcome.png'
import layout_welcome_2 from '../../assets/images/portal-img/layout2/layout_welcome.png'
import layout_welcome_3 from '../../assets/images/portal-img/layout3/layout_welcome.png'
import layout_welcome_4 from '../../assets/images/portal-img/layout4/layout_welcome.png'
import layout_welcome_5 from '../../assets/images/portal-img/layout5/layout_welcome.png'
import layout_welcome_6 from '../../assets/images/portal-img/layout6/layout_welcome.png'
import success_layout_1 from '../../assets/images/portal-img/layout1/layout_success.png'
import success_layout_2 from '../../assets/images/portal-img/layout2/layout_success.png'
import success_layout_3 from '../../assets/images/portal-img/layout3/layout_success.png'
import success_layout_4 from '../../assets/images/portal-img/layout4/layout_success.png'
import success_layout_5 from '../../assets/images/portal-img/layout5/layout_success.png'
import success_layout_6 from '../../assets/images/portal-img/layout6/layout_success.png'
const { Option } = Select;
const { TextArea } = Input;
class AddPortalPageRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            if(this.state.templateName === "portalLayout1"){
                this.state.success_layout = success_layout_1
                this.state.welcome_layout = layout_welcome_1
            }else if(this.state.templateName === "portalLayout2"){
                this.state.success_layout = success_layout_2
                this.state.welcome_layout = layout_welcome_2
            }else if(this.state.templateName === "portalLayout3"){
                this.state.success_layout = success_layout_3
                this.state.welcome_layout = layout_welcome_3
            }else if(this.state.templateName === "portalLayout4"){
                this.state.success_layout = success_layout_4
                this.state.welcome_layout = layout_welcome_4
            }else if(this.state.templateName === "portalLayout5"){
                this.state.success_layout = success_layout_5
                this.state.welcome_layout = layout_welcome_5
            }else if(this.state.templateName === "portalLayout6"){
                this.state.success_layout = success_layout_6
                this.state.welcome_layout = layout_welcome_6
            }
            this.state.mode = "edit"
        } else {
            this.state = {
                portalName: "",
                templateName: "portalLayout1",
                descrition: "",
                success_layout: success_layout_1,
                welcome_layout: layout_welcome_1,
                mode: "create"
            }
        }
        this.state.templateArray = ["portalLayout1", "portalLayout2", "portalLayout3", "portalLayout4", "portalLayout5", "portalLayout6", "WIFI4EUPortalLayout"]
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
        history.push("/portal-management/portal-page")
    }
    returnList = () => {
        history.push("/portal-management/portal-page")
    }
    //
    handleChange = (value) => {
        console.log(value)
        switch (value) {
            case "portalLayout1":
                this.setState({ success_layout: success_layout_1, welcome_layout: layout_welcome_1 })
                break;
            case "portalLayout2":
                this.setState({ success_layout: success_layout_2, welcome_layout: layout_welcome_2 })
                break;
            case "portalLayout3":
                this.setState({ success_layout: success_layout_3, welcome_layout: layout_welcome_3 })
                break;
            case "portalLayout4":
                this.setState({ success_layout: success_layout_4, welcome_layout: layout_welcome_4 })
                break;
            case "portalLayout5":
                this.setState({ success_layout: success_layout_5, welcome_layout: layout_welcome_5 })
                break;
            case "portalLayout6":
                this.setState({ success_layout: success_layout_6, welcome_layout: layout_welcome_6 })
                break;
            default:
                break;
        }
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const portalNameError = isFieldTouched('portalName') && getFieldError('portalName');
        const templateNameError = isFieldTouched('templateName') && getFieldError('templateName');

        //rules
        const rules = {
            portalName: [
                {
                    required: true,
                    message: 'Please input your Nas Name!',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 6 && _.size(value) <= 64 ? callback() : callback("The field must be in 6-64 characters.")
                    }
                }
            ],
            templateName: [
                {
                    required: true,
                    message: 'Please select Template Name',
                },
            ]
        }
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Captive Portal Page" : "Edit Captive Portal Page"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Portal Name" validateStatus={portalNameError ? 'error' : ''} help={portalNameError || ''}>
                            {getFieldDecorator('portalName', { initialValue: this.state.portalName, rules: rules.portalName })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Tempalte Name" hasFeedback validateStatus={templateNameError ? 'error' : ''} help={templateNameError || ''}>
                            {getFieldDecorator('templateName', { initialValue: this.state.templateName, rules: rules.templateName }
                            )(<Select
                                placeholder="Please select"
                                onChange={this.handleChange}
                                style={{ width: '100%' }}
                            >
                                {
                                    this.state.templateArray.map((item) => {
                                        return <Option key={item}>{item}</Option>
                                    })
                                }
                            </Select>)}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description', { initialValue: this.state.descrition, rules: [] })(<TextArea />)}
                        </Form.Item>
                        <hr />
                        <Row>
                            <Col span={12} style={{ textAlign: "center" }}>
                                Welcome Layout
                            </Col>
                            <Col span={12} style={{ textAlign: "center" }}>
                                Success Layout
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} >
                                <img style={{ width: "100%" }} src={this.state.welcome_layout} />
                            </Col>
                            <Col span={12} >
                                <img style={{ width: "100%" }} src={this.state.success_layout} />
                            </Col>
                        </Row>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createCaptivePortal} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editCaptivePortal} htmlType="submit" disabled={hasErrors(getFieldsError())}>
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

const AddEditPortalPage = Form.create()(AddPortalPageRegister);
export default AddEditPortalPage;