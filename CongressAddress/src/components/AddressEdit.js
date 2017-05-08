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
                <input id='FirstName'
                       className='App-intro'
                       value={this.props.address.firstName}
                       onChange={this.props.onNameChange}/>

                <input id='LastName'
                       className='App-intro'
                       value={this.props.address.lastName}
                       onChange={this.props.onNameChange}/>
                <input id='Street'
                       className='App-intro'
                       value={this.props.address.Street}
                       onChange={this.props.onNameChange}/>
                <input id='City'
                       className='App-intro'
                       value={this.props.address.City}
                       onChange={this.props.onNameChange}/>
                <input id='State'
                       className='App-intro'
                       value={this.props.address.State}
                       onChange={this.props.onNameChange}/>
                <input id='Zip'
                       className='App-intro'
                       value={this.props.address.Zip}
                       onChange={this.props.onNameChange}/>

                <button id='changeAddress' onClick={this.props.OnGetAddress}>Next AddressEdit</button>

            </div>
        );
    }
}

export default AddressEdit;
