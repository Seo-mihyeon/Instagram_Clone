import React, { Component } from 'react'
import Post from '../Post/Post'
import "./MainPage.css"
import uploadImage from '../../images/upload.png';

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            postArray:[]
        }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        let data=[
            {
                "postId":"1234",
                "userName":"aaa",
                "postImageURL":"https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/ohouse/20210525093849950ocpx.jpg",
                "timeStamp":"12345",
                "likes":"122"
            }
        ]
        this.setState({postArray: data});
    }

    render() {
        return (
            <div>
                <div style={{"textAlign":"center", "margin":"10px"}}>
                    <img className="mainpage_uploadicon" src={uploadImage} />
                </div>
                {
                    this.state.postArray.map((item, index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL}likes={item.likes}/>
                    ))
                }
            </div>
        )
    }
}

export default MainPage;