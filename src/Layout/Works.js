import React, { Component } from 'react';
import Title from '../Components/Title';
import Card from '../Components/Card';
import Botton from '../Components/Button';

import http from '../utils/http';
import conf from '../config.json';

const t = {
    name: 'Gee',
    desp: '我的个人网站',
    type: 'fe',
    github: ''
};
const works = Array.from({length: 10}, () => t);

class Works extends Component {
    constructor (props) {
        super(props);
        this.state = {
            works: []
        };
        http.get(conf.api.works).then(({data}) => {
            const dataArr = [];
            Object.keys(data).forEach(key => {
                console.log(data, key),data[key].forEach(item => dataArr.push(item))
            });
            this.setState({ works: dataArr });
        });
    }

    openWorks () {
        window.open(conf.links.works);
    }

    render() {
        return (
            <article className="works">
                <Title>Works</Title>
                <section className="work-list">
                    { this.state.works.map((work, i) => (<Card {...work} key={i}></Card>)) }
                </section>
                <Botton onClick={this.openInstagram}>More</Botton>
            </article>
        );
    }
}

export default Works;