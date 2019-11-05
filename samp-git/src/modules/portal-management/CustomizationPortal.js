import React, { Component } from 'react';
import { Form, Row, Col, Collapse, Input, Button, Icon, Upload, Slider } from 'antd';
import _ from "lodash"
import history from '../../history/History'
import hasErrors from '../../components/form-component/FormChecked'
const { Panel } = Collapse;
const formItemLayout = {
    labelCol: {
        xs: { span: 8 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 },
    },
};
const marks = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10"
};
class CustomizationPortalRegister extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state[0]
        this.state.fileList = []
    }
    //处理上传操作
    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });
        console.log(fileList)
        this.setState({
            uploading: true,
        });

        // You can use any AJAX library you like
        // axios({
        //   url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        //   method: 'post',
        //   processData: false,
        //   data: formData,
        //   success: () => {
        //     this.setState({
        //       fileList: [],
        //       uploading: false,
        //     });
        //     message.success('upload successfully.');
        //   },
        //   error: () => {
        //     this.setState({
        //       uploading: false,
        //     });
        //     message.error('upload failed.');
        //   },
        // });
        this.setState({
            showImport: false
        })
    };
    //背景色设置值
    formatter = (value) => {
        console.log(value);
        return `${value}%`;
    }
    applyCustom = () => {
        history.push("/portal-management/portal-page")
    }
    cancelCustom = () => {
        history.push("/portal-management/portal-page")
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { uploading, fileList } = this.state;
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            listType: 'picture',
            defaultFileList: [...fileList],
        };
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                    User Customization
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout}>
                        <Form.Item label="Portal Name">
                            {getFieldDecorator('portalName', {
                                rules: [],
                            })(
                                <div style={{ textAlign: "left" }}>{this.state.portalName}</div>
                            )}
                        </Form.Item>
                        <Form.Item label="Template Name">
                            {getFieldDecorator('templateName', {
                                rules: [],
                            })(
                                <div style={{ textAlign: "left" }}>{this.state.templateName}</div>
                            )}
                        </Form.Item>
                        <Form.Item label="Description">
                            {getFieldDecorator('description', {
                                rules: [],
                            })(
                                <div style={{ textAlign: "left" }}>{this.state.description}</div>
                            )}
                        </Form.Item>

                        <br />
                        <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                            <Panel header="Welcome Layout" key="1" className="samp_collapse_panel_header">
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="LOGO Panel" key="3" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props} >
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                                </Button>
                                                    </Upload>

                                                </div>
                                            )}
                                        </Form.Item>

                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Form.Item label="Linked URL">
                                            {getFieldDecorator('linkedURL', {
                                                rules: [],
                                            })(
                                                <Input placeholder="http|https://" style={{ width: "100%" }} />
                                            )}
                                        </Form.Item>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Function Panel" key="4" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>

                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={10} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Form.Item label="Opacity Setting">
                                            {getFieldDecorator('opacity', {
                                                rules: [],
                                            })(
                                                <Slider marks={marks} step={1} style={{ width: "100%" }} max={10} min={0} tipFormatter={this.formatter} tooltipVisible={false} />
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Function Color">
                                            {getFieldDecorator('opacity', {
                                                rules: [],
                                            })(
                                                <Input style={{ width: "100%" }} />
                                            )}
                                        </Form.Item>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Advertisement Picture Panel" key="5" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Advertisement Picture Panel" key="6" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Advertisement Broadcast Panel" key="7" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Advertisement Video Panel" key="8" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Video">
                                            {getFieldDecorator('uploadVideo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right"  className="samp_collapse_style">
                            <Panel header="Success Layout" key="2" className="samp_collapse_panel_header">
                                <Collapse accordion expandIconPosition="right"  className="samp_collapse_style">
                                    <Panel header="LOGO Panel" key="3" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>

                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Form.Item label="Linked URL">
                                            {getFieldDecorator('linkedURL', {
                                                rules: [],
                                            })(
                                                <Input placeholder="http|https://" style={{ width: "100%" }} />
                                            )}
                                        </Form.Item>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Function Panel" key="4" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>

                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Form.Item label="Opacity Setting">
                                            {getFieldDecorator('opacity', {
                                                rules: [],
                                            })(
                                                <Slider marks={marks} step={1} style={{ width: "100%" }} max={10} min={0} tipFormatter={this.formatter} tooltipVisible={false} />
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Function Color">
                                            {getFieldDecorator('opacity', {
                                                rules: [],
                                            })(
                                                <Input style={{ width: "100%" }} />
                                            )}
                                        </Form.Item>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Advertisement Picture Panel" key="5" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Advertisement Picture Panel" key="6" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right" className="samp_collapse_style">
                                    <Panel header="Advertisement Broadcast Panel" key="7" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Picture">
                                            {getFieldDecorator('uploadLogo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                                <Collapse accordion expandIconPosition="right"  className="samp_collapse_style">
                                    <Panel header="Advertisement Video Panel" key="8" className="samp_collapse_panel_header">
                                        <Form.Item label="Upload Video">
                                            {getFieldDecorator('uploadVideo', {
                                                rules: [],
                                            })(
                                                <div>
                                                    <Upload {...props}>
                                                        <Button>
                                                            <Icon type="upload" /> Select File
                                                            </Button>
                                                    </Upload>
                                                </div>
                                            )}
                                        </Form.Item>
                                        <Row>
                                            <Col span={8} style={{ textAlign: "right" }}>

                                            </Col>
                                            <Col span={16} style={{ textAlign: "left" }}>
                                                <span style={{ color: "red" }}>
                                                    This area can only support upload img file,the max size is 500kb,the best fit pixel dimensions is 1280*1280.
                                                    </span>
                                            </Col>
                                        </Row>
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" className="samp_panel_from_footer_button_save">Welcome Preview</Button>
                                <Button type="primary" className="samp_panel_from_footer_button_save">Success Preview</Button>
                                <Button type="primary" style={{ marginLeft: "10px" }} onClick={this.applyCustom}>Apply</Button>
                                <Button type="primary" className="samp_panel_from_footer_button_cancle" onClick={this.cancelCustom}>Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const CustomizationPortal = Form.create()(CustomizationPortalRegister);
export default CustomizationPortal;