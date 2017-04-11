import React, { Component } from 'react';
import { Link } from 'react-router';
import { Translate, I18n } from 'react-redux-i18n';
import User from './test.jsx';
// import Topbox from '../modules/TopBox.jsx';
// import config from '../config.json';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import './main.css'

export default class Login extends Component {
	callback(key) {
		console.log(key);
	}
	render() {
		return (
			<div>
				<div className="loginBigBox" >
					<img src={'banner_02.png'}   alt=""/>
					<div className="loginBigB0x-inner">
						<div className="lognBox">
							<div className="loginBox-inner">
								<Tabs defaultActiveKey="1" onChange={this.callback}>
									<TabPane tab={I18n.t('login.personalUser')} key="1">
										<User user={I18n.t('login.user')} />
									</TabPane>
									<TabPane tab={I18n.t('login.conUser')} key="2">
										<User user={I18n.t('login.conuser')} />
									</TabPane>
								</Tabs>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
