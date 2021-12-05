import React, { Component } from 'react';
import "./StatusBar.css";
import { Avatar } from '@material-ui/core';
import statusimg from "../../images/pp1.png";
import uploadimage from '../../images/statusadd.png';

class StatusBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            statusList: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data =[
            {
                "username":"aa",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"bb",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"cc",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"dd",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"ee",
                "imageURL":"../../images/pp1.png"
            }
        ]
        this.setState({statusList: data});
    }
    render() {
        return ( 
            <div>
                <div className="statusbar__container">
                <img className="statusbar__upload" src={uploadimage} width="55px" height="55px"/>
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                                <Avatar className="statusbar__status" src={statusimg} />
                                <div className="statusbar__text">{item.username}</div>
                            </div>
                        ))
                    }
                </div>
            </div>    
        );
    }
}

export default StatusBar;