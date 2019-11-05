import React, { Component } from 'react';
import { Select, Icon, Input, Row, Col, message } from 'antd';
import _ from 'lodash'
import SampTags from '../tags/SampTags';
const { Option } = Select
const InputGroup = Input.Group;

class MappingCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mappingList: [],//存贮添加的mapping condition 值
            selectValue: [],//当value为下拉框的时候，支持多选，用于存储选中值
            operatorOptions: this.props.operatorOptions,//Operator操作列的options，根据Attribute的不同，可以包含字符串或者数字
            operatorOptions_Integer: this.props.operatorOptions_Integer,//只包含数字的operator选项
            operatorOptions_String: this.props.operatorOptions,//只包含字符串选项的值
            attributeOptions: this.props.attributeOptions,//Attribute的选项值
            valueType: "DROP_DOWN",//Value的类型，默认下拉菜单
            inputValueList: [],//value的input值列表，
            selectValueList: [],//value的select值列表
            attributeValue: "",//attribute值
            operatorValue: "",//operator值
            inputValue: '',//value的input值
            divMarginTop: 33,//默认的偏移距离
            children: [],//对于下拉类型的Attribute对应的value值
            isDisabledMapping: true,//mapping condition的添加按钮是否禁用
            isDisabledValue: true,//input value的添加按钮是否可点击
            tags: []//input 类型的为tags
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
    //添加mapping condition
    addMappingCondition = () => {
        let isExistAttribute = false
        let mappingList = this.state.mappingList;
        let inputValue = "";
        this.state.inputValueList.map((item) => {
            inputValue += item + ","
        })
        inputValue.substring(0, inputValue.length - 1)
        console.log(inputValue)
        //根据不同的valueType类型进行赋值操作
        let value = this.state.valueType === "DROP_DOWN" ? { "key": this.state.attributeValue, "operator": this.state.operatorValue, "value": this.state.selectValue }
            : { "key": this.state.attributeValue, "operator": this.state.operatorValue, "value": inputValue }
        //判断当前的mapping condition中是否已包含要添加的attribute
        this.state.mappingList.map((item) => {
            if (this.state.attributeValue == item.key) {
                isExistAttribute = true
            }
        })
        //如果存在则不添加，也不做其他操作
        if (isExistAttribute) {
            message.error('The Attribute is exist');
            return;
        }
        //判断当前的值是否存在为空的情况，如果存在则不允许添加
        if (this.state.attributeValue !== "" && this.state.operatorValue !== "" && (this.state.selectValue !== "" || inputValue !== "")) {
            mappingList.push(value)
        }
        //重置参数
        this.setState({
            divMarginTop: 33,
            selectValue: "",
            selectValueList: [],
            isDisabledMapping: false,
            inputValueList: []
        })
        //如果mapping condition为空，则隐藏mapping condition区域
        if (mappingList.length != 0) {
            this.setState({
                mappingList: mappingList,
            })
        }
        console.log(this.props)
        this.props.getMappingCondition(this.state.mappingList)
    }
    //改变attribute
    changeAttribute = (value) => {
        console.log(value);
        //每次切换attribute需要清空children中的值
        let children = [];

        let operatorOptions_String = this.state.operatorOptions_String
        let operatorOptions_Integer = this.state.operatorOptions_Integer
        //重置operatorOptions
        let operatorOptions = operatorOptions_String;
        //遍历当前集合，如果匹配，判断type类型以及生成children
        this.state.attributeOptions.map((item) => {
            if (item.value == value) {
                console.log(item)
                //判断当前是否为数字类型，
                if (item.type === "integer") {
                    operatorOptions = operatorOptions_String.concat(operatorOptions_Integer)
                }
                //设置operatorOptions
                this.setState({
                    operatorOptions: operatorOptions
                })
                //遍历设置value中的下拉children
                item.children.map((item) => {
                    children.push(
                        <Option key={item.value + item.name} value={item.value}>{item.name}</Option>
                    )
                })
                //赋值
                this.setState({
                    valueType: item.valueType,
                    children: children
                })
                return false;
            }
        })
        //切换之后，重置参数值
        this.setState({
            attributeValue: value,
            inputValueList: [],
            selectValue: "",
            selectValueList: [],
            isDisabledMapping: false,
            isDisabledValue: false
        })
        console.log(this.state)
    }
    //改变operator
    changeOperator = (value) => {
        this.setState({
            operatorValue: value
        })
    }

    //添加attribute对应的value值
    addAttributeValue = () => {
        let top = 0
        top += 35;
        let inputValueList = this.state.inputValueList
        let isExistValue = false;
        //遍历集合，判断集合是否已经存在输入值
        this.state.inputValueList.map((itme) => {
            if (itme == this.state.inputValue) {
                isExistValue = true
                return
            }
        })
        //当输入框不为空并且输入的值不存在value集合中时，才能添加
        if (this.state.inputValue != "" && !isExistValue) {
            inputValueList.push(this.state.inputValue)
        } else {
            message.error('The Input Value is exist or null');
            return
        }
        this.setState({
            inputValue: "",
            inputValueList: inputValueList,
            divMarginTop: 0
        })
        console.log(this.state.divMarginTop);
    }

    //删除mapping condition，删除后需要调用父组件的callback函数
    deleteItem = (item, index) => {
        console.log(item, index)
        let mappingList = this.state.mappingList;
        mappingList.splice(index, 1);
        this.setState({
            mappingList: mappingList
        })
        this.props.getMappingCondition(this.state.mappingList)
    }

    //选择value列的值
    changeValueFunction = (value) => {
        let selectValue = "";
        value.map((item) => {
            selectValue += item + ","
        })
        selectValue.substring(0, selectValue.length - 1)
        console.log(`selected ${value}`);
        this.setState({
            selectValue: selectValue,
            selectValueList: value
        })
    }
    //tags的callback函数
    getTags = (tags) => {
        console.log(tags)
        let inputValue = ""
        tags.map((item) => {
            inputValue += item
        })
        this.setState({ inputValue: inputValue })
    }

    render() {
        return (
            <Row>
                <Col span={5}></Col>
                <Col span={16}>
                    <Row style={{ textAlign: "left" }}>
                        <Col span={8}>
                            Attribute
                        </Col>
                        <Col span={8}>
                            Operator
                        </Col>
                        <Col span={8}>
                            value
                        </Col>
                    </Row>
                    <div style={{ width: "100%", float: "left", height: "auto", borderRadius: "3px" }}>
                        <Row >
                            <InputGroup compact>
                                <Select style={{ width: "33%" }} onChange={this.changeAttribute}>
                                    {
                                        this.state.attributeOptions.map((item) => {
                                            return <Option key={item.value + item.value} value={item.value}>{item.name}</Option>
                                        })
                                    }
                                </Select>
                                <Select style={{ width: "33%", border: "none" }} onChange={this.changeOperator}>
                                    {
                                        this.state.operatorOptions.map((item) => {
                                            return <Option key={item.value + item.value} value={item.value}>{item.name}</Option>
                                        })
                                    }
                                </Select>
                                {
                                    this.state.valueType == "DROP_DOWN" ?
                                        <Select style={{ width: "32%" }} mode="tags" onChange={this.changeValueFunction} value={this.state.selectValueList}>
                                            {this.state.children}
                                        </Select> :
                                        <div className="samp_tags_div_conditions">
                                            <SampTags tags={this.state.tags} getSuffixTags={this.getSuffixTags} type="suffix"></SampTags>
                                        </div>

                                }
                                <div style={{ width: "2%", textAlign: "center", border: "1px solid #d9d9d9", borderLeft: 0, height: "32px" }}>
                                    <Icon type="plus" style={{ color: '#428bca' }} onClick={this.addMappingCondition} />
                                </div>

                            </InputGroup >
                        </Row>
                    </div>
                    {
                        this.state.mappingList.length > 0 ?
                            <div style={{ width: "100%", height: "auto", marginTop: this.state.divMarginTop, border: "1px solid #d9d9d9", borderTop: "none", textAlign: "left", borderRadius: "5px" }}>
                                {
                                    this.state.mappingList.map((item, index) => {
                                        return (
                                            <Row key={item.key + item.operator + item.value} style={{ width: "100%", lineHeight: "34px", marginLeft: "10px" }}>
                                                <Col span={8}>{item.key}</Col>
                                                <Col span={8}>{item.operator}</Col>
                                                <Col span={7}>{item.value}</Col>
                                                <Col span={1} style={{ textAlign: "center" }}>
                                                    {/* <Button type="primary" icon="close" onClick={this.deleteItem.bind(this, index)}></Button> */}
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

export default MappingCondition;