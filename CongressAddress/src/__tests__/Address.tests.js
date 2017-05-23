/**
 * Created by bcuser on 4/23/17.
 */
import React from 'react';
import {mount} from 'enzyme';
import Address from '../components/Address';
import addresses from '../address-list';
import ElfEnzymeDebug from '../ElfDebugEnzyme.js';
import DataMaven from "../components/DataMaven";
const ElfDebug = new ElfEnzymeDebug(true, 'Address.test.js');
jest.mock('whatwg-fetch');

describe('React Address Test Suite', function() {

    var quiet = true;
    // I added beforeAll function to pass the "localStorage is not defined" ReferenceError in tests.
/*    beforeAll(() => {
        const ls = require('../assets/elf-local-storage.js');
        ls.setLocalStorage();
    });*/

    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});

    });
    /*
     * @param {object} wrapper - Container for a bunch of HTML nodes
     * @param {number} index - Index of HTML element.
     * @param {boolean} talkToMe - Speak even if quiet is true
     */
    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    it('See if true is true?!', () => {
        expect(true).toBe(true);
    });
    // additional tests for all the address fields
    //==================================

    it('renders and displays the default first name', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const firstName = <p className='App-intro'>firstName: unknown</p>;
        //console.log(wrapper);
        expect(wrapper.contains(firstName)).toEqual(true);
    });

    it('renders button click message first Name', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const firstName = <p className='App-intro'>firstName: Roger</p>;
        wrapper.find('button#getAddress').simulate('click');
        //getIndex(wrapper, 1, true);
        expect(wrapper.contains(firstName)).toEqual(true);
    });

    //lastName===

    it('renders and displays the default last name', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const lastName = <p className='App-intro'>lastName: unknown</p>;
        expect(wrapper.contains(lastName)).toEqual(true);
    });

    it('renders button click message lastName', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const lastName = <p className='App-intro'>lastName: Wicker</p>;
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, false);
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(lastName)).toEqual(true);
    });

    //Street===

    it('renders and displays the default Street', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const Street = <p className='App-intro'>Street: unknown</p>;
        expect(wrapper.contains(Street)).toEqual(true);
    });

    it('renders button click message Street', () => {
        const wrapper = mount(<Address address={addresses}/>);
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 2, false);
        const Street = <p className='App-intro'>Street: 555 Dirksen Senate Office Building</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(Street)).toEqual(true);
    });

    //City===

    it('renders and displays the default City', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const City = <p className='App-intro'>City: unknown</p>;
        expect(wrapper.contains(City)).toEqual(true);
    });

    it('renders button click message City', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const City = <p className='App-intro'>City: Washington DC</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(City)).toEqual(true);
    });

    //State===

    it('renders and displays the default State', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const State = <p className='App-intro'>State: unknown</p>;
        expect(wrapper.contains(State)).toEqual(true);
    });

    it('renders button click message State', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const State = <p className='App-intro'>State: MS</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(State)).toEqual(true);
    });

    //Zip Code===

    it('renders and displays the default Zip code', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const Zip = <p className='App-intro'>Zip: unknown</p>;
        expect(wrapper.contains(Zip)).toEqual(true);
    });

    it('renders button click message Zip', () => {
        const wrapper = mount(<Address address={addresses}/>);
        const Zip = <p className='App-intro'>Zip: 20510</p>;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.contains(Zip)).toEqual(true);
    });
});
