import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';
import intl from 'react-intl-universal';
import { menus } from "../../const/routerConst"
//定义左侧功能菜单列表
const { SubMenu } = Menu;

class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: [],
            selectedKeys: []
        };
    }
    componentDidMount() {
        // 获取当前路径
        const pathname = this.props.location.pathname
        //获取当前所在的目录层级
        const rank = pathname.split('/')
        //rank = ["",/policy-engine,/nas-client]
        switch (rank.length) {
            case 2:  //一级目录
                this.setState({
                    selectedKeys: [pathname]
                })
                break;
            case 3: //二级目录，要展开一个subMenu
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [rank.slice(0, 2).join('/')]
                })
                break;
            case 4: //三级目录，要展开两个subMenu
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [rank.slice(0, 2).join('/'), rank.slice(0, 3).join('/')]
                })
                break;
        }
    }
    componentWillReceiveProps(nextProps) {
        //当点击面包屑导航时，侧边栏要同步响应
        const pathname = nextProps.location.pathname
        if (this.props.location.pathname !== pathname) {
            this.setState({
                selectedKeys: [pathname],
            })
        }
    }
    onOpenChange = (openKeys) => {
        //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
                openKeys
            })
            return
        }

        //最新展开的菜单
        const latestOpenKey = openKeys[openKeys.length - 1]
        //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
        //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
        //只适用于3级菜单
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
                openKeys
            })
        } else {
            this.setState({
                openKeys: [latestOpenKey]
            })
        }
    }
    //遍历生成父菜单
    getParentMenu = ({ title, key, icon, subs }) => {
        return (
            <SubMenu key={key} title={
                <span>
                    <Icon type={icon}></Icon>
                    <span>{intl.get(title)}</span>
                </span>
            }>
                {
                    subs.map((item) => {
                        return item.subs && item.subs.length > 0 ? this.getParentMenu(item) : this.getChildrenMenu(item)
                    })
                }

            </SubMenu>
        )
    }
    //遍历生成子菜单
    getChildrenMenu = ({ title, key, icon }) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    <span><Icon type={icon}></Icon>{intl.get(title)}</span>
                </Link>
            </Menu.Item>
        )
    }

    menuClick = (e) => {
        this.setState({
            selectedKeys: [e.key],
        });
    }
    render() {

        return (
            <div style={{ width: '100%' }}>
                <Menu
                    theme="dark" mode="inline" onClick={this.menuClick} selectedKeys={this.state.selectedKeys} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}
                >
                    {
                        menus.map((item) => {
                            return item.subs ? this.getParentMenu(item) : this.getChildrenMenu(item)
                        })
                    }
                </Menu>
            </div>
        );
    }
}
export default withRouter(SidebarMenu);