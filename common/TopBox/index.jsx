import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'
import Search from '../search/index'

export default class TopBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
    <div style={{background:'#fff',width:'100%',height:'auto',boxShadow:'0 3px 9px #e8e6e6',borderBottom:'1px solid #c6c6c6'}}>
      <div style={{width:1200,margin:'0 auto',height:'76px',fontSize:'16px',lineHeight:'34px'}}>
        <div style={{float:'left',marginTop:'15px'}}>
          <img style={{width:'109px',maginTop:'10px',float:'left'}} src='http://101.201.238.72/theme/default/logo.png' />
          <div style={{width:'1px',height:'40px',background:'#000',margin:'0px 20px',float:'left'}}></div>
          <div style={{float:'left',fontSize: '24px',lineHeight: '42px',color: '#0c5aa2'}}>用芯为您服务</div>
        </div>
        <Search style={{ width: 300 ,float:'left'}}/>
      </div>
    </div>

    )
  }

}
