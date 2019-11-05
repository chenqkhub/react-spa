import React, { Component } from 'react';
import { Badge, Icon, Layout, Menu, Select, Avatar, Dropdown, Button, Alert, Input } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom'
import intl from 'react-intl-universal';
import cookie from 'react-cookies'
import { emit } from '../components/utils/emit'
import 'antd/dist/antd.css';
import '../assets/css/main.css'
import logo from '../assets/images/company_logo.png'
import user from '../assets/images/user.png'
import ContentRouter from '../components/router/ContentRouter'
import SidebarConst from '../components/sidebar/SidebarConst';
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import history from '../history/History'
Layout.Header.background = "white";
const { Header, Content, Sider, Footer } = Layout;
const { Option } = Select;
const { SubMenu } = Menu
const { Search } = Input;
const infoMenus =
    <Menu>
        <Menu.Divider />
        <Menu.Item key="1">
            <Alert
                message="Success Tips"
                description="Detailed description and advice about successful copywriting."
                type="success"
                showIcon
            />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <Alert
                message="Informational Notes"
                description="Additional description and information about copywriting."
                type="info"
                showIcon
            />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
            />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
            <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
            />
        </Menu.Item>
    </Menu>;
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPath: "",
            secondPath: "",
            collapsed: false,
            lang: cookie.load("lang")?cookie.load("lang"):"en_US"
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    componentDidMount() {

    }
    showUserInfo = () => {

    }
    onSelect = () => {

    }
    //退出
    logout = () => {
        console.log("退出")
        history.push("/login")
    }
    //去往用戶信息页面
    gotoEmployeeAccount = () => {
        console.log("用户信息")
    }
    //国际化
    handleChange = (val) => {
        cookie.save("lang", val)
        // 发送消息
        emit.emit('change_language', val);
        this.setState({lang:val})

    }
    render() {
        const menus =
            <Menu onSelect={this.onSelect}>
                <Menu.Divider />
                <Menu.Item key="1">
                    <a target="_blank" href="#"><Icon type="user"></Icon>Profile</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="2">
                    <a target="_blank" href="#"><Icon type="setting"></Icon>Setting</a>
                </Menu.Item>
                <Menu.Divider />
                {/* <Menu.Item key="3">
                    <a target="_blank" href="#" onClick={this.logout}><Icon type="logout"></Icon>Log out</a>
                </Menu.Item> */}
            </Menu>;
        return (
            <div className="lamp_index">
                <Layout style={{ width: "100%", height: "auto" }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}
                        width={400}>
                        <div className="logo" >
                        </div>
                        <SidebarConst />
                    </Sider>

                    <Layout style={{ height: '100%', width: '100%' }}>
                        <Header className="lamp_index_header">
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                            <div className="lamp-index-header-right">
                                <ul>
                                    <li>
                                        <Dropdown overlay={menus}>
                                            <Avatar size="middle" style={{ verticalAlign: 'middle', backgroundColor: "#7265e6" }}>USER</Avatar>
                                            {/* <Button shape="circle">
                                                <Avatar size="large" style={{ verticalAlign: 'middle' }}>admin</Avatar>
                                                <i className="anticon anticon-down"><Avatar size="large" style={{ verticalAlign: 'middle' }}>admin</Avatar></i>
                                            </Button> */}
                                        </Dropdown>
                                        {/* <Button shape="circle">
                                            <i className="anticon anticon-down"><Avatar src={user} /></i>
                                        </Button> */}
                                    </li>
                                    <li>
                                        <Dropdown overlay={infoMenus}>
                                            <Button shape="circle">
                                                <i className="anticon anticon-down">
                                                    <Badge count={4}>
                                                        <Icon type="warning" color="white" style={{ fontSize: "20px" }} />
                                                    </Badge>
                                                </i>
                                            </Button>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown overlay={infoMenus}>
                                            <Button shape="circle">
                                                <i className="anticon anticon-down">
                                                    <Badge count={4} >
                                                        <Icon type="notification" color="white" style={{ fontSize: "20px" }} />
                                                    </Badge>
                                                </i>
                                            </Button>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Select defaultValue="en-US" style={{ width: "100px" }} onChange={this.handleChange} value={this.state.lang}>
                                            <Option value="zh_CN">中文</Option>
                                            <Option value="en_US">English</Option>
                                        </Select>
                                    </li>
                                    <li>
                                        <span className="samp-index-header-logout"><Icon type="logout"></Icon>{intl.get("samp.index.logout")}</span>
                                    </li>
                                </ul>
                            </div>
                        </Header>
                        <Content className="lamp-index-content">
                            <div className="lamp-index-content-div">
                                <ContentRouter />
                            </div>
                        </Content>

                        <Footer className="lamp-index-footer">HAN ©2018 Created by HAM TEAM</Footer>
                    </Layout>
                </Layout>
            </div >
        );
    }
}

export default Index;