/**
 * Created by bcuser on 5/13/17.
 */
import Logger from '../assets/elf-logger';
const logger = new Logger('data-loader', 'yellow', 'green', '18px');
import {saveByIndex} from '../assets/elf-local-storage';
import 'whatwg-fetch';

export default class DataLoader {

    constructor() {
        this.STORE_SET = ['elven-store', 'set', 'elven-count'];
        this.loadAddresses = this.loadAddresses.bind(this);
    }

    dataLoaded() {
        const elfStore = localStorage.getItem(this.STORE_SET[0]);
        return (elfStore === this.STORE_SET[1]);
    }

    setLocalStorage(addresses) {
        logger.log('SET LOCAL', addresses);
        //localStorage.setItem('elven-store', 'set');
        localStorage.setItem(this.STORE_SET[0], this.STORE_SET[1]);
        //localStorage.setItem('elven-count', addresses.length);
        localStorage.setItem(this.STORE_SET[2], addresses.length);
        addresses.forEach(function(address, index) {
            saveByIndex(address, index);
        });
        return addresses;
    }

    loadAddresses(callback) {
        const that = this;
        if (this.dataLoaded()) {
            logger.log('Using data from localstore');
            callback(localStorage.getItem(this.STORE_SET[2]));
        } else {
            logger.log('Loading data from Database');
            fetch('./all-data')
                .then((data) => data.json())
                .then((data) => {
                logger.log(JSON.stringify(data, null, 4));
                that.setLocalStorage(data);
                callback(data.length);
            }).catch(function(err) {
                logger.log(err);
            });
        }
    }
/*    loadAddresses(callback) {
        const that = this;
        if (this.dataLoaded()) {
            logger.log('Using data from localstore');
            callback(localStorage.getItem(this.STORE_SET[2]));
        } else {
            logger.log('Loading data from Database');
            //fetch('./address-list.json').then(function(data) {   //CHANGE to './all-data'
            fetch('./address-list.json').then(function(data) {   //CHANGE to './all-data'
            const addresses = data.json();
            console.log(addresses);
            return addresses;
            }).then(function(data) {
                logger.log(JSON.stringify(data, null, 4));
                //console.log(that);
                that.setLocalStorage(data);
                callback(data.length);
            }).catch(function(err) {
                logger.log(err);
            });
        }
    }*/
}
