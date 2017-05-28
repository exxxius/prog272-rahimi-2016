/*
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import Logger from '../assets/elf-logger';
const logger = new Logger('address', 'yellow', 'green', '18px');
//const detailLogger = new Logger('address:detail', 'white', 'green', '14px');
import 'whatwg-fetch';
//import DataLoader from './DataLoader.js';
//const dataLoader = new DataLoader();

class AddressEdit extends Component {

    render() {
        logger.log('SHOW ADDRESS RENDER CALLED');
        return (
            <div id='addressEditRender' className='Address'>
                <label>First Name: </label>
                <input id='FirstName'
                       className='App-intro'
                       value={this.props.address.firstName}
                       onChange={this.props.onNameChange}/>
                <label>Last Name: </label>
                <input id='LastName'
                       className='App-intro'
                       value={this.props.address.lastName}
                       onChange={this.props.onNameChange}/><br />
                <label>Street: </label>
                <input id='Street'
                       className='App-intro'
                       value={this.props.address.Street}
                       onChange={this.props.onNameChange}/>
                <label>City: </label>
                <input id='City'
                       className='App-intro'
                       value={this.props.address.City}
                       onChange={this.props.onNameChange}/><br />
                <label>State: </label>
                <input id='State'
                       className='App-intro'
                       value={this.props.address.State}
                       onChange={this.props.onNameChange}/>
                <label>Zip Code: </label>
                <input id='Zip'
                       className='App-intro'
                       value={this.props.address.Zip}
                       onChange={this.props.onNameChange}/>
                <div className='editButtons'>
                    <button id='firstAddress' onClick={this.props.onFirstAddress}>First Address</button>
                    <button id='changeAddress' onClick={this.props.onGetAddress}>Edit Next Address</button>
                    <button id='previousAddress' onClick={this.props.onPrevAddress}>Previous Address</button>
                    <button id='lastAddress' onClick={this.props.onLastAddress}>Last Address</button>
                </div>
            </div>
        );
    }
}

export default AddressEdit;
