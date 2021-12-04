import React, { Component } from 'react';
import './LoginPage.css';
import Grid from '@material-ui/core/Grid';
import insta_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logo.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLogin: true
        }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else
            this.setState({isLogin: true});
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={insta_image} width="454px" />
                            </div>
                            <div className="loginpage_rightcomponent">
                                <img className="loginpage__logo" src={insta_logo}/>

                                <div className="loginPage_signin">
                                    
                                    {
                                        this.state.isLogin ? <SignIn/> : <SignUp/>
                                    }

                                    <div className="login_ordiv">
                                        <div className="login__dividor"></div>
                                        <div className="login__or">OR</div>
                                        <div className="login__dividor"></div>
                                    </div>

                                    <div className="login__fb">
                                        <img src={fb} width="15px" style={{"marginRight":"5px"}}/>Log in with Facebook
                                    </div>
                                    <div className="login__forgot"> Forgot password?</div>
                                </div>

                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin?
                                        <div className="loginPage__signup">
                                        Don't have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signin">
                                        Have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign in</span>
                                        </div>
                                    }
                                </div>

                            <div className="loginPage__downloadSection">
                                <div>
                                    Get the app.
                                </div>
                                <div className="loginPage__option">
                                    <img className="loginPage_dwimg" src={appstore} width="136px"/>
                                    <img className="loginPage_dwimg" src={playstore} width="136px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LoginPage;