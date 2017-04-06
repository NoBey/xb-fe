import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';
import ProductList from './ProductsList'
const Option = Select.Option;


export default class SearchSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const optionlist = ProductList.Info.map((list)=> <Option key={list.label}>{list.label}</Option>)
    return (
      <Select  style={{ width: 70 }}>
        {optionlist}
      </Select>

    )
  }

}
