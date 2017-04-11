import React, { Component, PropTypes } from 'react';

import { I18n } from 'react-redux-i18n';

export default class VerifyCode extends Component {
    constructor(props) {
        super(props);
        this.state = ({ code: '', img: '' });
    }

    componentWillMount() {
        this.setState({ code: this.props.code});

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.code != this.state.code) {
            this.setState({ code: nextProps.code});

        }
    }

    renderTest() {
        return <img src={this.state.img} alt=""/>;
    }

    render() {
        return (
            <div>
                {this.renderTest()}
            </div>
        );
    }
}
