import React, { Component } from 'react';
import Title from '../Components/Title';
import Botton from '../Components/Button';

import http from '../utils/http';

import conf from '../config.json';

class Photography extends Component {

    constructor (props) {
        super(props);
        this.state = {
            imgs: []
        };

        http.get(conf.api.instagram).then(({data}) => {
            console.log(data)
            this.setState({
                imgs: data
            });
        });
    }

    render() {
        return (
            <article id="photography" className="photography">
                <Title>Photography</Title> 
                <section className="figures">
                    {
                        this.state.imgs.map(img => (
                            <figure>
                                <a href={img.link} style={{backgroundImage: `url(${img.src})`}} target="_blank"> </a><figcaption>{img.id}</figcaption>
                            </figure>
                        ))
                    }
                </section>

                <Botton link={conf.links.instagram}>More</Botton>
            </article>
        );
    }
}

export default Photography;