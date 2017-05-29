/*
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
//import DataLoader from './DataLoader.js';
//const dataLoader = new DataLoader();
import {Button} from 'react-bootstrap';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log('SHOW ADDRESS TEST PROPS', props);
        if (!this.props.address) {
            throw new Error('NO PROPS IN AddressShow!!!');
        }
        this.log(props);
    }

    log(message, message2 = '', message3 = '') {

        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    render() {
        this.log('SHOW ADDRESS RENDER CALLED');

        return (
            <form className='navbar-form' action="">
                {/*
                 <div id='addressShowRender' className='Address'>
                 */}
                <div id='addressShowRender' className='row'>
                    <div className="col-sm-12">
                        <p className='App-intro'>
                            firstName: {this.props.address.firstName}
                        </p>
                        <p className='App-intro'>
                            lastName: {this.props.address.lastName}
                        </p>
                        <p className='App-intro'>
                            Street: {this.props.address.Street}
                        </p>
                        <p className='App-intro'>
                            City: {this.props.address.City}
                        </p>
                        <p className='App-intro'>
                            State: {this.props.address.State}
                        </p>
                        <p className='App-intro'>
                            Zip: {this.props.address.Zip}
                        </p>
                        <div className='showButtons'>
                            <Button bsStyle='primary' id='firstAddress'
                                    onClick={this.props.onFirstAddress}>Show First Address</Button>
                            <Button bsStyle='success'
                                    id='getAddress' onClick={this.props.onGetAddress}>Next Address</Button>
                            <Button bsStyle='warning'
                                    id='previousAddress' onClick={this.props.onPrevAddress}>Previous Address</Button>
                            <Button bsStyle='primary'
                                    id='lastAddress' onClick={this.props.onLastAddress}>Last Address</Button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

}

export default AddressShow;
