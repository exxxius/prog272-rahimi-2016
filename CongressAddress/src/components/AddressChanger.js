import React from 'react';
import '../css/App.css';
import AddressEdit from './AddressEdit';
import Address from './Address';

class AddressChanger extends Address {
    render() {
        this.quiet = true;
        if (!this.quiet) {
            console.log('AdressChanger RENDER');
        }
        return (

            <div className='App'>
                <AddressEdit
                    address={this.state.address}
                    OnGetAddress={this.onAddressChange}
                    onNameChange={this.onNameChange}
                    OnFirstAddress={this.onFirstIndex}
                    OnLastAddress={this.onLastIndex}
                    OnPrevAddress={this.prevIndex}
                />
            </div>
        );
    }
}
export default AddressChanger;
