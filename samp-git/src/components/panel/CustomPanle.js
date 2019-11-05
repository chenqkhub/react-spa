import React, { Component } from 'react';
import { Button } from 'antd'
import { relativeTimeThreshold } from 'moment';
class CustomPanle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        console.log("props", this.props)
        console.log(this.state)

    }
    render() {
        return (
            <div style={{ width: "100%", height: "auto", border: "1px solid #ddd" }}>
                {
                    this.props.panelConfig.isShowHeader ?
                        <div style={{ width: "100%", background: "#f5f5f5", lineHeight: "40px" ,fontSize:"20px",fontWeight:"700"}}>
                            <span style={{ paddingLeft: "20px" }}>{this.props.panelConfig.title}</span>
                        </div> : ""
                }

                <div style={{ width: "100%", height: "auto", textAlign: "center" }}>
                    <div style={{ width: "100%", height: "90%", textAlign: "center", marginTop: "20px" }}>
                        {this.props.children}
                    </div>
                </div>
                <div style={{ width: "100%", height: "50px", background: "#f5f5f5" }}>
                    {
                        this.props.panelConfig.isShowFooter ?
                            <div style={{ float: "right", lineHeight: "50px" }}>
                               
                                
                                 {
                                    this.props.panelConfig.isVisible ? <span style={{ paddingRight: "10px" }}><Button type="primary" onClick={this.props.panelConfig.testFunction}>{this.props.panelConfig.testConnectLable ? this.props.panelConfig.testConnectLable : "Test Connect"}</Button></span> : ""
                                }
                                {
                                    this.props.panelConfig.isShowSaveButton ? <span style={{ paddingRight: "10px" }}><Button type="primary" onClick={this.props.panelConfig.finishFunction}>{this.props.panelConfig.finishLable ? this.props.panelConfig.finishLable : "Save"}</Button></span> : ""
                                }
                                {
                                    this.props.panelConfig.isShowCancelButton ? <span style={{ paddingRight: "10px" }}><Button type="primary" style={{backgroundColor:"#6c757d",borderColor:"#6c757d"}} onClick={this.props.panelConfig.cancelFunction}>{this.props.panelConfig.cancelLable ? this.props.panelConfig.cancelLable : "Cancel"}</Button></span> : ""
                                }

                            </div> : ""
                    }


                </div>
            </div>
        );
    }
}

export default CustomPanle;