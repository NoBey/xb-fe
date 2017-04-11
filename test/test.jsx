import React, { Component } from 'react';
import { Translate, I18n } from 'react-redux-i18n';

import { Form, Input, Checkbox,Button } from 'antd';
import { browserHistory } from 'react-router';
// import config from '../../config.json';
import VerifyCode from './VerifyCode.jsx';
const FormItem = Form.Item;


let LoginBox = React.createClass({
    getInitialState() {
        return {
            errorUser: I18n.t('login.userTishi'),
            errorPasswd: I18n.t('login.passwordTishi'),
            error: '',
            flag: false,
            num:0,
            verify_code: this.generateCode(),
        };
    },
    handleSubmit(e) {
        let This = this;
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (errors) {
                this.state.num += 1;
                return;
            }
            if (this.props.user == I18n.t('login.user')){

            }
            else {
                Meteor.call('Roles.checkRoles', values.name, function(error, type) {
                    if (type == 'freeze'){
                        this.setState({error:I18n.t('freeze'),flag:true});
                    }
                    else if (type == 'company') {

                    }
                    else {
                        this.state.num += 1;
                        this.setState({flag:true});
                        let error=I18n.t('login.usersTishi');
                        this.setState({ error });
                    }
                }.bind(this));
            }
        });
    },
    checkVerifyCode(rule, value, callback) {
        if (value && value.toLowerCase() != this.state.verify_code.toLowerCase()) {
            callback(I18n.t('Register.verifyCodeError'));
        } else {
            callback();
        }
    },
    generateCode() {
        let items = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPRSTUVWXYZ23456789'.split('');
        let randInt = function (start, end) {
            return Math.floor(Math.random() * (end - start)) + start;
        }
        let code = '';
        for (let i = 0; i < 4; ++i) {
            code += items[randInt(0, items.length)];
        }
        return code;
    },
    refresh() {
        this.props.form.resetFields(['emailyan']);
        this.setState({ verify_code: this.generateCode() });
    },
    showyan(){
        if(this.state.num>=3){
            const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
            const yanEmailProps = getFieldProps('emailyan', {
                rules: [
                    { required: true, min: 4,max:4,message:I18n.t('Register.yanTishi')},
                    { validator: this.checkVerifyCode }
                ],
            });
            const formItemLayout = {
                labelCol: { span: 4 },
            };
            return(
                <FormItem
                    {...formItemLayout}
                    hasFeedback
                    className="Login-yanline"
                >
                    <img src={(  '/yan_20.png')} alt="" />
                    <div className="xian"></div>
                    <Input  type="text"  placeholder={I18n.t('login.pic')} {...yanEmailProps} />
                    <VerifyCode code={this.state.verify_code} />
                    <div style={{position:'absolute',top:38,right:0,fontSize:12}}>{I18n.t('kan')} <span style={{color:'#0a66bc',cursor:'pointer'}} onClick={this.refresh}>{I18n.t('shu')}</span> </div>
                    <div className="clear"></div>
                </FormItem>
            )
        }
    },
    render (){
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const { user } = this.props;
        const nameProps = getFieldProps ('name',{
            rules: [
                { required: true, min:1 , message:this.state.errorUser },
            ],
        });
        const passwdProps = getFieldProps('passwd', {
            rules: [
                { required: true, whitespace: true, message:this.state.errorPasswd },
            ],
        });
        const formItemLayout = {
            labelCol: { span: 4 },
        };
        return(
            <div className="LoginError">
                <div className="error" style={this.state.flag ? {display:"block" }: {display:'none'}}>
                    <img src={(  '/error.png')} alt=""/>
                    <p>{this.state.error}</p>
                    <div className="clear"></div>
                </div>
                <Form form={this.props.form} className="lists" onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        hasFeedback
                        help={isFieldValidating('name') ? I18n.t('doing.nowing') : (getFieldError('name') || []).join(', ')}
                    >
                        <img src={(  '/header_07.png')} alt=""/>
                        <div className="xian"></div>
                        <Input {...nameProps}  placeholder={user} />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        hasFeedback
                    >
                        <img src={(  '/suo_10.png')} alt="" />
                        <div className="xian"></div>
                        <Input {...passwdProps}  type="password" autoComplete="off" placeholder={I18n.t('login.password')}/>
                    </FormItem>
                    {this.showyan()}
                    <FormItem>
                        <Button className="denglu" type="primary" htmlType="submit"><Translate value="login.login"/></Button>
                    </FormItem>
                </Form>
            </div>
        )
    },
});

var warpLoginBox = Form.create()(LoginBox);
export default warpLoginBox
