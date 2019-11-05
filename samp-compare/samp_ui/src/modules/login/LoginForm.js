import React, { Component } from 'react';
import { Icon, Input, Form, Checkbox, Button, Modal, Row, Col } from 'antd';
import axios from 'axios'
import ForgetPassword from './ForgetPassword'
import RegisterForm from './RegisterForm'
import history from '../../history/History'
import store from '../../stores/store'
import { showRegister, showRetrieve, loginStyle } from '../../actions/login/actionCreator'
class LoginForm extends Component {
    constructor(props) {
        //实现父类component的方法
        super(props);
        //从store中获取属性
        this.state = store.getState().loginReducer;
        //订阅store
        store.subscribe(this.storeChange)
    }
    //当store中的state值发生变化时，实时订阅到组建中的state中
    storeChange = () => {
        this.setState(store.getState().loginReducer)
    }
    //显示注册
    showRegisterAccount = () => {
        //发布到reducer
        store.dispatch(showRegister(true))
    };
    //注册账户
    registerUser = () => {
        store.dispatch(showRegister(false))
    }
    //取消
    cancelRegister = () => {
        store.dispatch(showRegister(false))
    }

    //显示找回密码
    showRetrievePassword = () => {
        //发布到reducer
        store.dispatch(showRetrieve(true))
    }
    //找回密码
    retrieveUser = () => {
        store.dispatch(showRetrieve(false))
    }
    //取消
    cancelRetrieve = () => {
        store.dispatch(showRetrieve(false))
    }


    //登录表单处理
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //在这里可以校验用户名密码的合法性
                history.push({ pathname: "/", state: {} })
            }
        });
    };
    //改变
    changeTheLoginStyle = () => {
        console.log(this.state.loginStyle)
        if (this.state.loginStyle === "USER_ACCOUNT") {
            store.dispatch(loginStyle("TELEPHONE"))
        } else if (this.state.loginStyle === "TELEPHONE") {
            store.dispatch(loginStyle("USER_ACCOUNT"))
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className="login_welcome_info">User Login</div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    {
                        this.state.loginStyle === "USER_ACCOUNT" ?
                            <div>
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username.' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username/Email"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password.' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    )}
                                </Form.Item>
                            </div> : ""
                    }
                    {
                        this.state.loginStyle === "TELEPHONE" ?
                            <div>
                                <Form.Item>
                                    {getFieldDecorator('Telephone', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Telephone"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            {getFieldDecorator('captcha', {
                                                rules: [{ required: true, message: 'Please input the Verification Code you got!' }],
                                            })(<Input prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)' }} style={{ width: "100%" }} />} placeholder="Verification Code" />)}
                                        </Col>
                                        <Col span={12}>
                                            <Button style={{ width: "100%" }} type="primary">Get Verification Code</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                            </div> : ""
                    }
                    <Form.Item>
                        <span style={{ float: "right" }}><a href="#" onClick={this.changeTheLoginStyle}>{this.state.loginStyle === "USER_ACCOUNT" ? "Telephone Login" : "Username Login"}</a></span>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                    <hr />
                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            <a href="#" onClick={this.showRegisterAccount}  style={{ color: "#6c757d" }}>Register</a> | <a href="#" onClick={this.showRetrievePassword}>Forgot Password</a>
                        </Col>

                    </Row>
                </Form>
                <Modal
                    title="Retrieve Password"
                    visible={this.state.isShowRetrieve}
                    onOk={this.retrieveUser}
                    onCancel={this.cancelRetrieve}
                    okText="Save"
                    cancelText="Cancel"
                    width={500}
                >
                    <ForgetPassword />
                </Modal>
                <Modal
                    title="Register Account"
                    visible={this.state.isShowRegister}
                    onOk={this.registerUser}
                    onCancel={this.cancelRegister}
                    okText="Save"
                    cancelText="Cancel"
                    width={500}
                >
                    <RegisterForm />
                </Modal>
            </div>

        );
    }
}

export default Form.create()(LoginForm);