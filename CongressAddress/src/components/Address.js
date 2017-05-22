/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import Logger from '../assets/elf-logger';
const logger = new Logger('address', 'yellow', 'green', '18px');
const detailLogger = new Logger('address:detail', 'white', 'green', '14px');
import 'whatwg-fetch';
import DataLoader from './DataLoader.js';
const dataLoader = new DataLoader();
import { saveToLocalStorage,
    /*clearLocalStorage,
    getLocalStorage,*/ getByIndex } from '../assets/elf-local-storage';

class Address extends Component {
    constructor() {
        super();
        this.addressIndex = 0;
        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
        });
        var unknown = 'unknown';
        this.state = {
            address: {
                'firstName': unknown,
                'lastName': unknown,
                'Street': unknown,
                'City': unknown,
                'State': unknown,
                'Zip': unknown
            }
            //address: addresses[this.addressIndex]
        };
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onLastIndex = this.onLastIndex.bind(this); // I added
        this.onFirstIndex = this.onFirstIndex.bind(this); // I added
        this.prevIndex = this.prevIndex.bind(this);
        //
        //const address = addresses[this.addressIndex];
        addresses.forEach(function(address) {
            saveToLocalStorage(address);
        });
    }

    onAddressChange(event) {
        detailLogger.log('onAddressChange called with', event.target.id);
        if (event.target.id.startsWith('dec')) {
            if (this.addressIndex > 0) {
                this.addressIndex -= 1;
            }
        } else {
            if (this.addressIndex < this.addressCount) {
                this.addressIndex += 1;
            }
        }
        detailLogger.log('addressIndex', this.addressIndex);
        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        });
    };

    prevIndex (event) {
        if (this.addressIndex === 0) {
            this.addressIndex = addresses.length - 1;} else {
            this.addressIndex -= 1;}
        const address = addresses[this.addressIndex];
        this.setState({
            address: address
        });
    }

    // I added
    onFirstIndex (event) {
        console.log('first clicked');
        this.addressIndex = 0;
        const address = addresses[this.addressIndex];
        this.setState({
            address: address
        });
    }
    // I added
    onLastIndex (event) {
        console.log('last clicked');
        this.addressIndex = addresses.length - 1;
        const address = addresses[this.addressIndex];
        this.setState({
            address: address
        });
    }

    onNameChange(event) {
        logger.log('ON NAME CHANGE');
        //const address = addresses[this.addressIndex];
        const address = getByIndex(this.addressIndex);
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
        });
    };

    render() {
        this.quiet = true;
        if (!this.quiet) { console.log('ADDRESS RENDER'); }
        return (
            <div className='App'>
                <AddressShow
                    address={this.state.address}
                    OnGetAddress={this.onAddressChange}
                    OnFirstAddress={this.onFirstIndex}
                    OnLastAddress={this.onLastIndex}
                    OnPrevAddress={this.prevIndex}
                />
            </div>
        );
    }
}
export default Address;
