import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'
import './index.css';
import { DatePicker,Button } from 'antd';

const App = () => (
  <div>
    <h2>ICxyz</h2>
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
