import React, { Component } from 'react'
import "./NavBar.css"
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import insta_logo from "../../images/logoinsta.png"
import home from "../../images/home.svg"
import message from "../../images/message.svg"
import find from "../../images/find.svg"
import react from "../../images/love.svg"
import pp from "../../images/pp1.png"


class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <div className="navbar__barContent"></div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <img className="navbar_logo" src={insta_logo}  width="105px"/>
                    </Grid>
                    <Grid item xs={3}>
                        <input className="navbar__searchBar"  text="text" placeholder="Search" />
                    </Grid>
                    <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="navbar__img" src={home} width="25px"/>
                        <img className="navbar__img" src={message} width="25px"/>
                        <img className="navbar__img" src={find} width="25px"/>
                        <img className="navbar__img" src={react} width="25px"/>
                        <Avatar className="navbar__img" src={pp} style={{"maxWidth":"25px", "maxHeight":"25px"}}/>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default NavBar;