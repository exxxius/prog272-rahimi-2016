/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';

//TODO: Rename to ElfAddress, ElfMenu, ElfHeader to avoid colisions

class Address extends Component {
    constructor() {
        super();

        this.addressIndex = 0;
        this.state = {
            address: addresses[this.addressIndex]
        }
    }

    getAddress = () => {
        this.addressIndex = 1;
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
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    OnGetAddress={this.getAddress}
                />
                <AddressEdit
                    address={this.state.address}
                    OnGetAddress={this.getAddress}
                    onNameChange={this.onNameChange}
                />

            </div>
        );
    }
}
export default Address;