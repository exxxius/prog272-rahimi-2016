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
import {
    getByIndex, saveByIndex, delElfKey, clearLocalStorage
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
        this.onRefreshData = this.onRefreshData.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.dbAddressSave = this.dbAddressSave.bind(this);
        this.loadDataCallback = this.loadDataCallback.bind(this);
    }

    loadDataCallback(addressCount, address) {
        this.setState({
            addressCount: addressCount,
            address: address
        });
    };

    componentDidMount() {
        logger.log('COMPONENT DID MOUNT!');
        this.loadFromDatabase();
    }

    loadFromDatabase() {
        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cant get address Count when trying to load from Database');
            }
            that.addressCount = addressCount;
            logger.log('LOADED ADDRESS');
            const address = getByIndex(that.addressIndex);
            that.setState({
                address: address
            });
        });
    }

    onRefreshData(event) {
        dataLoader.clear();
        this.loadFromDatabase();
        event.preventDefault();
    }

    // jscs:ignore disallowTrailingWhitespace
    onAddressChange(event) {
        console.log('NextBtn clicked');
        detailLogger.log('onAddressChange called with', event.target.id);
        event.preventDefault();
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

    deleteRecord(event) {
        console.log('DELbtn clicked');
        event.preventDefault();
        var address = getByIndex(this.addressIndex);
        delElfKey(address);
        window.location.reload();
        /*this.addressIndex += 1;
        detailLogger.log('addressIndex', this.addressIndex);
        address = getByIndex(this.addressIndex);
        this.setState({
            address: address
        });*/
    };

    onPrevIndex(event) {
        //console.log('PreviousBtn clicked');
        event.preventDefault();
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
        //console.log('firstBtn clicked');
        event.preventDefault();
        this.addressIndex = 0;
        const address = getByIndex(this.addressIndex);
        this.setState({
            address: address
        });
    }

    onLastIndex(event) {
        //console.log('lastBtn clicked');
        event.preventDefault();
        this.addressIndex = this.addressCount - 1;
        const address = getByIndex(this.addressIndex);
        this.setState({
            address: address
        });
    }

    dbAddressSave() {
        console.log('SAVEbtn clicked');
        const address = getByIndex(this.addressIndex);
        const url = '/update' +
            '?id=' + address._id +
            '&address=' + JSON.stringify(address);
        fetch(url)
            .then((data) => data.json())
            .then(function(data) {
                logger.log(JSON.stringify(data, null, 4));
            }).catch(function(err) {
            const message = 'Could not insert or display data';
            alert(message + err);
            logger.log(err);
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
        saveByIndex(address, this.addressIndex);
        this.setState({
            address: address
        });
    };

    clearLocalStorage() {
        clearLocalStorage();
    }

    render() {
        return (
                <div className='container'>
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
                                         refreshData={this.onRefreshData}
                                         onDeleteRecord={this.deleteRecord}
                                         onClear={this.clearLocalStorage}
                            />
                        )}/>
                        <Route path='/edit' render={(props) => (
                            <AddressEdit {...props}
                                         address={this.state.address}
                                         onGetAddress={this.onAddressChange}
                                         onNameChange={this.onNameChange}
                                         onFirstAddress={this.onFirstIndex}
                                         onLastAddress={this.onLastIndex}
                                         onPrevAddress={this.onPrevIndex}
                                         refreshData={this.onRefreshData}
                                         onClear={this.clearLocalStorage}
                                         onDbSave={this.dbAddressSave}
                            />
                        )}/>
                        <Route path='/small' component={SmallNumbers}/>
                    </div>
                </div>
        );
    }
}
export default DataMaven;
