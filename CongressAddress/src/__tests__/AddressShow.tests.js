/**
 * Created by bcuser on 4/26/17.
 */
import React from 'react';
import {shallow} from 'enzyme';
import AddressShow from '../components/AddressShow';
import addresses from '../address-list';

describe('AddressShow Shallow Suite', function () {

    let address = {};
    let quiet = true;
    beforeEach(function () {
        address = addresses[0];
    });

    const getLast = (wrapper) => {
        if (!quiet) {
            const ninep = wrapper.find('p').last().debug();
            console.log(ninep);
        }
        ;
    };
    // additional tests for all the address fields
    //==================================

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const firstName = <p className='App-intro'>firstName: unknown</p>;
        //console.log(wrapper);
        expect(wrapper.contains(firstName)).toEqual(true);
    });

    //lastName===

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const lastName = <p className='App-intro'>lastName: unknown</p>;
        expect(wrapper.contains(lastName)).toEqual(true);
    });

    //Street===

    it('renders and displays the default Street', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const Street = <p className='App-intro'>Street: unknown</p>;
        expect(wrapper.contains(Street)).toEqual(true);
    });

    //City===

    it('renders and displays the default City', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const City = <p className='App-intro'>City: unknown</p>;
        expect(wrapper.contains(City)).toEqual(true);
    });

    //State===

    it('renders and displays the default State', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const State = <p className='App-intro'>State: unknown</p>;
        expect(wrapper.contains(State)).toEqual(true);
    });

    //Zip Code===

    it('renders and displays the default Zip code', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const Zip = <p className='App-intro'>Zip: unknown</p>;
        expect(wrapper.contains(Zip)).toEqual(true);
    });

});
