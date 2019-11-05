import React, { Component } from 'react';
import { Select, Icon, Input, Row, Col, message } from 'antd';
const { Option } = Select
const InputGroup = Input.Group

class OtherAttributes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mappingList: [],
            selectValue: [],
            attributeOptions: this.props.attributeOptions,
            valueType: "INPUT_VALUE",
            inputVisible: false,
            divDisplay: "none",
            inputValueList: [],
            selectValueList: [],
            inputAddButton: false,
            attributeValue: "",
            inputValue: '',
            divMarginTop: 30
        }
        if (this.props.mappingList) {
            this.state.mappingList = this.props.mappingList
        }
    }
    handleChange = (value) => {
        console.log(value);
        this.setState({
            selectValue: value
        })
    }
    addMappingCondition = () => {
        let isExsitAttribute = false;
        let mappingList = this.state.mappingList;
        let value = this.state.valueType == "DROP_DOWN" ? { "key": this.state.attributeValue, "value": this.state.selectValue }
            : { "key": this.state.attributeValue, "value": this.state.inputValue }
        this.setState({
            divMarginTop: 30,
            inputValue: ""
        })
        //遍历集合，判断该attribute是否已经存在
        this.state.mappingList.map((item) => {
            if (item.key == this.state.attributeValue) {
                isExsitAttribute = true
            }
        })
        if (isExsitAttribute || this.state.inputValue == "") {
            message.error('The Attribute is exist or Input value is null');
            return
        }
        mappingList.push(value)
        if (mappingList.length != 0) {
            this.setState({
                mappingList: mappingList,
            })
        }
        console.log(this.props)
        this.props.getOtherAttributes(this.state.mappingList)
    }
    //改变attribute
    changeAttribute = (value) => {
        console.log(value);
        this.state.attributeOptions.map((item) => {
            if (item.value == value) {
                if (item.valueType === "DROP_DOWN") {
                    this.setState({
                        valueType: "DROP_DOWN"
                    })
                } else if (item.valueType === "INPUT_VALUE") {
                    this.setState({
                        valueType: "INPUT_VALUE"
                    })
                }
                return false;
            }
        })
        this.setState({
            attributeValue: value
        })
        console.log(this.state)

    }
    //改变operator
    changeOperator = (value) => {
        this.setState({
            operatorValue: value
        })
    }


    //change input value 
    changeInputValue = (e) => {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    //delete input list
    deleteInputList = (item, index) => {
        let divMarginTop = this.state.divMarginTop
        divMarginTop -= 37
        this.setState({
            divMarginTop: divMarginTop
        })
        let inputValueList = this.state.inputValueList
        inputValueList.splice(index, 1)
        this.setState({
            inputValueList: inputValueList
        })
        if (this.state.inputValueList.length === 0) {
            this.setState({
                inputAddButton: "none",
            })
        }
    }
    //删除mapping condition，删除后需要调用父组件的callback函数
    deleteItem = (item, index) => {
        console.log(item, index)
        let mappingList = this.state.mappingList;
        mappingList.splice(index, 1);
        this.setState({
            mappingList: mappingList
        })
        if (this.state.mappingList.length === 0) {
            this.setState({
                isShow: "none",
            })
        }
        this.props.getOtherAttributes(this.state.mappingList)
    }
    //check mapping condition
    checkTheMappingCondition = () => {
        if (this.state.valueType == "DROP_DOWN") {
            if (this.state.attributeValue != "" && this.state.operatorValue != "" && this.selectValue != "") {
                return false
            } else return true
        } else if (this.state.valueType == "INPUT_VALUE") {
            if (this.state.attributeValue != "" && this.state.operatorValue != "" && this.inputValueList.length > 0) {
                return false
            } else return true
        }
    }
    //选择value列的值
    changeValueFunction = (value) => {
        let selectValue = "";
        value.map((item) => {
            selectValue += item + ","
        })
        selectValue.substring(0, selectValue.length - 1)
        console.log(selectValue);
        console.log(`selected ${value}`);
        this.setState({
            selectValue: selectValue
        })

    }
    render() {
        const { tags, inputVisible, inputValue } = this.state;
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <Row style={{ width: "100%" }}>
                <Col span={5}></Col>
                <Col span={16}>
                    <Row style={{ textAlign: "left" }}>
                        <Col span={12}>
                            Attribute
                        </Col>
                        <Col span={12}>
                            Value
                        </Col>
                    </Row>
                    <div style={{ width: "100%", float: "left", height: "auto", borderRadius: "3px" }}>
                        <InputGroup compact>
                            <Select style={{ width: "50%" }} onChange={this.changeAttribute}>
                                {
                                    this.state.attributeOptions.map((item) => {
                                        return <Option key={item.value + item.value} value={item.value}>{item.name}</Option>
                                    })
                                }
                            </Select>
                            <Input type="text" style={{ width: "50%", marginTop: ".5px" }} value={this.state.inputValue} onChange={this.changeInputValue} addonAfter={<Icon type="plus" onClick={this.addMappingCondition} style={{ fontSize: '6px', color: '#428bca' }} />} />
                        </InputGroup>
                    </div>
                    {
                        this.state.mappingList.length > 0 ?
                            <div style={{ width: "100%", height: "auto", marginTop: this.state.divMarginTop, border: "1px solid #d9d9d9", textAlign: "left", borderRadius: "5px" }}>
                                {
                                    this.state.mappingList.map((item, index) => {
                                        return (
                                            <Row key={item.key+item.value} style={{ width: "100%", height: "35px", marginLeft: "10px" }}>
                                                <Col span={12}>{item.key}</Col>
                                                <Col span={11}>{item.value}</Col>
                                                <Col span={1} style={{ textAlign: "center" }}>
                                                    <Icon type="close" onClick={this.deleteItem.bind(this, index)} style={{ fontSize: '6px', color: 'red' }} />
                                                </Col>

                                            </Row>
                                        )
                                    })
                                }
                            </div> : ""
                    }


                </Col>
            </Row>

        );
    }
}

export default OtherAttributes;