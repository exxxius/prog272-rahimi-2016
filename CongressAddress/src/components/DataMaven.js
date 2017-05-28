/**
 * Created by bcuser on 5/20/17.
 */
import React, {Component} from 'react';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import {Route} from 'react-router-dom';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';
import '../css/App.css';
import Logger from '../assets/elf-logger';
const logger = new Logger('address', 'yellow', 'green', '18px');
const detailLogger = new Logger('address:detail', 'white', 'green', '14px');
import 'whatwg-fetch';
import DataLoader from './DataLoader.js';
const dataLoader = new DataLoader();
import {getByIndex
} from '../assets/elf-local-storage';

class DataMaven extends Component {

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
        //const address = getByIndex(this.addressIndex);

        this.state = {
            address: {
                "firstName": "Lamars",
                "lastName": "Alexander",
                "Street": "455 Dirksen Senate Office Building",
                "City": "Washington DC",
                "State": "TN",
                "Zip": "20510",
                "phone": "202-224-4944",
                "website": "https://www.alexander.senate.gov/public",
                "email": "",
                "contact": "http://www.alexander.senate.gov/public/index.cfm?p=Email"

            }
    };
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onLastIndex = this.onLastIndex.bind(this);
        this.onFirstIndex = this.onFirstIndex.bind(this);
        this.onPrevIndex = this.onPrevIndex.bind(this);
    }

    onAddressChange(event) {
        console.log('NextBtn clicked');
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

    onPrevIndex(event) {
        console.log('PreviousBtn clicked');
        if (this.addressIndex === 0) {
            this.addressIndex = this.addressCount;
        } else {
            this.addressIndex -= 1;
        }
        const address = getByIndex(this.addressIndex);
        this.setState({
            address: address
        });
    }

    onFirstIndex(event) {
        console.log('firstBtn clicked');
        this.addressIndex = 0;
        const address = getByIndex(this.addressIndex);
        this.setState({
            address: address
        });
    }

    onLastIndex(event) {
        console.log('lastBtn clicked');
        this.addressIndex = this.addressCount - 1;
        const address = getByIndex(this.addressIndex);
        this.setState({
            address: address
        });
    }

    onNameChange(event) {
        logger.log('ON NAME CHANGE');
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
        return (
            <div>
                    <ElfHeader />
                    <ElfMenu/>
                    <div>
                        <Route exact path='/' render={(props) => (
                            <AddressShow {...props}
                                         address={this.state.address}
                                         onGetAddress={this.onAddressChange}
                                         onFirstAddress={this.onFirstIndex}
                                         onLastAddress={this.onLastIndex}
                                         onPrevAddress={this.onPrevIndex}
                            />
                        )}/>'
                        <Route path='/edit' render={(props) => (
                            <AddressEdit {...props}
                                         address={this.state.address}
                                         onGetAddress={this.onAddressChange}
                                         onNameChange={this.onNameChange}
                                         onFirstAddress={this.onFirstIndex}
                                         onLastAddress={this.onLastIndex}
                                         onPrevAddress={this.onPrevIndex}
                            />
                        )}/>'
                        <Route path='/small' component={SmallNumbers}/>
                    </div>
            </div>
        );
    }
}
export default DataMaven;
