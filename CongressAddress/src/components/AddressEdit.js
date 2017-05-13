/*
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';

class AddressEdit extends Component {
    render() {
        // this.log('SHOW ADDRESS RENDER CALLED');

        return (
            <div id='addressShowRender' className='Address'>
                <label>First Name: </label>
                <input id='FirstName'
                       className='App-intro'
                       value={this.props.address.firstName}
                       onChange={this.props.onNameChange}/><br/>
                <label>Last Name: </label>
                <input id='LastName'
                       className='App-intro'
                       value={this.props.address.lastName}
                       onChange={this.props.onNameChange}/><br/>
                <label>Street: </label>
                <input id='Street'
                       className='App-intro'
                       value={this.props.address.Street}
                       onChange={this.props.onNameChange}/><br/>
                <label>City: </label>
                <input id='City'
                       className='App-intro'
                       value={this.props.address.City}
                       onChange={this.props.onNameChange}/><br/>
                <label>State: </label>
                <input id='State'
                       className='App-intro'
                       value={this.props.address.State}
                       onChange={this.props.onNameChange}/><br/>
                <label>Zip Code: </label>
                <input id='Zip'
                       className='App-intro'
                       value={this.props.address.Zip}
                       onChange={this.props.onNameChange}/><br/>
                <div className='editButtons'>
                    <button id='firstAddress' onClick={this.props.OnFirstAddress}>First Address</button>
                    <button id='changeAddress' onClick={this.props.OnGetAddress}>Next Address</button>
                    <button id='previousAddress' onClick={this.props.OnPrevAddress}>Previous Address</button>
                    <button id='lastAddress' onClick={this.props.OnLastAddress}>Last Address</button>
                </div>
            </div>
        );
    }
}

export default AddressEdit;
