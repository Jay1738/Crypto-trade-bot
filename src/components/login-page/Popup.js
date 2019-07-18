import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Popup.css';
import { SocialIcon } from 'react-social-icons';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <button onClick={() => this.openModal()}>Sign Up</button>
                <Modal visible={this.state.visible} width="350" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                    <div className="main-font" id="sign-in-text">Sign Up</div>
                        <form>
                            <input size="30" type="text" id="first-name" placeholder=" First name"/>
                            <input size="30" type="text" id="last-name" placeholder=" Last name"/>
                            <input size="30" type="text" id="age" placeholder="Date of Birth ex. 1992-03-24 " pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"/>
                            <input size="30" type="email" id="email" placeholder=" email@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                            <input size="30" type="password" id="password" placeholder=" password"/>
                            <input type="submit" id="sign-in" value="Sign Up"></input>
                        </form>
                        <h1>Or sign up with</h1>
                        <div className="icon">
                            <SocialIcon network="google" style={{ height: 38, width: 38 }} className="shadow"/>
                            <SocialIcon network="facebook" style={{ height: 38, width: 38 }} className="shadow"/>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
}