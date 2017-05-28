/**
 * Created by bcuser on 5/24/17.
 */
/**
 * Created by bcuser on 4/23/17.
 */
import React from 'react';
import {mount} from 'enzyme';
import ElfEnzymeDebug from '../ElfDebugEnzyme.js';
import DataMaven from '../components/DataMaven';
const ElfDebug = new ElfEnzymeDebug(true, 'AddressEdit.test.js');
jest.mock('whatwg-fetch');
import {MemoryRouter} from 'react-router';

describe('React Address Test Suite', function() {

    var quiet = true;

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
   /* const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressEditRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };*/

    it('See if true is true?!', () => {
        expect(true).toBe(true);
    });

    //==================================

    it('renders and displays the default first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const firstName = <input id='FirstName' className='App-intro' value='Lamars'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 1, false);
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders and displays the click First button first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const firstName = <input id='FirstName' className='App-intro' value='Lamar'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 1, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders and displays the last click button first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const firstName = <input id='FirstName' className='App-intro' value='Timothy'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 1, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders and displays the clicked Next first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const firstName = <input id='FirstName' className='App-intro' value='Roger'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 1, false);
        wrapper.find('button#changeAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });
    it('renders and displays the clicked Prev first name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const firstName = <input id='FirstName' className='App-intro' value='Lamar'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 1, true);
        wrapper.find('button#changeAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <input id='LastName' className='App-intro' value='Alexander'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 3, false);
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked FIRST last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <input id='LastName' className='App-intro' value='Alexander'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 3, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked LAST last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <input id='LastName' className='App-intro' value='Kaine'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 3, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked Next last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <input id='LastName' className='App-intro' value='Wicker'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 3, false);
        wrapper.find('button#changeAddress').simulate('click');
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });
    it('renders and displays the clicked Prev last name', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const lastName = <input id='LastName' className='App-intro' value='Alexander'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 3, false);
        wrapper.find('button#changeAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(lastName)).toEqual(true);
    });

    it('renders and displays the default Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <input id='Street' className='App-intro' value='455 Dirksen Senate Office Building'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 6, false);
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <input id='Street' className='App-intro' value='455 Dirksen Senate Office Building'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 6, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <input id='Street' className='App-intro' value='231 Russell Senate Office Building'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 6, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked next Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <input id='Street' className='App-intro' value='555 Dirksen Senate Office Building'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 6, false);
        wrapper.find('button#changeAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });
    it('renders and displays the clicked prev Street', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Street = <input id='Street' className='App-intro' value='455 Dirksen Senate Office Building'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 6, false);
        wrapper.find('button#changeAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Street)).toEqual(true);
    });


    it('renders and displays the default City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <input id='City' className='App-intro' value='Washington DC'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 8, false);
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <input id='City' className='App-intro' value='Washington DC'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 8, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <input id='City' className='App-intro' value='Washington DC'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 8, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked next City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <input id='City' className='App-intro' value='Washington DC'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 8, false);
        wrapper.find('button#changeAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });
    it('renders and displays the clicked prev City', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const City = <input id='City' className='App-intro' value='Washington DC'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 8, false);
        wrapper.find('button#changeAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(City)).toEqual(true);
    });

    it('renders and displays the default State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <input id='State' className='App-intro' value='TN'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 11, false);
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <input id='State' className='App-intro' value='TN'/>;
        ElfDebug.getIndex(wrapper, 'div#addressEditRender', 11, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <input id='State' className='App-intro' value='VA'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 11, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked next State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <input id='State' className='App-intro' value='MS'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 11, false);
        wrapper.find('button#changeAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });
    it('renders and displays the clicked prev State', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const State = <input id='State' className='App-intro' value='TN'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 11, false);
        wrapper.find('button#changeAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(State)).toEqual(true);
    });

    it('renders and displays the default Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <input id='Zip' className='App-intro' value='20510'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 13, false);
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked FIRST Button Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <input id='Zip' className='App-intro' value='20510'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 13, false);
        wrapper.find('button#firstAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked LAST Button Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <input id='Zip' className='App-intro' value='20510'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 13, false);
        wrapper.find('button#lastAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked next Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <input id='Zip' className='App-intro' value='20510'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 13, false);
        wrapper.find('button#changeAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });
    it('renders and displays the clicked prev Zip Code', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        const Zip = <input id='Zip' className='App-intro' value='20510'/>;
        //ElfDebug.getIndex(wrapper, 'div#addressEditRender', 13, false);
        wrapper.find('button#changeAddress').simulate('click');
        wrapper.find('button#previousAddress').simulate('click');
        expect(wrapper.containsMatchingElement(Zip)).toEqual(true);
    });

});
