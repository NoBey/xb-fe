import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'
import axios from 'axios'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

import LoginBox from '../common/loginBox/index'


function submit(data){
  console.log(data)

  axios({
  method: 'POST',
  url: 'http://192.168.0.100:3000/api/v1/login',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
// fetch('http://192.168.0.100:3000/api/v1/login',{
//     method:"post",
//     headers:{
//         "Content-type":"application:/x-www-form-urlencoded:charset=UTF-8"
//     },
//     body:"name=lulingniu&age=40"
// })
// .then(status)
// .then(json)
// .then(function(data){
//     console.log("请求成功，JSON解析后的响应数据为:",data);
// })
// .catch(function(err){
//     console.log("Fetch错误:"+err);
// })



}

export default class Addbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
    <div className='loginBigBox'>
      <Tabs defaultActiveKey="1" onChange={{callback}}>
        <TabPane  tab="个人用户" key="1">
           <LoginBox submit={submit} />
         </TabPane>
        <TabPane tab="企业用户" key="2">
           <LoginBox />
        </TabPane>
      </Tabs>
    </div>

    )
  }

}
