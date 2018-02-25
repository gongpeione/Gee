import React, { Component } from 'react';
import logoDefault from '../Img/logo.white.svg';

function getLogo (logo) {
    return logoDefault;
    return logo ? 
        `https://cdn.rawgit.com/gongpeione/myProjects/master/${logo}` : 
        logoDefault;
}

export default class Card extends Component {
    render () {
        return (
            <article>
                <div className="cover">
                    <div className="logo">
                        <img src={getLogo(this.props.logo)} alt={this.props.title}/>
                    </div>
                    <div className="content">
                        <a href={ this.props.link } target="_blank">
                            <h3>{ this.props.title }</h3>
                        </a>
                        <p>{ this.props.description }</p>
                    </div>
                </div>
            </article>
        )
    }
}