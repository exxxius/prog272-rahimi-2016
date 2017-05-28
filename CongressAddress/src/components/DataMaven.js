/**
 * Created by bcuser on 5/20/17.
 */
import React, {Component} from 'react';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';
import AddressChanger from './AddressChanger';
import '../css/App.css';
import addresses from '../address-list';
import Logger from '../assets/elf-logger';
const logger = new Logger('address', 'yellow', 'green', '18px');
const detailLogger = new Logger('address:detail', 'white', 'green', '14px');
import 'whatwg-fetch';
import DataLoader from './DataLoader.js';
const dataLoader = new DataLoader();
import { saveToLocalStorage,
    /*clearLocalStorage,
     getLocalStorage,saveByIndex,*/ getByIndex } from '../assets/elf-local-storage';

class DataMaven extends Component {

    constructor(props) {
        super(props);
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
            address: {}
        };

        this.onAddressChange = this.onAddressChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onLastIndex = this.onLastIndex.bind(this); // I added
        this.onFirstIndex = this.onFirstIndex.bind(this); // I added
        this.prevIndex = this.prevIndex.bind(this);
        //
        //const address = addresses[this.addressIndex];
        /*addresses.forEach(function(address) {
            saveToLocalStorage(address);
        });*/
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
        return (
            <Router>
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
                                         onPrevAddress={this.prevIndex}

                            />
                        )}/>'
                        <Route path='/edit' component={AddressEdit}/>
                        <Route path='/small' component={SmallNumbers}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default DataMaven;

/*
onNameChange={this.onNameChange}
OnFirstAddress={this.onFirstIndex}
OnLastAddress={this.onLastIndex}
OnPrevAddress={this.prevIndex}*/
