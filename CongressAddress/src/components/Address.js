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
    constructor(props) {
        super(props);
        logger.log('ADDRESS CONSTRUCTOR CALLED');
    }
    
    render() {
        this.quiet = true;
        if (!this.quiet) { console.log('ADDRESS RENDER'); }
        return (
            <div className='App'>
                <AddressShow
                    address={this.props.address}
                    onGetAddress={this.props.onAddressChange}
                />
            </div>
        );
    }
}
export default Address;

/*
OnFirstAddress={this.props.onFirstIndex}
OnLastAddress={this.props.onLastIndex}
OnPrevAddress={this.props.prevIndex}*/
