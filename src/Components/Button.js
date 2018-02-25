import React, { Component } from 'react';

export default class Button extends Component {

    onClick = () => {
        this.props.onClick && this.props.onClick();
        this.props.link && window.open(this.props.link);
    }

    render () {
        return (
            <button className="btn" onClick={this.onClick}>{this.props.children}</button>
        )
    }
}