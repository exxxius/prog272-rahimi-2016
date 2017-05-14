/**
 * Created by bcuser on 4/23/17.
 */
import React from 'react';
import Header from '../components/ElfHeader';
import {shallow} from 'enzyme';

import ElfEnzymeDebug from '../ElfEnzymeDebug.js';
const elfDebug = new ElfEnzymeDebug(true, 'AddressChanger.test.js');

describe('Header test', function () {

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to Congress Address List</h2>;
        elfDebug.getAll(wrapper, 'div');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});

