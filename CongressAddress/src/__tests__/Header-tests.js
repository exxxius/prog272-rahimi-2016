/**
 * Created by bcuser on 4/23/17.
 */
import React from 'react';
import Header from '../components/Header'
import { shallow } from 'enzyme';


describe('Header test', function() {


    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});

