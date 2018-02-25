import React, { Component } from 'react';
import '../Style/FirstScreen.scss';
import mouse from '../Img/mouse.svg';
import Messy from '../Components/Messy';

import conf from '../config.json';

const { blog, github, resume } = conf.links;

const anchors = [
    "first-screen", "works", "design", "photography"
];

class FirstScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            curAnchor: 0
        }
    }

    componentDidMount () {
        const options = {
            root: document.querySelector('body'),
            rootMargin: '0px',
            threshold: 1.0
        }
        var observer = new IntersectionObserver(() => 1, options);

        // anchors.forEach(id => {
        //     document.querySelector(`#${anchors[i]}`)
        // });
    }

    anchorClick = (i) => {
        this.setState({
            curAnchor: i
        });
        document.querySelector(`#${anchors[i]}`).scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <article id="first-screen" className="first-screen">
                <nav>
                    
                    <ul className="anchor">
                        {
                            anchors.map((a, i) => (
                                <li 
                                    className={i === this.state.curAnchor ? 'active' : undefined} 
                                    onClick={() => this.anchorClick(i)}
                                    key={i}
                                ></li>
                            ))
                        }
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