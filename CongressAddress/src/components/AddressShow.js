/*
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';

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
            <div id='addressShowRender' className='Address'>
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
                <button id='getAddress' onClick={this.props.OnGetAddress}>Next Address</button>

            </div>
        );
    }

}

export default AddressShow;
