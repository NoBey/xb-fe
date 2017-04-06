import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'

import Search from '../common/search/index.jsx';

function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} 在
      <a
        href={`https://s.taobao.com/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      区块中
      <span className="global-search-item-count">约 {item.count} 个结果</span>
    </Option>
  );
}


export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  handleChange = (value) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
    <div >
      <Search
        onChange={this.handleChange}
        dataSource={dataSource.map(renderOption)}
        onSelect={onSelect}
        placeholder={'1232312323232323232323232323'}
        style={{ width: 500 ,float:'left'}}
        />
    </div>
    )
  }

}
