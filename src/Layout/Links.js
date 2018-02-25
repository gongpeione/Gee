import React, { Component } from 'react';
import Title from '../Components/Title';

const links = [
    {
        link: "https://geeku.net",
        
    }
]

class Links extends Component {
    render() {
        return (
            <article className="links">
                <Title>Links</Title>
                <ul>
                    <li data-tip="描述描述描述描述">
                        <img src="http://via.placeholder.com/50x50" alt=""/>
                        <span><a href=""></a></span>
                    </li>
                </ul>
            </article>
        );
    }
}

export default Links;