import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'
import './index.css';
import { DatePicker,Button } from 'antd';
import Addbox from './common/addbox/index'
import TopBox from './common/TopBox/index'
import Login from './container/login.jsx'
// import Test from './test/ts.jsx'
import Test from './container/login'

import ZhCn from './test/zh_cn.js';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import reducers from './reducers/index.js';

const store =  createStore(
  combineReducers({
    ...reducers,
    i18n: i18nReducer
  }),
  applyMiddleware(thunk)
);
syncTranslationWithStore(store)
store.dispatch(loadTranslations(ZhCn));
store.dispatch(setLocale('zh'));

const App = () => (
  <div>
    <Test    />

  </div>
)


// import Test from './test/Search.jsx'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="login"  component={Login}/>
    </Route>
  </Router>
), document.getElementById('app'))
