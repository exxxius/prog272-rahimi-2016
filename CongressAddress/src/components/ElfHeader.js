/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import {Jumbotron} from 'react-bootstrap';

class ElfHeader extends Component {

    render() {
        return (
            <div className='App'>
                <Jumbotron>
                    <div className='App-header'>
                        <img src={logo} className='App-logo' alt='logo'/>
                        <h2>Welcome to Congress Address List</h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default ElfHeader;
