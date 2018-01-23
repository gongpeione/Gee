import React, { Component } from 'react';
import '../Style/FirstScreen.scss';
import mouse from '../Img/mouse.svg';

class FirstScreen extends Component {
    render() {
        return (
            <article className="first-screen">
                <nav>
                    <h1>
                        Geeku
                    </h1>
                    <ul className="anchor">
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
                <section className="content">
                    <h2>{ '< Geeku >' }</h2>
                    <h3>对技术充满好奇</h3>
                </section>
                <section className="main-links">
                    <a href="#">Blog</a>
                    <a href="#">Github</a>
                    <a href="#">Resume</a>
                </section>
                <img src={mouse} alt="" className="mouse"/>
            </article>
        );
    }
}

export default FirstScreen;