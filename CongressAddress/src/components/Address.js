/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import {
    saveToLocalStorage,
    clearLocalStorage,
    getLocalStorage } from '../assets/elf-local-storage';

class Address extends Component {
    constructor() {
        super();
        this.addressIndex = 0;
        this.state = {
            address: addresses[this.addressIndex]
        };
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }


    onAddressChange = () => {
        this.addressIndex += 1;
        const address = addresses[this.addressIndex];
        this.setState({
            address: address
        })
    };

    onNameChange(event) {
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
        this.quiet = true;
        if (!this.quiet) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    OnGetAddress={this.onAddressChange}
                />
            </div>
        );
    }
}
export default Address;