import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'

export default class Addbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
    <div style={{background:'#f4f4f4',width:'100%',height:'auto'}}>
      <div style={{width:1200,margin:'0 auto',height:'34px',fontSize:'16px',lineHeight:'34px'}}>
        <div style={{float:'left'}}>您好 ! 邱光光光跃退出</div>
        <div style={{float:'right'}}>免费电话：4008055955</div>
      </div>
    </div>

    )
  }

}
