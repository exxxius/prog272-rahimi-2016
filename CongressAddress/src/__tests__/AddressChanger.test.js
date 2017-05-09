/**
 * Created by bcuser on 5/8/17.
 */
/**
 * Created by bcuser on 4/23/17.
 */
import React from 'react';
import {mount} from 'enzyme';
import AddressChanger from '../components/AddressChanger';
import AddressEdit from '../components/AddressEdit';
import addresses from '../address-list';
import ElfEnzymeDebug from '../ElfEnzymeDebug.js';
const ElfDebug = new ElfEnzymeDebug(true, 'AddressChanger.test.js');
describe('React AddressChanger Test Suite', function() {

    var quiet = true;

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
        const wrapper = mount(<AddressChanger />);
        ElfDebug.getFirst(wrapper, 'input');
        const firstName = <input id='FirstName' className='App-intro' value='unknown'/>;
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });

    it('renders button click message first Name', () => {
        const wrapper = mount(<AddressChanger />);
        const firstName = <input id='FirstName' className='App-intro' value='Edwin'/>;
        wrapper.find('button#changeAddress').simulate('click');
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, false);
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });

    //lastName===

    it('renders and displays the default Last name', () => {
        const wrapper = mount(<AddressChanger />);
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, false);
        const lastName = <input id='LastName' className='App-intro' value='unknown'/>;
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });

    it('renders button click message Last Name', () => {
        const wrapper = mount(<AddressChanger />);
        const lastName = <input id='LastName' className='App-intro' value='Davis'/>;
        wrapper.find('button#changeAddress').simulate('click');
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 1, false);
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });

    //Street===

    it('renders and displays the default Street', () => {
        const wrapper = mount(<AddressChanger />);
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 2, false);
        const Street = <input id='Street' className='App-intro' value='unknown'/>;
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });

    it('renders button click message Street', () => {
        const wrapper = mount(<AddressChanger />);
        const Street = <input id='Street' className='App-intro' value= '2576 152nd AVE NE'/>;
        wrapper.find('button#changeAddress').simulate('click');
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 2, false);
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });

    //City===

    it('renders and displays the default City', () => {
        const wrapper = mount(<AddressChanger />);
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 3, false);
        const City = <input id='City' className='App-intro' value='unknown'/>;
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });

    it('renders button click message City', () => {
        const wrapper = mount(<AddressChanger />);
        const City = <input id='City' className='App-intro' value= 'Redmond'/>;
        wrapper.find('button#changeAddress').simulate('click');
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 3, false);
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });

    //State===

    it('renders and displays the default State', () => {
        const wrapper = mount(<AddressChanger />);
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 4, false);
        const State = <input id='State' className='App-intro' value='unknown'/>;
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });

    it('renders button click message State', () => {
        const wrapper = mount(<AddressChanger />);
        const State = <input id='State' className='App-intro' value= 'WA'/>;
        wrapper.find('button#changeAddress').simulate('click');
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 4, false);
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });

    //Zip Code===

    it('renders and displays the default Zip code', () => {
        const wrapper = mount(<AddressChanger />);
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 5, false);
        const Zip = <input id='Zip' className='App-intro' value='unknown'/>;
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });

    it('renders button click message Zip', () => {
        const wrapper = mount(<AddressChanger />);
        const Zip = <input id='Zip' className='App-intro' value= '98052'/>;
        wrapper.find('button#changeAddress').simulate('click');
        ElfDebug.getIndex(wrapper, 'div#addressShowRender', 5, false);
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
});

