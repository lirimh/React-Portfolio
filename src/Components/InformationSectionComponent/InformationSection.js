import React, { Component } from 'react'

import './InformationSection.css';

export class InformationSection extends Component {
    render() {
        return (
            <div className="content">
                <h2>Stylish Portfolio is the perfect theme for your next project</h2>
                <p>This theme features a flexible,UX friendly sidebar menu</p>
                <a href="#button">{this.props.button}</a>
            </div>
        )
    }
}

export default InformationSection
