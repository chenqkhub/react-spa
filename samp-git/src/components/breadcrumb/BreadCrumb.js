/**面包屑导航 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd'
import { menus,routes } from '../../const/routerConst'
class BreadCrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    itemRender = (route, params, menus, keys) => {

        const last = menus.indexOf(route) === menus.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
                <Link to={keys.join('/')}>{route.breadcrumbName}</Link>
            );
    }
    render() {
        return (
            <div style={{ margin: "16px 16px" }}>
                <Breadcrumb itemRender={this.itemRender} routes={routes} />;
            </div>
        );
    }
}

export default BreadCrumb;