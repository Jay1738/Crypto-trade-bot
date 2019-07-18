import React from 'react';
import './Login-page.css';
import 'typeface-roboto';
import { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Popup from './Popup.js';

export default class Profile extends Component {

    render() {
        return (
            <div className="Profile">
                <div className="centered" id="sign-in-card">
                    <div className="main-font" id="sign-in-text">Sign In</div>
                    <form>
                        <input size="30" type="email" id="email" placeholder=" email@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                        <input size="30" type="password" id="password" placeholder=" password"/>
                        <input type="submit" id="sign-in" value="Sign In"></input>
                        <div className="main-font" id="or-login-text">Or login with</div>
                        <div className="icon-div">
                            <SocialIcon network="google" style={{ height: 38, width: 38 }} className="shadow"/>
                            <SocialIcon network="facebook" style={{ height: 38, width: 38 }} className="shadow"/>
                        </div>
                    </form>
                    <Popup/>
                </div>
            </div>
        );
    }
}
