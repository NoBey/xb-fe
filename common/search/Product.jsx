import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Cascader } from 'antd';

export default class Products extends Component{

    render(){
        const optiones = [{
            label: '音频产品',
            value: 'Audio Products',
        }, {
            label: '电池产品',
            value: 'Battery Products',
        }, {
            label: '盒子,外壳,机架',
            value: 'Boxes, Enclosures, Racks',
        }, {
            label: '电缆组件',
            value: 'Cable Assemblies',
        }, {
            label: '电缆,电线',
            value: ' Cables, Wires',
        }, {
            label: '电缆,电线 - 管理',
            value: ' Cables, Wires- Management',
        }, {
            label: '电容器',
            value: 'Capacitors',
        }, {
            label: '电路保护',
            value: 'Circuit Protection',
        }, {
            label: '计算机,办公室 - 元件,配件',
            value: ' Computers, Office- Components, Accessories',
        }, {
            label: '连接器,互连器件',
            value: ' Connectors, Interconnects',
        }, {
            label: '晶体和振荡器',
            value: 'Crystalsand Oscillators',
        }, {
            label: '分立半导体产品',
            value: 'Discrete Semiconductor Products',
        }, {
            label: '嵌入式电脑',
            value: 'Embedded Computers',
        }, {
            label: '热管理',
            value: ' Fans, Thermal Management',
        }, {
            label: '滤波器',
            value: 'Filters',
        }, {
            label: '硬件,紧固件,配件 ',
            value: ' Hardware, Fasteners, Accessories',
        }, {
            label: '电感器,线圈,扼流圈 ',
            value: ' Inductors, Coils, Chokes',
        }, {
            label: '工业控制装置,量表 ',
            value: ' Industrial Controls, Meters',
        }, {
            label: '集成电路（IC） ',
            value: 'Integrated Circuits (ICs)',
        }, {
            label: '隔离器',
            value: 'Isolators',
        }, {
            label: '套件',
            value: 'Kits',
        }, {
            label: '线路保护,配电,后备电源',
            value: ' Line Protection, Distribution, Backups',
        }, {
            label: '磁性元件 - 变压器,电感元件',
            value: ' Magnetics- Transformer, Inductor Components',
        }, {
            label: '创客/DIY，教育',
            value: ' Maker/ DIY, Educational',
        }, {
            label: '存储卡，模块',
            value: ' Memory Cards, Modules',
        }, {
            label: '电机,电磁阀,驱动器板/模块',
            value: ' Motors, Solenoids, Driver Boards/ Modules',
        }, {
            label: '网络解决方案 ',
            value: 'Networking Solutions',
        }, {
            label: '光学检测设备',
            value: 'Optical Inspection Equipment',
        }, {
            label: '光电元件',
            value: 'Optoelectronics',
        }, {
            label: '电位计,可变电阻器',
            value: ' Potentiometers, Variable Resistors',
        }, {
            label: '电源 - 板安装',
            value: 'Power Supplies- Board Mount',
        }, {
            label: '电源 - 外部/内部（外接）',
            value: 'Power Supplies- External/ Internal( Off- Board)',
        }, {
            label: '编程器，开发系统 ',
            value: ' Programmers, Development Systems',
        }, {
            label: '原型开发产品',
            value: 'Prototyping Products',
        }, {
            label: '继电器 ',
            value: 'Relays',
        }, {
            label: '电阻器 ',
            value: 'Resistors',
        }, {
            label: '射频/IF 和 RFID  ',
            value: 'RF/IF and RFID',
        }, {
            label: '传感器 ',
            value: ' Sensors, Transducers',
        }, {
            label: '焊接,拆焊,返修产品 ',
            value: ' Soldering, Desoldering, Rework Products',
        }, {
            label: '静电控制，ESD，无尘室产品 ',
            value: ' Static Control, ESD, Clean Room Products',
        }, {
            label: '开关 ',
            value: 'Switches',
        }, {
            label: '胶带，粘合剂  ',
            value: ' Tapes, Adhesives',
        }, {
            label: '测试与测量  ',
            value: 'Testand Measurement',
        }, {
            label: '工具 ',
            value: 'Tools',
        }, {
            label: '变压器 ',
            value: 'Transformers',
        }, {
            label: '未分类 ',
            value: 'Uncategorized',
        }];
        return(
            <Cascader value={this.props.value} placeholder={21121} style={this.props.style}  options={optiones} onChange={this.props.onChange}  />
        )
    }
}
