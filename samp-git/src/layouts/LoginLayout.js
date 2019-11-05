import React, { Component } from 'react';
import { Layout, Select, Tabs } from 'antd';
import LoginForm from '../modules/login/LoginForm'
import RegisterForm from '../modules/login/RegisterForm'
import ForgetPassword from '../modules/login/ForgetPassword'
import 'antd/dist/antd.css';
import logo from '../assets/images/company_logo.png'
import history from '../history/History'
import '../assets/css/main.css'
Layout.Header.background = "white";
const { Option } = Select;
const { TabPane } = Tabs;
class LoginLayout extends Component {
    constructor(props) {
        super(props);
        console.log(document.body.clientHeight)
        this.state = {
            clientHeight: document.body.clientHeight
        }

    }

    render() {
        return (
            <div className="login_layout">
                <div className="login_layout_header">
                    <div className="login_layout_header_logo_div">
                        <img src={logo} alt="HAM-NG" className="login_layout_header_logo"></img>
                    </div>
                    <div className="login_layout_header_company">
                        SAMP管理平台
                    </div>

                    <div className="login_layout_header_language">
                        <Select defaultValue="ch" style={{ width: "100px" }}>
                            <Option value="ch">中文</Option>
                            <Option value="us">English</Option>
                        </Select>
                    </div>
                </div>
                <div className="login_layout_body">
                    <div className="login_layout_body_from_div">
                        <div className="login_layout_body_from">
                            <LoginForm />
                        </div>

                    </div>
                </div>
                <div className="login_layout_footer">
                    HAN ©2018 Created by HAM TEAM
                </div>
            </div>
        );
    }
}
export default LoginLayout;