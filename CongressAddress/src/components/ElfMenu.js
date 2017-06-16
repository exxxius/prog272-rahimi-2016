/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../css/App.css';


class ElfMenu extends Component {
    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                        <LinkContainer to='/'><NavItem>Home</NavItem></LinkContainer>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/'><NavItem>Address Show</NavItem></LinkContainer>
                        <LinkContainer to='/edit'><NavItem>Address Edit</NavItem></LinkContainer>
                        <LinkContainer to='/small'><NavItem>Small numbers</NavItem></LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
}


export default ElfMenu;
