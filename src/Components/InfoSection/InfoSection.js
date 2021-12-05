import React, { Component } from 'react'
import "./InfoSection.css";
import { Avatar } from '@material-ui/core';
import imageSrc from "../../images/pp1.png"
class InfoSection extends Component {
    constructor(props){
        super(props);
        this.state={ }
    }
    render() {
        return (
            <div className="info__container">
                <Avatar className="info_image" src={imageSrc}/>
                <div className="info_content">
                    <div className="info_username">abc</div>
                    <div className="info_description">Description</div>
                </div>
            </div>
        )
    }
}

export default InfoSection;