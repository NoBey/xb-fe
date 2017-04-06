import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'
import './index.css';
import { DatePicker,Button } from 'antd';
import Addbox from './common/addbox/index'
import TopBox from './common/TopBox/index'

const App = () => (
  <div>
    <Addbox />
    <TopBox />

  </div>
)

const Test = () => (
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
)

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="test"  component={Test}/>
    </Route>
  </Router>
), document.getElementById('app'))
