import React, { Component } from 'react';
import '../Style/FirstScreen.scss';
import mouse from '../Img/mouse.svg';
import Messy from '../Components/Messy';

import conf from '../config.json';

const { blog, github, resume } = conf.links;

class FirstScreen extends Component {
    render() {
        return (
            <article className="first-screen">
                <nav>
                    <ul className="anchor">
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h1>
                        Geeku
                    </h1>
                </nav>
                <section className="content">
                    <h2>
                        <Messy gap={100}>{ '< Geeku >' }</Messy>
                    </h2>
                    <h3>
                        <Messy gap={100}>
                            对技术充满好奇
                        </Messy>
                    </h3>
                </section>
                <section className="main-links">
                    <a href={blog} target="_blank">Blog</a>
                    <a href={github} target="_blank">Github</a>
                    <a href={resume} target="_blank">Resume</a>
                </section>
                <img src={mouse} alt="" className="mouse"/>
            </article>
        );
    }
}

export default FirstScreen;