import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Components/NavigationComponent/Navigation';
import Content from './Components/ContentComponent/Content';
import InformationSection from './Components/InformationSectionComponent/InformationSection';
import Services from './Components/ServicesComponent/Services';
import Team from './Components/TeamComponent/Team'
import Footer from './Components/FooterComponent/Footer'

import * as serviceWorker from './serviceWorker';


class App extends Component {
    render(){
        return(
            
            <div>
            <Navigation logoTitle="React Project"/>
            <Content title="React Portfolio" button="Find Out More"/>
            <InformationSection button="What We Offer"/>
            <Services />
            <Team />
            <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
