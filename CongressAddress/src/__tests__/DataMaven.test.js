/**
 * Created by bcuser on 5/20/17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataMaven from '../components/DataMaven';
import {
    BrowserRouter as Router} from 'react-router-dom';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebug = new ElfDebugEnzyme(true, 'DataMaven.test.js');
jest.mock('whatwg-fetch');

describe('DataMaven Suite', function() {

    //Added to pass the localstorage error on test!
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
    it('renders DataMaven component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><DataMaven /></Router>, div);
    });

 /*   it('renders and displays a Router', () => {
        const wrapper = shallow(<DataMaven />);
        elfDebug.getAll(wrapper);
        var router = wrapper.find('BrowserRouter');
        //console.log(router);
        expect(router.length).toEqual(1);
    });*/

    it('renders and displays at least one Route', () => {
        const wrapper = shallow(<DataMaven  />);
        elfDebug.getAll(wrapper);
        var router = wrapper.find('Route');
        expect(router.length).toBeGreaterThan(0);
    });

    it('renders and displays the ElfHeader', () => {
        const wrapper = shallow(<DataMaven  />);
        //elfDebug.getAll(wrapper, false);
        var router = wrapper.find('ElfHeader');
        expect(router.length).toEqual(1);
    });

    it('renders and displays the ElfMenu', () => {
        const wrapper = shallow(<DataMaven  />);
        //elfDebug.getAll(wrapper, false);
        var router = wrapper.find('ElfMenu');
        expect(router.length).toEqual(1);
    });
});
