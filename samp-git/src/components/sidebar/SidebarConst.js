import React, { Component } from 'react';
import SidebarMenu from './SidebarMenu'
import {menus} from '../../const/routerConst'
class SidebarConst extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const test = menus
        console.log(test)
        return ( 
            <SidebarMenu menus={menus}/>
         );
    }
}
 
export default SidebarConst;