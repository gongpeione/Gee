import React, { Component } from 'react';
import logo from '../Img/logo.white.svg';

export default class Card extends Component {
    render () {
        return (
            <article>
                <div className="cover">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="content">
                        <h3>{ this.props.name }</h3>
                        <p>{ this.props.desp }</p>
                    </div>
                </div>
            </article>
        )
    }
}