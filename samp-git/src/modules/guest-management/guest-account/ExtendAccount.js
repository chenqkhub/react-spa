import React, { Component } from 'react';
import { Form, InputNumber, DatePicker} from 'antd';
import moment from 'moment'
import axios from 'axios'
import _ from "lodash"
import history from '../../../history/History'
import formatDate from '../../../components/utils/DateFormat'

const formItemLayout = {
    labelCol: {
        xs: { span: 8 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 14 },
        sm: { span: 14 },
    },
};
class ExtendAccountRegister extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            dataQuotaAmount: 1,
            accountValidityPeriod: "2019-09-26 18:00:16",
        }
        this.state.accountType = this.props.accountType
    }

    componentDidMount() {
        this.props.form.validateFields();
        // if(this.props.location.state.model == "edit"){
        //     this.props.form.setFieldsValue(
        //         this.props.location.state.item
        //     );
        // }
        
        //由于设置了dataquotaamount和account validity有效期，需要在组件加载完去触发一次callback
        let item = this.state
        this.props.extendAccount(item)
    }
    createNasClient = () => {
        console.log("创建----");
        history.push("/guest-management/guest-account")
    }
    returnList = () => {
        console.log("取消----");
        history.push("/guest-management/guest-account")
    }
    testConnectFunction = () => {
        history.push("/guest-management/guest-account")
    }

    handleExtend = () => {
        this.setState({
            extendShow: false
        })
        //这里回调方法，刷新数据
    }
    cancelExtend = () => {
        this.setState({
            extendShow: false
        })
    }
    //校验日期是否可用
    disabledDate(time) {
        if (!time) {
            return false
        } else {
            return time < moment().subtract(0, "days") || time > moment().add(1, 'd')
        }
    }
    //改变data quota amount
    changeDataQuotaAmount = (value) => {
        this.setState({
            dataQuotaAmount: value
        })
        let item = this.state
        this.props.extendAccount(item)
    }
    //改变account validity
    changeAccountValidityPeriod = (date, dateString) => {
        console.log(date.getTime())
        this.setState({
            accountValidityPeriod: date
        })
        let item = this.state
        this.props.extendAccount(item)
    }
    checkForm = () => {

    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const dataQuotaAmountError = isFieldTouched('dataQuotaAmount') && getFieldError('dataQuotaAmount');
        const accountValidityPeriodError = isFieldTouched('accountValidityPeriod') && getFieldError('accountValidityPeriod');
        //rules
        const rules = {
            accountPrefix: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 1 && _.size(value) <= 16 ? callback() : callback("The field must be in 1-16 characters !")
                    }
                },
            ],
            clientNumber: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            dataQuota: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        value > 0 ? callback() : callback("The field must be larger than 0 !")
                    }
                }
            ],
            dataQuotaAmount: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            accountValidityPeriod: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],

        }
        return (
            <Form {...formItemLayout} labelAlign="right">
                {
                    this.state.accountType === "ACCOUNT_NAME" ?
                        <Form.Item label="Data Quota Amount" hasFeedback validateStatus={dataQuotaAmountError ? 'error' : ''} help={dataQuotaAmountError || ''}>
                            {getFieldDecorator('dataQuotaAmount', { initialValue: this.state.dataQuotaAmount, rules: rules.dataQuotaAmount })(
                                <InputNumber style={{ width: "100%" }} min={1} max={2147483} onChange={this.changeDataQuotaAmount} />
                            )}
                        </Form.Item> : ""
                }
                <Form.Item label="Account Validity Period" hasFeedback hasFeedback validateStatus={accountValidityPeriodError ? 'error' : ''} help={accountValidityPeriodError || ''}>
                    {getFieldDecorator('accountValidityPeriod', { initialValue: moment(this.state.accountValidityPeriod), rules: rules.accountValidityPeriod })(
                        <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD HH:mm:ss" showTime disabledDate={this.disabledDate} onChange={this.changeAccountValidityPeriod} />
                    )}
                </Form.Item>
            </Form>
        );
    }
}

const ExtendAccount = Form.create()(ExtendAccountRegister);
export default ExtendAccount;