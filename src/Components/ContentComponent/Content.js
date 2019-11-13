import React, { Component } from 'react'
// import Background from '../../img/photo1.png'

import './Content.css';
import Carousel from '../CarouselComponent/Carousel';

// const myStyles = {
//     backgroundImage: `url(${Background})`,
//     height: '60vh',
//     backgroundSize: 'cover'
// }

class Content extends Component {
    render() {
        return (
            // <header style={myStyles}>
            //     <h1>{ this.props.title }</h1>
            //     <p>Explore this website</p>
            //     <a href="#button">{this.props.button}</a>
            // </header>
            <Carousel />
        )
    }
}

export default Content;
