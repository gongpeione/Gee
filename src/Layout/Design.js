import React, { Component } from 'react';
import Title from '../Components/Title';

const imgs = [
    {
        name: 'Gee',
        src: 'http://file.fangao.cc/char_avatar1519464167893.png',
    },
    {
        name: 'GeekuGallery',
        src: 'http://file.fangao.cc/char_avatar1519466416023.png'
    },
    {
        name: 'PureBlog',
        src: 'http://file.fangao.cc/char_avatar1519466576036.png'
    },
    {
        name: 'Ran',
        src: 'http://file.fangao.cc/char_avatar1519466684905.png'
    },
    {
        name: 'HZFE',
        src: 'http://file.fangao.cc/char_avatar1519466839881.png'
    },
    {
        name: 'Logo',
        src: 'http://file.fangao.cc/char_avatar1519467243367.png'
    }
]

class Design extends Component {
    render() {
        return (
            <article className="design">
                <Title>Design</Title>
                <section className="figures">
                {
                    imgs.map(img => { 
                        const url = `${img.src}?imageView2/2/w/800`;
                        return (
                            <figure style={{backgroundImage: `url(${url})`}} key={url} onClick={()=>window.open(img.src)}>
                                <img src={url} alt=""/><figcaption>{img.name}</figcaption>
                            </figure>
                        )
                    })
                }
                </section>
            </article>
        );
    }
}

export default Design;