import React, { Component } from 'react'

import ProfileOne from '../../img/profileOne.png'
import ProfileTwo from '../../img/profileTwo.png'
import ProfileThree from '../../img/profileThree.png'
import ProfileFour from '../../img/profileFour.png'

import './Team.css';

export class Team extends Component {
    render() {
        return (
            <div className="teams">
                <h3>Team</h3>
                <div className="row">
                    <Photos photo={photoObj[0].photo} title={photoObj[0].title} position={photoObj[0].position}/>
                    <Photos photo={photoObj[1].photo} title={photoObj[1].title } position={photoObj[1].position}/>
                    <Photos photo={photoObj[2].photo} title={photoObj[2].title} position={photoObj[2].position}/>
                    <Photos photo={photoObj[3].photo} title={photoObj[3].title} position={photoObj[3].position}/>
                </div>
            </div>
        )
    }
}

const photoObj = [
    {
        photo: <img src={ProfileOne} alt=""/>,
        title: "Adam Lisagor",
        position: "Founder"
    },
    {
        photo: <img src={ProfileTwo} alt=""/>,
        title: "Lauren Cynkar",
        position: "Excecutive Producer"
    },
    {
        photo: <img src={ProfileThree} alt=""/>,
        title: "Joshua Allen",
        position: "Head Writer"
    },
    {
        photo: <img src={ProfileFour} alt=""/>,
        title: "Zach Hobesh",
        position: "Head of Post"
    },
]

class Photos extends Component{
    render(){
        return(
            <div>
            <span>
               {this.props.photo}
            </span>
            <h4>{this.props.title}</h4>
            <p>{this.props.position}</p>
            </div>
        )
    }
}

export default Team
