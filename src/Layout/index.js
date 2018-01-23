import React, { Component } from 'react';
import Contact from './Contact';
import Design from './Design';
import FirstScreen from './FirstScreen';
import Links from './Links';
import Photography from './Photography';
import Works from './Works';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <div className="wrap">
                <FirstScreen></FirstScreen>
                <Works></Works>
                <Design></Design>
                <Photography></Photography>
                <Links></Links>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
}

export default Layout;