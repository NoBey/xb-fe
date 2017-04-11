import React, { Component } from 'react';
// import { Translate, I18n } from 'react-redux-i18n';
import { Row, Col, Form, Icon, Input, Checkbox,Button } from 'antd';
import { browserHistory, hashHistory } from 'react-router';

import objectAssign from 'object-assign'
import './index.css'

const FormItem = Form.Item;

class LoginBox extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.props.submit(values)
    });
  }
  render() {
    const { getFieldDecorator, getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const nameProps = getFieldProps ('name',{
      rules: [
          { required: true, min:1 , message: '请填写用户名' },
      ],
    });
    const passwdProps = getFieldProps('passwd', {
      rules: [
          { required: true, whitespace: true, message:'密码长度为6-20个字符,包含数字,字母,下划线' },
      ],
    });

    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{maxWidth:500}}>

          <FormItem >
            {(
              <Input {...nameProps} className='h-36' prefix={<Icon type="user" style={{ fontSize: 20 }} />} placeholder="手机号/邮箱" />
            )}
          </FormItem>

        <FormItem >
          {(
            <Input {...passwdProps} className='h-36' autoComplete="off" prefix={<Icon type="lock" style={{ fontSize: 24 }} />} type="password" placeholder="用户密码" />
          )}
        </FormItem >


        <FormItem>
          <Button className='h-36' type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
            立即登录
          </Button>
        </FormItem>

      </Form>
    );
  }
}

const WrappedLoginBox = Form.create()(LoginBox);

export default WrappedLoginBox
