import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressEdit from './AddressEdit';
import Address from "./Address";


class AddressChanger extends Address {
        constructor() {
            super();
            this.onAddressChange = this.onAddressChange.bind(this);
        }
        onAddressChange(event) {
        this.addressIndex += 1;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };

    onNameChange = (event) => {
      //  this.log("ON NAME CHANGE");
        const address = addresses[this.addressIndex];
        switch (event.target.id) {
            case 'FirstName':
                address.firstName = event.target.value;
                break;
            case 'LastName':
                address.lastName = event.target.value;
                break;
            case 'Street':
                address.Street = event.target.value;
                break;
            case 'City':
                address.City = event.target.value;
                break;
            case 'State':
                address.State = event.target.value;
                break;
            case 'Zip':
                address.Zip = event.target.value;
                break;

            default:
                throw new Error('OH NO BAD CASE IN Address onNameChange');
        }
        this.setState({
            address: address
        })
    };


    render() {
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
        return (

            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    OnGetAddress={this.getAddress}
                    onNameChange={this.onNameChange}
                />
            </div>
        );
    }
}
export default AddressChanger;