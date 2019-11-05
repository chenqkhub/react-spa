import React, { Component } from 'react';
import { Button, Icon } from 'antd'
import axios from 'axios'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';
class LogServerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'Oct 23 2019 17:06:35.664| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.665| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.664| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.737| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.738| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.739| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.740| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.741| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Auth Proxy Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt\n' +
                'Oct 23 2019 17:06:35.742| [Radius Acct Listener] [INFO ] org.tinyradius.util.RadiusServer [APPID:UPAM] thread interrupted...reinterrupt'
        }
    }
    componentDidMount() {

    }
    //刷新日志
    refresh = () => {
        // axios.get('/api/ham/radius/client/getClientList')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    render() {
        return (
            <div>
                <div >
                    <span className="smap_log_server_detail_name">{this.props.item.actualname}</span>
                    <span className="smap_log_server_detail_refresh">
                        <Button type="primary" onClick={this.refresh}>
                            <Icon type="sync"></Icon>
                        </Button>
                    </span>
                </div>
                <br />
                <div className="smap_log_server_detail_codemirror">
                    <CodeMirror
                        value={this.state.code}
                        options={{
                            theme: 'eclipse',
                            tabSize: 0,
                            keyMap: 'sublime',
                            mode: 'jsx',
                            showCursorWhenSelecting: true
                        }}
                        onBeforeChange={(editor, data, value) => {
                            console.log(editor, data, { value });
                        }}
                        onChange={(editor, data, value) => {
                            console.log(editor, data, { value });
                        }}
                    />
                </div>

                <br />
            </div>
        );
    }
}

export default LogServerDetail;