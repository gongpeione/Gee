import React, { Component } from 'react';
import Title from '../Components/Title';
import Card from '../Components/Card';

const t = {
    name: 'Gee',
    desp: '我的个人网站',
    type: 'fe',
    github: ''
};
const works = Array.from({length: 10}, () => t);

class Works extends Component {
    render() {
        return (
            <article className="works">
                <Title>Works</Title>
                <section className="work-list">
                    { works.map((work, i) => (<Card {...work} key={i}></Card>)) }
                </section>
            </article>
        );
    }
}

export default Works;