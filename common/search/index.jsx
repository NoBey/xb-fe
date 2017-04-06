import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'

import SearchSelect from './SearchSelect'
import Products from './Product'
import './test.css'

import { Icon, Button, Input, AutoComplete, Select} from 'antd';
const Option = AutoComplete.Option;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        dataSource: [],
        placeholder: this.props.placeholder,
        onSelect: this.props.onSelect,
        dataSource: this.props.dataSource,
        onChange: this.props.onChange,
        };
  }
  render() {
    return (
      <div className="global-search-wrapper"  style={this.props.style}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={this.state.dataSource}
          onSelect={this.state.onSelect}
          onChange={this.state.onChange}
          placeholder={this.state.placeholder}
          optionLabelProp="text"
        >
            <Input
              addonBefore={( <SearchSelect /> )}
              suffix={( <Button className="search-btn" size="large" type="primary"><Icon type="search" /></Button>)}
            />
        </AutoComplete>
      </div>
    )
  }

}
