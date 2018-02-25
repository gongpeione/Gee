import React, { Component } from 'react';
import Title from '../Components/Title';

const contact = [
    {
        name: 'Github',
        url: 'https://github.com/gongpeione',
        title: '@gongpeione'
    },
    {
        name: 'Email',
        url: 'ggongpei[AT]gmail.com',
        title: '@gongpeione'
    }
]

class Contact extends Component {
    render() {
        return (
            <article className="contact">
                <Title>Contact</Title>
                <section className="my-contact">
                    <ul>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </section>
            </article>
        );
    }
}

export default Contact;